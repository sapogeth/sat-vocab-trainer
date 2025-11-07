"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    // Track mouse movement
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    // Check if hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if hovering over a word card (has cursor-pointer class and is within the grid)
      const isCard =
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer") !== null;

      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(isInteractive);
      setIsHoveringCard(isCard);
    };

    // Hide cursor when leaving window
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Don't render on mobile/touch devices
  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.body.style.cursor = "auto";
    }
  }, []);

  // Hide on touch devices
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  if (isTouchDevice) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease-out",
      }}
    >
      {/* Outer glow ring */}
      <div
        className={`absolute rounded-full blur-md transition-all duration-200 ${
          isHoveringCard ? "bg-purple-500/40" : "bg-indigo-500/30"
        }`}
        style={{
          width: isHovering ? "32px" : "20px",
          height: isHovering ? "32px" : "20px",
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
        }}
      />
      {/* Inner solid circle */}
      <div
        className={`absolute rounded-full transition-all duration-200 ${
          isHoveringCard ? "bg-purple-500" : "bg-indigo-500"
        }`}
        style={{
          width: isHovering ? "12px" : "8px",
          height: isHovering ? "12px" : "8px",
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
        }}
      />
    </div>
  );
}
