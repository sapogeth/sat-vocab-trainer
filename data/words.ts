export interface Word {
  word: string;
  definition: string;
  russian: string;
  example: string;
  tip: string;
  partOfSpeech?: string; // Optional: noun, verb, adjective, adverb, etc.
}

export const words: Word[] = [
{
    word: "assess",
    definition: "to evaluate or estimate the nature, ability, or quality of something",
    russian: "оценивать, анализировать",
    example: "The teacher will assess your progress through regular tests.",
    tip: "Think of 'assess' as giving something a grade or value.",
    partOfSpeech: "verb"
  },
{
    word: "odor",
    definition: "a distinctive smell, especially an unpleasant one",
    russian: "запах, аромат",
    example: "The odor of fresh bread filled the bakery.",
    tip: "Remember: odor = smell (often bad).",
    partOfSpeech: "noun"
  },
{
    word: "undermined",
    definition: "weakened or damaged something gradually or insidiously",
    russian: "подорвать, ослабить",
    example: "His constant criticism undermined her confidence.",
    tip: "Under + mine = digging under to weaken the foundation.",
    partOfSpeech: "noun"
  },
{
    word: "discrepancy",
    definition: "a difference or inconsistency between things that should be the same",
    russian: "расхождение, несоответствие",
    example: "There was a discrepancy between the two reports.",
    tip: "Look for the gap or mismatch between two things.",
    partOfSpeech: "noun"
  },
{
    word: "attribute",
    definition: "a quality or characteristic of someone or something",
    russian: "качество, характеристика; приписывать",
    example: "Patience is an important attribute for a teacher.",
    tip: "An attribute is what makes something special or unique.",
    partOfSpeech: "noun"
  },
{
    word: "atypical",
    definition: "not typical; unusual or different from the norm",
    russian: "нетипичный, необычный",
    example: "Her atypical approach to problem-solving impressed the team.",
    tip: "A-typical = NOT typical.",
    partOfSpeech: "adjective"
  },
{
    word: "permanent",
    definition: "lasting or intended to last indefinitely without change",
    russian: "постоянный, вечный",
    example: "The accident left a permanent scar on his arm.",
    tip: "Permanent = stays forever (like a permanent marker).",
    partOfSpeech: "adjective"
  },
{
    word: "borrow",
    definition: "to take and use something belonging to someone else with the intention of returning it",
    russian: "брать взаймы, занимать",
    example: "Can I borrow your pen for a moment?",
    tip: "Borrow = take temporarily; you must give it back.",
    partOfSpeech: "verb"
  },
{
    word: "feature",
    definition: "a distinctive attribute or aspect of something",
    russian: "особенность, черта; показывать",
    example: "The main feature of this phone is its long battery life.",
    tip: "A feature is what stands out or makes it special.",
    partOfSpeech: "noun"
  },
{
    word: "outlier",
    definition: "a person or thing that is markedly different from others",
    russian: "выброс, исключение из правила",
    example: "In the data set, 150 was an outlier among numbers below 20.",
    tip: "Out + lier = lies outside the normal range.",
    partOfSpeech: "noun"
  },
{
    word: "contemporaneous",
    definition: "existing or occurring at the same time",
    russian: "одновременный, современный",
    example: "The two civilizations were contemporaneous but never interacted.",
    tip: "Contemporary = same time period.",
    partOfSpeech: "adjective"
  },
{
    word: "collude with",
    definition: "to cooperate secretly, especially for fraudulent or deceitful purposes",
    russian: "тайно сговариваться",
    example: "The companies were accused of colluding with each other to fix prices.",
    tip: "Collude = secret cooperation (usually illegal).",
    partOfSpeech: "verb"
  },
{
    word: "dissociate from",
    definition: "to disconnect or separate from an association",
    russian: "отделяться, дистанцироваться",
    example: "The party tried to dissociate from its controversial past.",
    tip: "Dis-sociate = break the social connection.",
    partOfSpeech: "verb"
  },
{
    word: "attest to",
    definition: "to provide or serve as clear evidence of something",
    russian: "подтверждать, свидетельствовать",
    example: "The photos attest to the severity of the damage.",
    tip: "Attest = be a witness or proof of something.",
    partOfSpeech: "verb"
  },
{
    word: "proponents",
    definition: "people who advocate for or support a theory, proposal, or cause",
    russian: "сторонники, защитники",
    example: "Proponents of the new law argue it will reduce pollution.",
    tip: "Pro + ponents = those who are FOR something.",
    partOfSpeech: "adjective"
  },
{
    word: "epitomers",
    definition: "people or things that perfectly represent a quality or type",
    russian: "олицетворение, воплощение",
    example: "She is one of the epitomers of grace and elegance.",
    tip: "Epitome = perfect example of something.",
    partOfSpeech: "noun"
  },
{
    word: "replicability",
    definition: "the ability of a study or experiment to be duplicated",
    russian: "воспроизводимость",
    example: "Replicability is crucial for scientific research.",
    tip: "Replicate = copy, so replicability = can be copied.",
    partOfSpeech: "noun"
  },
{
    word: "impartiality",
    definition: "fair treatment; freedom from bias or favoritism",
    russian: "беспристрастность, объективность",
    example: "Judges must maintain impartiality in all cases.",
    tip: "Im-partial = NOT partial (not biased).",
    partOfSpeech: "noun"
  },
{
    word: "circumspection",
    definition: "careful consideration of all circumstances and possible consequences",
    russian: "осмотрительность, осторожность",
    example: "She approached the negotiation with circumspection.",
    tip: "Circum (around) + spection (looking) = look all around carefully.",
    partOfSpeech: "noun"
  },
{
    word: "attrition",
    definition: "the process of reducing something's strength or effectiveness through sustained attack or pressure",
    russian: "истощение, изнашивание",
    example: "Staff attrition has been high this year due to poor conditions.",
    tip: "Attrition = wearing down gradually (like grinding).",
    partOfSpeech: "noun"
  },
{
    word: "unfailingly",
    definition: "in a reliable and constant manner; always",
    russian: "неизменно, всегда",
    example: "She unfailingly arrives on time for every meeting.",
    tip: "Un-failing = never fails, always happens.",
    partOfSpeech: "adverb"
  },
{
    word: "grudgingly",
    definition: "in a reluctant or resentful manner",
    russian: "неохотно, со скрипом",
    example: "He grudgingly admitted that she was right.",
    tip: "Grudge = holding resentment while doing something.",
    partOfSpeech: "adverb"
  },
{
    word: "sporadically",
    definition: "occurring at irregular intervals; not continuous or steady",
    russian: "спорадически, время от времени",
    example: "It rained sporadically throughout the day.",
    tip: "Sporadic = scattered, random timing.",
    partOfSpeech: "adverb"
  },
{
    word: "self-servingly",
    definition: "in a manner that serves one's own interests, often at others' expense",
    russian: "эгоистично, в своих интересах",
    example: "The politician self-servingly twisted the facts to favor his campaign.",
    tip: "Serving yourself first, not caring about others.",
    partOfSpeech: "adverb"
  },
{
    word: "induce",
    definition: "to bring about or give rise to; to persuade or influence",
    russian: "вызывать, побуждать",
    example: "Warm milk can induce sleep.",
    tip: "Induce = cause something to happen.",
    partOfSpeech: "verb"
  },
{
    word: "reconcile",
    definition: "to restore friendly relations; to make compatible or consistent",
    russian: "примирять, согласовывать",
    example: "It's hard to reconcile her words with her actions.",
    tip: "Reconcile = bring back together or make things match.",
    partOfSpeech: "verb"
  },
{
    word: "overstate",
    definition: "to state or describe something too strongly; to exaggerate",
    russian: "преувеличивать",
    example: "Don't overstate your qualifications on your resume.",
    tip: "Over + state = say MORE than the truth.",
    partOfSpeech: "verb"
  },
{
    word: "integral",
    definition: "necessary to make a whole complete; essential",
    russian: "неотъемлемый, важный",
    example: "Teamwork is integral to our success.",
    tip: "Integral = a crucial part that can't be removed.",
    partOfSpeech: "adjective"
  },
{
    word: "integrate",
    definition: "to combine or incorporate parts into a whole",
    russian: "интегрировать, объединять",
    example: "We need to integrate new technology into our workflow.",
    tip: "Integrate = bring together to make one whole.",
    partOfSpeech: "verb"
  },
{
    word: "subsume",
    definition: "to include or absorb something into something else",
    russian: "включать в себя, подводить под категорию",
    example: "All these issues can be subsumed under the general category of human rights.",
    tip: "Sub-sume = take under or absorb into a bigger category.",
    partOfSpeech: "verb"
  },
{
    word: "dock",
    definition: "a structure extending into water for mooring vessels; to deduct from wages",
    russian: "причал, пристань; вычитать из зарплаты",
    example: "The ship pulled into the dock at dawn.",
    tip: "Dock = where boats park OR to subtract money.",
    partOfSpeech: "adjective"
  },
{
    word: "entrapped",
    definition: "caught in a trap; tricked into committing a crime",
    russian: "пойманный в ловушку",
    example: "The animal was entrapped in the hunter's net.",
    tip: "En-trapped = put INTO a trap.",
    partOfSpeech: "adjective"
  },
{
    word: "course",
    definition: "the route or direction followed; a series of lectures or lessons",
    russian: "курс, направление; блюдо",
    example: "The plane changed course to avoid the storm.",
    tip: "Course = path you follow (or a class you take).",
    partOfSpeech: "adjective"
  },
{
    word: "meticulous",
    definition: "showing great attention to detail; very careful and precise",
    russian: "дотошный, скрупулезный",
    example: "She is meticulous in her research, checking every source.",
    tip: "Meticulous = pays attention to every tiny detail.",
    partOfSpeech: "adjective"
  },
{
    word: "mundane",
    definition: "lacking interest or excitement; ordinary",
    russian: "обыденный, скучный",
    example: "After the adventure, daily life seemed mundane.",
    tip: "Mundane = boring, everyday stuff.",
    partOfSpeech: "adjective"
  },
{
    word: "strike",
    definition: "to hit forcefully; to suddenly affect; to stop work as a protest",
    russian: "ударять; бастовать; поражать",
    example: "The idea suddenly struck me as brilliant.",
    tip: "Strike = hit OR suddenly come to mind.",
    partOfSpeech: "verb"
  },
{
    word: "amplified",
    definition: "made larger, greater, or stronger; increased in volume",
    russian: "усиленный, увеличенный",
    example: "The microphone amplified her voice so everyone could hear.",
    tip: "Amplify = make bigger or louder.",
    partOfSpeech: "adjective"
  },
{
    word: "default",
    definition: "failure to fulfill an obligation; a preset option",
    russian: "по умолчанию; неисполнение обязательств",
    example: "Blue is the default color for the text.",
    tip: "Default = what happens automatically if you don't choose.",
    partOfSpeech: "adjective"
  },
{
    word: "relates",
    definition: "to make or show a connection between things",
    russian: "относиться, связывать",
    example: "This chapter relates to the previous discussion.",
    tip: "Relate = find the connection or link.",
    partOfSpeech: "verb"
  },
{
    word: "novel",
    definition: "new and original; not like anything seen before",
    russian: "новый, оригинальный; роман",
    example: "The scientist proposed a novel approach to the problem.",
    tip: "Novel = brand new idea (also a long book).",
    partOfSpeech: "noun"
  },
{
    word: "conch",
    definition: "a large spiral seashell",
    russian: "раковина",
    example: "He found a beautiful conch shell on the beach.",
    tip: "Conch = the spiral shell you can hear the ocean in.",
    partOfSpeech: "adjective"
  },
{
    word: "conductive",
    definition: "having the property of transmitting heat, electricity, or sound",
    russian: "проводящий",
    example: "Copper is highly conductive and used in electrical wiring.",
    tip: "Conduct = carry through, so conductive = allows passage.",
    partOfSpeech: "adjective"
  },
{
    word: "disturbance",
    definition: "the interruption of a peaceful condition; mental or emotional disorder",
    russian: "нарушение, беспокойство",
    example: "There was a disturbance outside that woke everyone up.",
    tip: "Disturb = interrupt peace, disturbance = the interruption.",
    partOfSpeech: "noun"
  },
{
    word: "indicative",
    definition: "serving as a sign or indication of something",
    russian: "указывающий, свидетельствующий",
    example: "Her tone was indicative of her frustration.",
    tip: "Indicative = points to or shows evidence of.",
    partOfSpeech: "noun"
  },
{
    word: "nobility",
    definition: "the quality of being noble in character; the aristocratic class",
    russian: "благородство; дворянство",
    example: "He showed great nobility by forgiving his enemies.",
    tip: "Noble = high moral character or high social rank.",
    partOfSpeech: "noun"
  },
{
    word: "brawl",
    definition: "a rough or noisy fight or quarrel",
    russian: "драка, потасовка",
    example: "A brawl broke out at the bar last night.",
    tip: "Brawl = messy, loud fight.",
    partOfSpeech: "adjective"
  },
{
    word: "gullible",
    definition: "easily persuaded to believe something; credulous",
    russian: "доверчивый, наивный",
    example: "He's so gullible that he believed the fake news story.",
    tip: "Gullible = swallows (gulps) any story easily.",
    partOfSpeech: "noun"
  },
{
    word: "mischiefs",
    definition: "playful misbehavior or troublemaking; harm or trouble",
    russian: "шалости, проказы; вред",
    example: "The children got into all sorts of mischiefs during the party.",
    tip: "Mischief = playful trouble or naughty behavior.",
    partOfSpeech: "adjective"
  },
{
    word: "weep",
    definition: "to shed tears; to cry",
    russian: "плакать, рыдать",
    example: "She began to weep when she heard the sad news.",
    tip: "Weep = cry (sounds like 'seep' - tears seeping out).",
    partOfSpeech: "verb"
  },
{
    word: "beweep",
    definition: "to weep over; to lament",
    russian: "оплакивать",
    example: "They beweep the loss of their beloved leader.",
    tip: "Be-weep = weep FOR or ABOUT something.",
    partOfSpeech: "verb"
  },
{
    word: "withal",
    definition: "in addition; nevertheless (archaic)",
    russian: "к тому же, тем не менее",
    example: "He was stern, yet kind withal.",
    tip: "Withal = old-fashioned 'with all that' or 'also'.",
    partOfSpeech: "adjective"
  },
{
    word: "grief",
    definition: "deep sorrow, especially caused by someone's death",
    russian: "горе, печаль",
    example: "She was overcome with grief after losing her pet.",
    tip: "Grief = intense sadness (think: grieving).",
    partOfSpeech: "adjective"
  },
{
    word: "dire",
    definition: "extremely serious or urgent; causing fear or suffering",
    russian: "страшный, ужасный, крайний",
    example: "The country is in dire need of food and water.",
    tip: "Dire = really bad, desperate situation.",
    partOfSpeech: "adjective"
  },
{
    word: "tucked",
    definition: "pushed, folded, or placed something into a small space",
    russian: "заправленный, засунутый",
    example: "She tucked the blanket around the sleeping child.",
    tip: "Tuck = push in neatly (like tucking in a shirt).",
    partOfSpeech: "noun"
  },
{
    word: "verdant",
    definition: "green with grass or other rich vegetation",
    russian: "зеленый, покрытый растительностью",
    example: "The verdant hills were beautiful in spring.",
    tip: "Verdant = very green (think: verde = green in Spanish).",
    partOfSpeech: "adjective"
  },
{
    word: "imposing",
    definition: "grand and impressive in appearance; making a strong impression",
    russian: "внушительный, впечатляющий",
    example: "The imposing castle dominated the landscape.",
    tip: "Imposing = so big/grand it imposes on your attention.",
    partOfSpeech: "adjective"
  },
{
    word: "scarce",
    definition: "insufficient for the demand; rare",
    russian: "редкий, скудный",
    example: "Fresh water is becoming scarce in many regions.",
    tip: "Scarce = not enough, hard to find.",
    partOfSpeech: "adjective"
  },
{
    word: "fierce",
    definition: "having a violent or aggressive nature; intense",
    russian: "свирепый, жестокий; интенсивный",
    example: "The fierce storm damaged many homes.",
    tip: "Fierce = strong, aggressive, powerful.",
    partOfSpeech: "adjective"
  },
{
    word: "disparity",
    definition: "a great difference or inequality",
    russian: "неравенство, различие",
    example: "There is a huge disparity between rich and poor.",
    tip: "Disparity = gap or difference between things.",
    partOfSpeech: "noun"
  },
{
    word: "endemic",
    definition: "regularly found in a particular area or among a specific group",
    russian: "эндемичный, местный",
    example: "Malaria is endemic to tropical regions.",
    tip: "Endemic = native to a place, always there.",
    partOfSpeech: "adjective"
  },
{
    word: "office peon",
    definition: "a low-ranking worker who does menial tasks",
    russian: "младший служащий, мелкий клерк",
    example: "He started as an office peon and worked his way up.",
    tip: "Peon = bottom-level worker with little power.",
    partOfSpeech: "adjective"
  },
{
    word: "grueling shifts",
    definition: "extremely tiring and demanding work periods",
    russian: "изнурительные смены",
    example: "The nurses worked grueling shifts during the pandemic.",
    tip: "Grueling = exhausting, very hard work.",
    partOfSpeech: "adjective"
  },
{
    word: "wore",
    definition: "past tense of wear; to have on one's body; to diminish by use",
    russian: "носил; изнашивал",
    example: "She wore a beautiful dress to the party.",
    tip: "Wore = had clothing on (past tense).",
    partOfSpeech: "adjective"
  },
{
    word: "demand",
    definition: "an insistent request; to ask for forcefully",
    russian: "требование; требовать",
    example: "The workers demand better pay and conditions.",
    tip: "Demand = strong request, not asking nicely.",
    partOfSpeech: "adjective"
  },
{
    word: "grapple with",
    definition: "to struggle with or work hard to deal with a problem",
    russian: "бороться с проблемой",
    example: "Scientists continue to grapple with the mystery of dark matter.",
    tip: "Grapple = wrestle or struggle to handle something.",
    partOfSpeech: "verb"
  },
{
    word: "adhere to",
    definition: "to stick firmly to; to follow closely or exactly",
    russian: "придерживаться, следовать",
    example: "You must adhere to the safety regulations.",
    tip: "Adhere = stick to (rules, surfaces, beliefs).",
    partOfSpeech: "verb"
  },
{
    word: "enhance",
    definition: "to improve the quality, value, or extent of something",
    russian: "улучшать, усиливать",
    example: "The new software will enhance productivity.",
    tip: "Enhance = make better or stronger.",
    partOfSpeech: "verb"
  },
{
    word: "aggravate",
    definition: "to make a problem worse; to annoy or exasperate",
    russian: "усугублять, раздражать",
    example: "Scratching will only aggravate the rash.",
    tip: "Aggravate = make worse (or make someone angry).",
    partOfSpeech: "verb"
  },
{
    word: "fruitless",
    definition: "failing to achieve the desired results; unproductive",
    russian: "бесплодный, безрезультатный",
    example: "After hours of fruitless searching, they gave up.",
    tip: "Fruitless = no fruit (results) produced.",
    partOfSpeech: "adjective"
  },
{
    word: "inspirational",
    definition: "providing motivation or encouragement",
    russian: "вдохновляющий",
    example: "Her inspirational speech moved the audience to tears.",
    tip: "Inspirational = fills you with inspiration.",
    partOfSpeech: "adjective"
  },
{
    word: "premeditated",
    definition: "thought out or planned beforehand",
    russian: "преднамеренный, спланированный",
    example: "The crime was premeditated, not a spontaneous act.",
    tip: "Pre-meditated = thought about BEFORE doing.",
    partOfSpeech: "adjective"
  },
{
    word: "haphazard",
    definition: "lacking any obvious principle of organization; random",
    russian: "беспорядочный, случайный",
    example: "The books were arranged in a haphazard manner.",
    tip: "Haphazard = by chance, no plan or order.",
    partOfSpeech: "adjective"
  },
{
    word: "destiny",
    definition: "the events that will necessarily happen to a person; fate",
    russian: "судьба, предназначение",
    example: "She believed it was her destiny to become a doctor.",
    tip: "Destiny = your fate, what's meant to be.",
    partOfSpeech: "adjective"
  },
{
    word: "tenuous",
    definition: "very weak or slight; not substantial",
    russian: "слабый, тонкий, неубедительный",
    example: "The connection between the two events is tenuous at best.",
    tip: "Tenuous = thin, weak, barely there.",
    partOfSpeech: "adjective"
  },
{
    word: "nuanced",
    definition: "characterized by subtle shades of meaning or expression",
    russian: "тонкий, с нюансами",
    example: "Her argument was nuanced and well-considered.",
    tip: "Nuanced = has subtle differences, not black-and-white.",
    partOfSpeech: "adjective"
  },
{
    word: "aquador",
    definition: "one who draws or carries water (archaic/rare)",
    russian: "водонос",
    example: "In ancient times, the aquador would bring water from the well.",
    tip: "Aqua = water, so aquador = water carrier.",
    partOfSpeech: "noun"
  },
{
    word: "consequently",
    definition: "as a result; therefore",
    russian: "следовательно, в результате",
    example: "He missed the bus and consequently arrived late.",
    tip: "Consequently = shows cause and effect (consequence).",
    partOfSpeech: "adverb"
  },
{
    word: "render",
    definition: "to provide or give; to cause to become; to represent",
    russian: "делать, предоставлять; изображать",
    example: "The illness rendered him unable to work.",
    tip: "Render = make something become OR give/provide.",
    partOfSpeech: "verb"
  },
{
    word: "volatility",
    definition: "liability to change rapidly and unpredictably",
    russian: "изменчивость, нестабильность",
    example: "The stock market showed high volatility this week.",
    tip: "Volatile = changes quickly, unstable.",
    partOfSpeech: "noun"
  },
{
    word: "relatively",
    definition: "in comparison or proportion to something else",
    russian: "относительно, сравнительно",
    example: "The test was relatively easy compared to the last one.",
    tip: "Relatively = compared to other things.",
    partOfSpeech: "noun"
  },
{
    word: "ambient",
    definition: "relating to the immediate surroundings; background",
    russian: "окружающий, фоновый",
    example: "The ambient temperature in the room was comfortable.",
    tip: "Ambient = surrounding you, in the environment.",
    partOfSpeech: "adjective"
  },
{
    word: "portray",
    definition: "to depict or represent in a work of art or literature",
    russian: "изображать, представлять",
    example: "The movie portrays life in the 1920s.",
    tip: "Portray = paint a picture (with words or art).",
    partOfSpeech: "verb"
  },
{
    word: "marginal",
    definition: "of minor importance; at the edge or periphery",
    russian: "незначительный, маргинальный",
    example: "The difference in cost was marginal, only a few cents.",
    tip: "Marginal = at the margin (edge), small, barely noticeable.",
    partOfSpeech: "adjective"
  },
{
    word: "coincidental",
    definition: "resulting from a coincidence; happening by chance",
    russian: "случайный, совпадающий",
    example: "Our meeting was purely coincidental; I didn't expect to see you.",
    tip: "Coincidental = two things happening together by chance.",
    partOfSpeech: "adjective"
  },
{
    word: "remedy",
    definition: "a medicine or treatment; a means of correcting a problem",
    russian: "средство, лекарство; исправлять",
    example: "There is no quick remedy for this complex issue.",
    tip: "Remedy = fix or cure for a problem.",
    partOfSpeech: "adjective"
  },
{
    word: "devoted",
    definition: "very loving or loyal; dedicated to a task or purpose",
    russian: "преданный, посвященный",
    example: "She is devoted to her family and would do anything for them.",
    tip: "Devoted = gives all attention and loyalty to.",
    partOfSpeech: "adjective"
  },
{
    word: "posited",
    definition: "assumed as a fact; put forward as a basis for argument",
    russian: "постулировать, выдвигать",
    example: "The scientist posited that life might exist on other planets.",
    tip: "Posit = put forward an idea or theory.",
    partOfSpeech: "noun"
  },
{
    word: "assessed",
    definition: "evaluated or estimated the nature, ability, or quality of",
    russian: "оценил, проанализировал",
    example: "The doctor assessed the patient's condition carefully.",
    tip: "Assessed = judged the value or state of something.",
    partOfSpeech: "adjective"
  },
{
    word: "fluctuate",
    definition: "to rise and fall irregularly in number or amount",
    russian: "колебаться, изменяться",
    example: "Prices fluctuate depending on supply and demand.",
    tip: "Fluctuate = go up and down like waves.",
    partOfSpeech: "verb"
  },
{
    word: "deceptive",
    definition: "giving an appearance or impression different from the true one; misleading",
    russian: "обманчивый, вводящий в заблуждение",
    example: "The calm weather was deceptive; a storm was approaching.",
    tip: "Deceptive = tricks you, not what it seems.",
    partOfSpeech: "adjective"
  },
{
    word: "innocuous",
    definition: "not harmful or offensive; harmless",
    russian: "безобидный, безвредный",
    example: "It seemed like an innocuous comment, but it offended her.",
    tip: "In-nocuous = NOT harmful (innocent).",
    partOfSpeech: "adjective"
  },
{
    word: "impractical",
    definition: "not adapted for use or action; not sensible or realistic",
    russian: "непрактичный, нереалистичный",
    example: "Wearing high heels for hiking is impractical.",
    tip: "Im-practical = NOT practical, won't work in real life.",
    partOfSpeech: "noun"
  },
{
    word: "paucity of",
    definition: "the presence of something only in small or insufficient quantities; scarcity",
    russian: "нехватка, недостаток",
    example: "There is a paucity of evidence to support this claim.",
    tip: "Paucity = very little, not enough of something.",
    partOfSpeech: "noun"
  },
{
    word: "quarrel about",
    definition: "to have an angry argument or disagreement about something",
    russian: "ссориться из-за чего-либо",
    example: "They often quarrel about money.",
    tip: "Quarrel = argue angrily over something.",
    partOfSpeech: "verb"
  },
{
    word: "profusion of",
    definition: "an abundance or large quantity of something",
    russian: "изобилие, обилие",
    example: "The garden had a profusion of colorful flowers.",
    tip: "Profusion = lots and lots, overflowing amount.",
    partOfSpeech: "noun"
  },
{
    word: "verisimilitude in",
    definition: "the appearance of being true or real in something",
    russian: "правдоподобие",
    example: "The novel lacks verisimilitude in its depiction of court life.",
    tip: "Veri-similitude = looks like (simil) truth (veri).",
    partOfSpeech: "noun"
  },
{
    word: "disengage",
    definition: "to separate or release from something; to withdraw",
    russian: "отсоединять, отключаться",
    example: "She tried to disengage from the argument.",
    tip: "Dis-engage = UN-hook, separate from.",
    partOfSpeech: "verb"
  },
{
    word: "annotate",
    definition: "to add notes or comments to a text or diagram",
    russian: "комментировать, снабжать примечаниями",
    example: "Students should annotate the text as they read.",
    tip: "Annotate = add notes to explain or comment.",
    partOfSpeech: "verb"
  },
{
    word: "buttress",
    definition: "a structure built against a wall for support; to support or strengthen",
    russian: "опора, контрфорс; поддерживать",
    example: "The evidence buttresses her argument.",
    tip: "Buttress = support structure OR to reinforce.",
    partOfSpeech: "adjective"
  },
{
    word: "butt",
    definition: "to strike with the head or horns; the thicker end of something",
    russian: "бодать; толстый конец; окурок",
    example: "The goat will butt anyone who gets too close.",
    tip: "Butt = hit with head OR the end/bottom part.",
    partOfSpeech: "verb"
  },
{
    word: "reciprocate",
    definition: "to respond to an action by making a corresponding one; to give and receive mutually",
    russian: "отвечать взаимностью",
    example: "She smiled at him, and he reciprocated the gesture.",
    tip: "Reciprocate = give back the same thing (mutual exchange).",
    partOfSpeech: "verb"
  },
{
    word: "legitimacy",
    definition: "conformity to the law or to rules; the quality of being valid or authentic",
    russian: "законность, легитимность",
    example: "The legitimacy of the election was questioned.",
    tip: "Legitimate = legal/real, so legitimacy = being valid.",
    partOfSpeech: "noun"
  },
{
    word: "foster",
    definition: "to encourage or promote the development of something; to raise a child not one's own",
    russian: "способствовать, поощрять; приемный",
    example: "The program aims to foster creativity in children.",
    tip: "Foster = help grow and develop.",
    partOfSpeech: "verb"
  },
{
    word: "discourage",
    definition: "to cause someone to lose confidence or enthusiasm; to prevent or try to prevent",
    russian: "обескураживать, отговаривать",
    example: "Don't let failure discourage you from trying again.",
    tip: "Dis-courage = take away courage or motivation.",
    partOfSpeech: "verb"
  },
{
    word: "governess",
    definition: "a woman employed to teach children in a private household",
    russian: "гувернантка",
    example: "The governess taught the children French and piano.",
    tip: "Governess = private teacher for rich families' children.",
    partOfSpeech: "noun"
  },
{
    word: "quit",
    definition: "to leave or resign from; to stop or discontinue",
    russian: "бросать, уходить с работы",
    example: "He decided to quit his job and travel the world.",
    tip: "Quit = stop doing OR leave a position.",
    partOfSpeech: "verb"
  },
{
    word: "involuntarily",
    definition: "done without conscious control; not by choice",
    russian: "непроизвольно, невольно",
    example: "She flinched involuntarily when the door slammed.",
    tip: "In-voluntary = NOT by your will, automatic.",
    partOfSpeech: "adverb"
  },
{
    word: "germinate",
    definition: "to begin to grow or develop; (of a seed) to sprout",
    russian: "прорастать, зарождаться",
    example: "The seeds will germinate in a few days if kept moist.",
    tip: "Germinate = start to sprout and grow (like germs growing).",
    partOfSpeech: "verb"
  },
{
    word: "bear fruit",
    definition: "to yield positive results or benefits",
    russian: "приносить плоды, давать результаты",
    example: "His hard work finally began to bear fruit.",
    tip: "Bear fruit = produce good outcomes (like a tree).",
    partOfSpeech: "verb"
  },
{
    word: "pondering",
    definition: "thinking about something carefully and for a long time",
    russian: "размышление, обдумывание",
    example: "She sat pondering her next move.",
    tip: "Ponder = think deeply, contemplate.",
    partOfSpeech: "noun"
  },
{
    word: "secure",
    definition: "fixed or fastened so as not to give way; protected from danger; to obtain",
    russian: "безопасный, надежный; обеспечивать",
    example: "Make sure the door is secure before leaving.",
    tip: "Secure = safe and protected OR to get/obtain.",
    partOfSpeech: "adjective"
  },
{
    word: "framing",
    definition: "the way something is presented or expressed; a basic structure",
    russian: "формулирование, обрамление; каркас",
    example: "The framing of the question influenced how people answered.",
    tip: "Framing = how you present or structure something.",
    partOfSpeech: "noun"
  },
{
    word: "ponder",
    definition: "to think about something carefully, especially before making a decision",
    russian: "обдумывать, размышлять",
    example: "He pondered the meaning of life.",
    tip: "Ponder = think deeply and carefully.",
    partOfSpeech: "verb"
  },
{
    word: "conspicuously",
    definition: "in a clearly visible or obvious way",
    russian: "заметно, явно",
    example: "She was conspicuously absent from the meeting.",
    tip: "Conspicuous = stands out, easy to notice.",
    partOfSpeech: "adverb"
  },
{
    word: "inconspicuously",
    definition: "in a way that is not clearly visible or attracting attention",
    russian: "незаметно, неприметно",
    example: "He tried to leave the room inconspicuously.",
    tip: "In-conspicuous = NOT noticeable, blends in.",
    partOfSpeech: "noun"
  },
{
    word: "abate",
    definition: "to become less strong or intense",
    russian: "уменьшаться, ослабевать",
    example: "After the storm abated, the sky cleared beautifully.",
    tip: "Remember: to become less strong or intense",
    partOfSpeech: "verb"
  },
{
    word: "benevolent",
    definition: "kind and generous in nature",
    russian: "доброжелательный",
    example: "Her benevolent actions inspired others to volunteer.",
    tip: "Remember: kind and generous in nature",
    partOfSpeech: "adjective"
  },
{
    word: "aberration",
    definition: "a departure from what is normal or expected",
    russian: "отклонение, аберрация",
    example: "The sudden failure of the experiment was an aberration.",
    tip: "Remember: a departure from what is normal or expected",
    partOfSpeech: "noun"
  },
{
    word: "abhor",
    definition: "to regard with disgust and hatred",
    russian: "питать отвращение, ненавидеть",
    example: "She abhors any form of cruelty to animals.",
    tip: "Remember: to regard with disgust and hatred",
    partOfSpeech: "verb"
  },
{
    word: "abject",
    definition: "experienced to the maximum degree, completely without pride",
    russian: "жалкий, униженный",
    example: "They lived in abject poverty after losing their jobs.",
    tip: "Remember: experienced to the maximum degree, completely without pride",
    partOfSpeech: "adjective"
  },
{
    word: "abnegation",
    definition: "the act of renouncing or rejecting something",
    russian: "самоотречение, отказ",
    example: "Her abnegation of a high-paying job for public service was admirable.",
    tip: "Remember: the act of renouncing or rejecting something",
    partOfSpeech: "noun"
  },
{
    word: "abridge",
    definition: "to shorten a text without losing the sense",
    russian: "сокращать, урезать",
    example: "The editor decided to abridge the novel for the new edition.",
    tip: "Remember: to shorten a text without losing the sense",
    partOfSpeech: "verb"
  },
{
    word: "abrogate",
    definition: "to repeal or do away with a law or agreement",
    russian: "отменять, аннулировать",
    example: "The treaty was abrogated by the new government.",
    tip: "Remember: to repeal or do away with a law or agreement",
    partOfSpeech: "verb"
  },
{
    word: "abscond",
    definition: "to leave hurriedly and secretly, often to avoid detection",
    russian: "скрыться, сбежать",
    example: "The cashier absconded with the company's funds.",
    tip: "Remember: to leave hurriedly and secretly, often to avoid detection",
    partOfSpeech: "verb"
  },
{
    word: "absolve",
    definition: "to declare someone free from guilt or responsibility",
    russian: "освобождать (от ответственности), прощать",
    example: "The investigation absolved him of any wrongdoing.",
    tip: "Remember: to declare someone free from guilt or responsibility",
    partOfSpeech: "verb"
  },
{
    word: "abstain",
    definition: "to restrain oneself from doing or enjoying something",
    russian: "воздерживаться",
    example: "He chose to abstain from voting in the election.",
    tip: "Remember: to restrain oneself from doing or enjoying something",
    partOfSpeech: "verb"
  },
{
    word: "abstemious",
    definition: "not self-indulgent, especially when eating and drinking",
    russian: "умеренный, воздержанный (в еде и питье)",
    example: "He lived an abstemious life, avoiding all luxuries.",
    tip: "Remember: not self-indulgent, especially when eating and drinking",
    partOfSpeech: "adjective"
  },
{
    word: "abstruse",
    definition: "difficult to understand; obscure",
    russian: "трудный для понимания, заумный",
    example: "The professor's lecture on quantum physics was abstruse.",
    tip: "Remember: difficult to understand",
    partOfSpeech: "adjective"
  },
{
    word: "accede",
    definition: "to agree to a demand, request, or treaty",
    russian: "соглашаться, присоединяться",
    example: "The committee will likely accede to the proposal.",
    tip: "Remember: to agree to a demand, request, or treaty",
    partOfSpeech: "verb"
  },
{
    word: "accentuate",
    definition: "to make more noticeable or prominent",
    russian: "подчеркивать, акцентировать",
    example: "Her new haircut accentuated her high cheekbones.",
    tip: "Remember: to make more noticeable or prominent",
    partOfSpeech: "verb"
  },
{
    word: "accolade",
    definition: "an award or privilege granted as a special honor",
    russian: "похвала, награда",
    example: "She received numerous accolades for her scientific breakthrough.",
    tip: "Remember: an award or privilege granted as a special honor",
    partOfSpeech: "adjective"
  },
{
    word: "accord",
    definition: "agreement or harmony; to give power or status",
    russian: "согласие, соглашение; предоставлять",
    example: "The two nations finally reached a peace accord.",
    tip: "Remember: agreement or harmony",
    partOfSpeech: "adjective"
  },
{
    word: "acerbic",
    definition: "sharp and forthright in tone; tasting sour",
    russian: "едкий, язвительный; кислый",
    example: "His acerbic wit often made others uncomfortable.",
    tip: "Remember: sharp and forthright in tone",
    partOfSpeech: "adjective"
  },
{
    word: "acquiesce",
    definition: "to accept something reluctantly but without protest",
    russian: "уступать, молча соглашаться",
    example: "She acquiesced to her parents' demands.",
    tip: "Remember: to accept something reluctantly but without protest",
    partOfSpeech: "verb"
  },
{
    word: "acrimony",
    definition: "bitterness or ill feeling",
    russian: "желчность, язвительность",
    example: "The acrimony of the divorce proceedings was stressful for everyone.",
    tip: "Remember: bitterness or ill feeling",
    partOfSpeech: "adjective"
  },
{
    word: "acumen",
    definition: "the ability to make good judgments and quick decisions",
    russian: "проницательность, сообразительность",
    example: "His business acumen led to the company's rapid success.",
    tip: "Remember: the ability to make good judgments and quick decisions",
    partOfSpeech: "verb"
  },
{
    word: "acute",
    definition: "having or showing a perceptive understanding; severe",
    russian: "острый, проницательный; резкий",
    example: "She had an acute awareness of her surroundings.",
    tip: "Remember: having or showing a perceptive understanding",
    partOfSpeech: "adjective"
  },
{
    word: "adamant",
    definition: "refusing to be persuaded or to change one's mind",
    russian: "непреклонный, категоричный",
    example: "He was adamant that he had not made a mistake.",
    tip: "Remember: refusing to be persuaded or to change one's mind",
    partOfSpeech: "adjective"
  },
{
    word: "adept",
    definition: "very skilled or proficient at something",
    russian: "знаток, эксперт; умелый",
    example: "She is adept at navigating complex social situations.",
    tip: "Remember: very skilled or proficient at something",
    partOfSpeech: "noun"
  },
{
    word: "adherent",
    definition: "someone who supports a particular party, person, or set of ideas",
    russian: "приверженец, сторонник",
    example: "He was a strong adherent of free-market policies.",
    tip: "Remember: someone who supports a particular party, person, or set of ideas",
    partOfSpeech: "noun"
  },
{
    word: "admonish",
    definition: "to warn or reprimand someone firmly",
    russian: "предостерегать, увещевать, журить",
    example: "The teacher admonished the student for being late.",
    tip: "Remember: to warn or reprimand someone firmly",
    partOfSpeech: "verb"
  },
{
    word: "adroit",
    definition: "clever or skillful in using the hands or mind",
    russian: "ловкий, умелый, находчивый",
    example: "He was adroit at handling difficult negotiations.",
    tip: "Remember: clever or skillful in using the hands or mind",
    partOfSpeech: "adjective"
  },
{
    word: "adulation",
    definition: "excessive admiration or praise",
    russian: "лесть, подхалимство, низкопоклонство",
    example: "The actor received waves of adulation from his fans.",
    tip: "Remember: excessive admiration or praise",
    partOfSpeech: "noun"
  },
{
    word: "adulterate",
    definition: "to make something poorer in quality by adding another substance",
    russian: "фальсифицировать, подмешивать",
    example: "It is illegal to adulterate food products.",
    tip: "Remember: to make something poorer in quality by adding another substance",
    partOfSpeech: "verb"
  },
{
    word: "adversary",
    definition: "one's opponent in a contest, conflict, or dispute",
    russian: "противник, оппонент, враг",
    example: "He faced his adversary in the final match.",
    tip: "Remember: one's opponent in a contest, conflict, or dispute",
    partOfSpeech: "adjective"
  },
{
    word: "adversity",
    definition: "difficulties; misfortune",
    russian: "несчастья, невзгоды, бедствия",
    example: "She showed great courage in the face of adversity.",
    tip: "Remember: difficulties",
    partOfSpeech: "noun"
  },
{
    word: "advocate",
    definition: "a person who publicly supports or recommends a particular cause",
    russian: "сторонник, защитник; отстаивать",
    example: "She is a passionate advocate for environmental protection.",
    tip: "Remember: a person who publicly supports or recommends a particular cause",
    partOfSpeech: "noun"
  },
{
    word: "aesthetic",
    definition: "concerned with beauty or the appreciation of beauty",
    russian: "эстетический, относящийся к красоте",
    example: "The new building has a very pleasing aesthetic.",
    tip: "Remember: concerned with beauty or the appreciation of beauty",
    partOfSpeech: "adjective"
  },
{
    word: "affable",
    definition: "friendly, good-natured, or easy to talk to",
    russian: "приветливый, любезный",
    example: "The president was an affable man who charmed everyone.",
    tip: "Remember: friendly, good-natured, or easy to talk to",
    partOfSpeech: "adjective"
  },
{
    word: "affinity",
    definition: "a spontaneous or natural liking for someone or something",
    russian: "близость, родство, влечение",
    example: "He had a natural affinity for mathematics.",
    tip: "Remember: a spontaneous or natural liking for someone or something",
    partOfSpeech: "noun"
  },
{
    word: "affirm",
    definition: "to state as a fact; assert strongly and publicly",
    russian: "утверждать, подтверждать",
    example: "The court affirmed the lower court's decision.",
    tip: "Remember: to state as a fact",
    partOfSpeech: "verb"
  },
{
    word: "affluent",
    definition: "having a great deal of money; wealthy",
    russian: "богатый, состоятельный, обильный",
    example: "The family lived in an affluent neighborhood.",
    tip: "Remember: having a great deal of money",
    partOfSpeech: "adjective"
  },
{
    word: "aggregate",
    definition: "a whole formed by combining several separate elements",
    russian: "совокупность, итог; совокупный",
    example: "The aggregate score of the team was impressive.",
    tip: "Remember: a whole formed by combining several separate elements",
    partOfSpeech: "verb"
  },
{
    word: "aggrieved",
    definition: "feeling resentment at having been unfairly treated",
    russian: "обиженный, пострадавший, огорченный",
    example: "The aggrieved party filed a formal complaint.",
    tip: "Remember: feeling resentment at having been unfairly treated",
    partOfSpeech: "adjective"
  },
{
    word: "agile",
    definition: "able to move quickly and easily",
    russian: "проворный, быстрый, сообразительный",
    example: "The agile dancer moved gracefully across the stage.",
    tip: "Remember: able to move quickly and easily",
    partOfSpeech: "adjective"
  },
{
    word: "alacrity",
    definition: "brisk and cheerful readiness",
    russian: "готовность, рвение, живость",
    example: "She accepted the challenge with alacrity.",
    tip: "Remember: brisk and cheerful readiness",
    partOfSpeech: "noun"
  },
{
    word: "albeit",
    definition: "although",
    russian: "хотя, тем не менее",
    example: "The experiment was successful, albeit very costly.",
    tip: "Remember: although",
    partOfSpeech: "adjective"
  },
{
    word: "allay",
    definition: "to diminish or put at rest (fear, suspicion, or worry)",
    russian: "успокаивать, ослаблять, утолять",
    example: "The government tried to allay public fears about the economy.",
    tip: "Remember: to diminish or put at rest (fear, suspicion, or worry)",
    partOfSpeech: "verb"
  },
{
    word: "alleviate",
    definition: "to make (suffering or a problem) less severe",
    russian: "облегчать, смягчать",
    example: "New medications can alleviate the symptoms of the disease.",
    tip: "Remember: to make (suffering or a problem) less severe",
    partOfSpeech: "verb"
  },
{
    word: "allocate",
    definition: "to distribute (resources or duties) for a particular purpose",
    russian: "распределять, выделять, ассигновать",
    example: "The researchers were allocated funds for their project.",
    tip: "Remember: to distribute (resources or duties) for a particular purpose",
    partOfSpeech: "verb"
  },
{
    word: "aloof",
    definition: "not friendly or forthcoming; cool and distant",
    russian: "отчужденный, сторонящийся, равнодушный",
    example: "He remained aloof from the office politics.",
    tip: "Remember: not friendly or forthcoming",
    partOfSpeech: "adjective"
  },
{
    word: "altercation",
    definition: "a noisy argument or disagreement, especially in public",
    russian: "ссора, перебранка, стычка",
    example: "The driver had an altercation with a police officer.",
    tip: "Remember: a noisy argument or disagreement, especially in public",
    partOfSpeech: "noun"
  },
{
    word: "altruistic",
    definition: "showing a disinterested and selfless concern for others",
    russian: "альтруистический, бескорыстный",
    example: "Her altruistic donation helped build the new hospital wing.",
    tip: "Remember: showing a disinterested and selfless concern for others",
    partOfSpeech: "adjective"
  },
{
    word: "amalgamate",
    definition: "to combine or unite to form one organization or structure",
    russian: "объединять(ся), сливаться",
    example: "The two small companies decided to amalgamate.",
    tip: "Remember: to combine or unite to form one organization or structure",
    partOfSpeech: "verb"
  },
{
    word: "ambiguous",
    definition: "open to more than one interpretation; unclear",
    russian: "двусмысленный, неоднозначный",
    example: "The instructions were ambiguous, leading to confusion.",
    tip: "Remember: open to more than one interpretation",
    partOfSpeech: "adjective"
  },
{
    word: "ambivalent",
    definition: "having mixed feelings or contradictory ideas about something",
    russian: "двойственный, противоречивый",
    example: "She was ambivalent about moving to a new city.",
    tip: "Remember: having mixed feelings or contradictory ideas about something",
    partOfSpeech: "adjective"
  },
{
    word: "ameliorate",
    definition: "to make (something bad or unsatisfactory) better",
    russian: "улучшать, исправлять",
    example: "Reforms were needed to ameliorate the living conditions.",
    tip: "Remember: to make (something bad or unsatisfactory) better",
    partOfSpeech: "verb"
  },
{
    word: "amenable",
    definition: "open and responsive to suggestion; easily persuaded",
    russian: "поддающийся, послушный, сговорчивый",
    example: "He was amenable to changing his schedule.",
    tip: "Remember: open and responsive to suggestion",
    partOfSpeech: "adjective"
  },
{
    word: "amend",
    definition: "to make minor changes to a text to make it fairer or more accurate",
    russian: "вносить поправки, исправлять",
    example: "The committee voted to amend the bill.",
    tip: "Remember: to make minor changes to a text to make it fairer or more accurate",
    partOfSpeech: "verb"
  },
{
    word: "amenity",
    definition: "a desirable or useful feature or facility of a building or place",
    russian: "удобство, приятность, коммунальные услуги",
    example: "The hotel's amenities include a pool and a fitness center.",
    tip: "Remember: a desirable or useful feature or facility of a building or place",
    partOfSpeech: "noun"
  },
{
    word: "amiable",
    definition: "having or displaying a friendly and pleasant manner",
    russian: "дружелюбный, любезный, милый",
    example: "The new neighbors are quite amiable.",
    tip: "Remember: having or displaying a friendly and pleasant manner",
    partOfSpeech: "adjective"
  },
{
    word: "amicable",
    definition: "characterized by friendliness and absence of discord",
    russian: "дружественный, мирный, полюбовный",
    example: "Despite their disagreement, they reached an amicable settlement.",
    tip: "Remember: characterized by friendliness and absence of discord",
    partOfSpeech: "adjective"
  },
{
    word: "amorphous",
    definition: "without a clearly defined shape or form",
    russian: "аморфный, бесформенный",
    example: "The artist created an amorphous sculpture out of clay.",
    tip: "Remember: without a clearly defined shape or form",
    partOfSpeech: "adjective"
  },
{
    word: "anachronistic",
    definition: "belonging to a period other than that being portrayed",
    russian: "анахроничный, устаревший",
    example: "His old-fashioned views seemed anachronistic in modern society.",
    tip: "Remember: belonging to a period other than that being portrayed",
    partOfSpeech: "adjective"
  },
{
    word: "analogous",
    definition: "comparable in certain respects",
    russian: "аналогичный, сходный",
    example: "A computer's processor is analogous to a human brain.",
    tip: "Remember: comparable in certain respects",
    partOfSpeech: "adjective"
  },
{
    word: "anarchy",
    definition: "a state of disorder due to absence of authority",
    russian: "анархия, безвластие",
    example: "The sudden collapse of the government led to anarchy.",
    tip: "Remember: a state of disorder due to absence of authority",
    partOfSpeech: "noun"
  },
{
    word: "anecdote",
    definition: "a short and amusing or interesting story about a real incident",
    russian: "анекдот, короткий рассказ",
    example: "He shared a humorous anecdote about his childhood.",
    tip: "Remember: a short and amusing or interesting story about a real incident",
    partOfSpeech: "adjective"
  },
{
    word: "animosity",
    definition: "strong hostility",
    russian: "враждебность, неприязнь",
    example: "There was deep animosity between the two rival teams.",
    tip: "Remember: strong hostility",
    partOfSpeech: "noun"
  },
{
    word: "anomaly",
    definition: "something that deviates from what is standard or expected",
    russian: "аномалия, отклонение",
    example: "The scientist observed an anomaly in the data.",
    tip: "Remember: something that deviates from what is standard or expected",
    partOfSpeech: "noun"
  },
{
    word: "antagonism",
    definition: "active hostility or opposition",
    russian: "антагонизм, вражда",
    example: "The antagonism between the two candidates was obvious.",
    tip: "Remember: active hostility or opposition",
    partOfSpeech: "noun"
  },
{
    word: "antecedent",
    definition: "a thing or event that existed before or logically precedes another",
    russian: "предшествующий, антецедент",
    example: "The antecedent to the war was a series of political disputes.",
    tip: "Remember: a thing or event that existed before or logically precedes another",
    partOfSpeech: "noun"
  },
{
    word: "antediluvian",
    definition: "ridiculously old-fashioned; from before the biblical Flood",
    russian: "допотопный, устарелый",
    example: "He held some rather antediluvian views on technology.",
    tip: "Remember: ridiculously old-fashioned",
    partOfSpeech: "adjective"
  },
{
    word: "anticipate",
    definition: "to regard as probable; expect or predict",
    russian: "ожидать, предвидеть, предвкушать",
    example: "We anticipate a large crowd at the concert.",
    tip: "Remember: to regard as probable",
    partOfSpeech: "verb"
  },
{
    word: "antipathy",
    definition: "a deep-seated feeling of dislike; aversion",
    russian: "антипатия, отвращение",
    example: "He felt a strong antipathy towards his arrogant boss.",
    tip: "Remember: a deep-seated feeling of dislike",
    partOfSpeech: "adjective"
  },
{
    word: "antiquated",
    definition: "old-fashioned or outdated",
    russian: "устарелый, старинный",
    example: "The office was full of antiquated equipment.",
    tip: "Remember: old-fashioned or outdated",
    partOfSpeech: "adjective"
  },
{
    word: "antithesis",
    definition: "a person or thing that is the direct opposite of another",
    russian: "антитеза, противоположность",
    example: "Her quiet, reserved nature is the antithesis of her sister's.",
    tip: "Remember: a person or thing that is the direct opposite of another",
    partOfSpeech: "noun"
  },
{
    word: "apathy",
    definition: "lack of interest, enthusiasm, or concern",
    russian: "апатия, безразличие",
    example: "Voter apathy was high, leading to a low turnout.",
    tip: "Remember: lack of interest, enthusiasm, or concern",
    partOfSpeech: "adjective"
  },
{
    word: "apocryphal",
    definition: "of doubtful authenticity, although widely circulated as being true",
    russian: "апокрифический, недостоверный",
    example: "He told an apocryphal story about the building's history.",
    tip: "Remember: of doubtful authenticity, although widely circulated as being true",
    partOfSpeech: "adjective"
  },
{
    word: "appease",
    definition: "to pacify or placate (someone) by acceding to their demands",
    russian: "умиротворять, успокаивать, уступать",
    example: "They tried to appease the angry customer with a refund.",
    tip: "Remember: to pacify or placate (someone) by acceding to their demands",
    partOfSpeech: "verb"
  },
{
    word: "apprehensive",
    definition: "anxious or fearful that something bad or unpleasant will happen",
    russian: "опасающийся, боязливый, тревожный",
    example: "She was apprehensive about her upcoming job interview.",
    tip: "Remember: anxious or fearful that something bad or unpleasant will happen",
    partOfSpeech: "noun"
  },
{
    word: "approbation",
    definition: "approval or praise",
    russian: "одобрение, похвала",
    example: "The new policy received widespread approbation.",
    tip: "Remember: approval or praise",
    partOfSpeech: "noun"
  },
{
    word: "appropriate",
    definition: "to take (something) for one's own use, typically without permission",
    russian: "присваивать, ассигновать",
    example: "The government appropriated the land for a new highway.",
    tip: "Remember: to take (something) for one's own use, typically without permission",
    partOfSpeech: "verb"
  },
{
    word: "apt",
    definition: "appropriate or suitable in the circumstances; having a tendency",
    russian: "уместный, подходящий; склонный",
    example: "His comment was surprisingly apt for the situation.",
    tip: "Remember: appropriate or suitable in the circumstances",
    partOfSpeech: "adjective"
  },
{
    word: "aptitude",
    definition: "a natural ability to do something",
    russian: "способность, склонность, дарование",
    example: "He showed a great aptitude for learning languages.",
    tip: "Remember: a natural ability to do something",
    partOfSpeech: "noun"
  },
{
    word: "arbitrary",
    definition: "based on random choice or personal whim, rather than any reason",
    russian: "произвольный, случайный, деспотичный",
    example: "The decision to fire him seemed completely arbitrary.",
    tip: "Remember: based on random choice or personal whim, rather than any reason",
    partOfSpeech: "noun"
  },
{
    word: "arbitrate",
    definition: "to reach an authoritative judgment or settlement",
    russian: "выступать арбитром, судить, разрешать спор",
    example: "An independent body was brought in to arbitrate the dispute.",
    tip: "Remember: to reach an authoritative judgment or settlement",
    partOfSpeech: "verb"
  },
{
    word: "arcane",
    definition: "understood by few; mysterious or secret",
    russian: "тайный, загадочный, сокровенный",
    example: "He was an expert in the arcane rules of the ancient game.",
    tip: "Remember: understood by few",
    partOfSpeech: "adjective"
  },
{
    word: "archaic",
    definition: "very old or old-fashioned",
    russian: "архаичный, устаревший",
    example: "The text was filled with archaic language.",
    tip: "Remember: very old or old-fashioned",
    partOfSpeech: "adjective"
  },
{
    word: "archetype",
    definition: "a very typical example of a certain person or thing",
    russian: "архетип, прообраз, прототип",
    example: "He is the archetype of the absent-minded professor.",
    tip: "Remember: a very typical example of a certain person or thing",
    partOfSpeech: "noun"
  },
{
    word: "ardent",
    definition: "enthusiastic or passionate",
    russian: "пылкий, горячий, ревностный",
    example: "She is an ardent supporter of the local arts scene.",
    tip: "Remember: enthusiastic or passionate",
    partOfSpeech: "adjective"
  },
{
    word: "arduous",
    definition: "involving or requiring strenuous effort; difficult and tiring",
    russian: "трудный, тяжелый, напряженный",
    example: "The climbers faced an arduous journey to the summit.",
    tip: "Remember: involving or requiring strenuous effort",
    partOfSpeech: "adjective"
  },
{
    word: "arid",
    definition: "having little or no rain; too dry to support vegetation",
    russian: "засушливый, сухой, бесплодный",
    example: "The arid desert landscape stretched for miles.",
    tip: "Remember: having little or no rain",
    partOfSpeech: "adjective"
  },
{
    word: "arrogance",
    definition: "an insulting way of thinking or behaving; overbearing pride",
    russian: "высокомерие, надменность, заносчивость",
    example: "His arrogance and refusal to compromise lost him many friends.",
    tip: "Remember: an insulting way of thinking or behaving",
    partOfSpeech: "adjective"
  },
{
    word: "articulate",
    definition: "having or showing the ability to speak fluently and coherently",
    russian: "членораздельный, ясный; формулировать",
    example: "She gave a very articulate and persuasive speech.",
    tip: "Remember: having or showing the ability to speak fluently and coherently",
    partOfSpeech: "adjective"
  },
{
    word: "artifact",
    definition: "an object made by a human being, typically of cultural interest",
    russian: "артефакт, изделие",
    example: "The museum displayed ancient artifacts from the excavation.",
    tip: "Remember: an object made by a human being, typically of cultural interest",
    partOfSpeech: "adjective"
  },
{
    word: "artisan",
    definition: "a worker in a skilled trade, especially one involving making things by hand",
    russian: "ремесленник, мастеровой",
    example: "The local market featured goods from many skilled artisans.",
    tip: "Remember: a worker in a skilled trade, especially one involving making things by hand",
    partOfSpeech: "adjective"
  },
{
    word: "ascertain",
    definition: "to find (something) out for certain; make sure of",
    russian: "выяснять, устанавливать, удостоверяться",
    example: "The police tried to ascertain the cause of the accident.",
    tip: "Remember: to find (something) out for certain",
    partOfSpeech: "verb"
  },
{
    word: "ascetic",
    definition: "characterized by severe self-discipline and abstention",
    russian: "аскетический, отшельнический",
    example: "The monk lived a simple, ascetic life.",
    tip: "Remember: characterized by severe self-discipline and abstention",
    partOfSpeech: "adjective"
  },
{
    word: "ascribe",
    definition: "to attribute something to (a cause, author, or source)",
    russian: "приписывать (чему-л.)",
    example: "He ascribed his success to hard work and dedication.",
    tip: "Remember: to attribute something to (a cause, author, or source)",
    partOfSpeech: "verb"
  },
{
    word: "aspire",
    definition: "to direct one's hopes or ambitions toward achieving something",
    russian: "стремиться (к чему-л.)",
    example: "She aspires to be a professional musician.",
    tip: "Remember: to direct one's hopes or ambitions toward achieving something",
    partOfSpeech: "verb"
  },
{
    word: "assail",
    definition: "to make a concerted or violent attack on",
    russian: "нападать, атаковать, забрасывать (вопросами)",
    example: "The politician was assailed with questions from the press.",
    tip: "Remember: to make a concerted or violent attack on",
    partOfSpeech: "verb"
  },
{
    word: "assiduous",
    definition: "showing great care and perseverance",
    russian: "усердный, прилежный, неутомимый",
    example: "She was assiduous in her studies, spending hours in the library.",
    tip: "Remember: showing great care and perseverance",
    partOfSpeech: "adjective"
  },
{
    word: "assuage",
    definition: "to make (an unpleasant feeling) less intense",
    russian: "успокаивать, смягчать, утолять",
    example: "He tried to assuage his guilt by apologizing.",
    tip: "Remember: to make (an unpleasant feeling) less intense",
    partOfSpeech: "verb"
  },
{
    word: "assume",
    definition: "to suppose to be the case, without proof; to take on",
    russian: "предполагать, принимать на себя",
    example: "We cannot assume he is guilty without evidence.",
    tip: "Remember: to suppose to be the case, without proof",
    partOfSpeech: "verb"
  },
{
    word: "astute",
    definition: "having an ability to accurately assess situations to one's advantage",
    russian: "проницательный, хитрый, сообразительный",
    example: "He was an astute observer of the political scene.",
    tip: "Remember: having an ability to accurately assess situations to one's advantage",
    partOfSpeech: "adjective"
  },
{
    word: "audacious",
    definition: "showing a willingness to take surprisingly bold risks",
    russian: "дерзкий, смелый, наглый",
    example: "The audacious plan to cross the mountains succeeded.",
    tip: "Remember: showing a willingness to take surprisingly bold risks",
    partOfSpeech: "adjective"
  },
{
    word: "augment",
    definition: "to make (something) greater by adding to it; increase",
    russian: "увеличивать, прибавлять",
    example: "He augmented his income by working a second job.",
    tip: "Remember: to make (something) greater by adding to it",
    partOfSpeech: "verb"
  },
{
    word: "auspicious",
    definition: "conducive to success; favorable",
    russian: "благоприятный, сулящий удачу",
    example: "It was an auspicious beginning to the new year.",
    tip: "Remember: conducive to success",
    partOfSpeech: "adjective"
  },
{
    word: "austere",
    definition: "severe or strict in manner; without comfort or luxury",
    russian: "суровый, строгий, аскетичный",
    example: "The room was furnished in an austere style.",
    tip: "Remember: severe or strict in manner",
    partOfSpeech: "adjective"
  },
{
    word: "authentic",
    definition: "of undisputed origin; genuine",
    russian: "подлинный, аутентичный, достоверный",
    example: "The historian verified that the document was authentic.",
    tip: "Remember: of undisputed origin",
    partOfSpeech: "adjective"
  },
{
    word: "autonomous",
    definition: "having self-government; acting independently",
    russian: "автономный, независимый",
    example: "The region was granted autonomous status.",
    tip: "Remember: having self-government",
    partOfSpeech: "adjective"
  },
{
    word: "avarice",
    definition: "extreme greed for wealth or material gain",
    russian: "жадность, алчность, корыстолюбие",
    example: "His avarice led him to make unethical business decisions.",
    tip: "Remember: extreme greed for wealth or material gain",
    partOfSpeech: "adjective"
  },
{
    word: "aversion",
    definition: "a strong dislike or disinclination",
    russian: "отвращение, неприязнь, антипатия",
    example: "She has a strong aversion to public speaking.",
    tip: "Remember: a strong dislike or disinclination",
    partOfSpeech: "noun"
  },
{
    word: "avert",
    definition: "to turn away (one's eyes); to prevent or ward off",
    russian: "отводить (взгляд), предотвращать",
    example: "He averted his gaze from the terrible sight.",
    tip: "Remember: to turn away (one's eyes)",
    partOfSpeech: "verb"
  },
{
    word: "banal",
    definition: "so lacking in originality as to be obvious and boring",
    russian: "банальный, избитый",
    example: "The movie's plot was banal and predictable.",
    tip: "Remember: so lacking in originality as to be obvious and boring",
    partOfSpeech: "adjective"
  },
{
    word: "bane",
    definition: "a cause of great distress or annoyance",
    russian: "отрава, гибель, проклятие",
    example: "The relentless traffic is the bane of my existence.",
    tip: "Remember: a cause of great distress or annoyance",
    partOfSpeech: "adjective"
  },
{
    word: "baroque",
    definition: "highly ornate and extravagant in style",
    russian: "барочный, вычурный, причудливый",
    example: "The palace was decorated in a baroque style.",
    tip: "Remember: highly ornate and extravagant in style",
    partOfSpeech: "adjective"
  },
{
    word: "bastion",
    definition: "a projecting part of a fortification; a strong supporter",
    russian: "бастион, оплот, цитадель",
    example: "The university was a bastion of academic freedom.",
    tip: "Remember: a projecting part of a fortification",
    partOfSpeech: "noun"
  },
{
    word: "befuddle",
    definition: "to make (someone) unable to think clearly",
    russian: "одурманивать, сбивать с толку",
    example: "The complex legal documents completely befuddled him.",
    tip: "Remember: to make (someone) unable to think clearly",
    partOfSpeech: "verb"
  },
{
    word: "belie",
    definition: "to fail to give a true notion or impression of (something)",
    russian: "противоречить, опровергать, давать неверное представление",
    example: "His calm demeanor belied his inner anxiety.",
    tip: "Remember: to fail to give a true notion or impression of (something)",
    partOfSpeech: "verb"
  },
{
    word: "belligerent",
    definition: "hostile and aggressive",
    russian: "воинственный, агрессивный",
    example: "The belligerent customer was asked to leave the store.",
    tip: "Remember: hostile and aggressive",
    partOfSpeech: "adjective"
  },
{
    word: "bemoan",
    definition: "to express discontent or sorrow over (something)",
    russian: "оплакивать, сетовать, жаловаться",
    example: "He bemoaned the lack of opportunities in his small town.",
    tip: "Remember: to express discontent or sorrow over (something)",
    partOfSpeech: "verb"
  },
{
    word: "bemused",
    definition: "puzzled, confused, or bewildered",
    russian: "озадаченный, смущенный, поглощенный мыслями",
    example: "She looked at the abstract painting with a bemused expression.",
    tip: "Remember: puzzled, confused, or bewildered",
    partOfSpeech: "adjective"
  },
{
    word: "benign",
    definition: "gentle and kindly; not harmful in effect",
    russian: "доброкачественный, мягкий, добрый",
    example: "The tumor was found to be benign.",
    tip: "Remember: gentle and kindly",
    partOfSpeech: "adjective"
  },
{
    word: "bequeath",
    definition: "to pass (something) on or leave (something) to someone else",
    russian: "завещать, оставлять в наследство",
    example: "He bequeathed his entire estate to his children.",
    tip: "Remember: to pass (something) on or leave (something) to someone else",
    partOfSpeech: "verb"
  },
{
    word: "berate",
    definition: "to scold or criticize (someone) angrily",
    russian: "бранить, ругать, отчитывать",
    example: "The coach berated the team for their poor performance.",
    tip: "Remember: to scold or criticize (someone) angrily",
    partOfSpeech: "verb"
  },
{
    word: "bereft",
    definition: "deprived of or lacking (something)",
    russian: "лишенный, покинутый, осиротевший",
    example: "After his wife's death, he felt completely bereft.",
    tip: "Remember: deprived of or lacking (something)",
    partOfSpeech: "noun"
  },
{
    word: "beset",
    definition: "to trouble or threaten persistently",
    russian: "осаждать, окружать, беспокоить",
    example: "The project was beset by delays and budget problems.",
    tip: "Remember: to trouble or threaten persistently",
    partOfSpeech: "verb"
  },
{
    word: "bias",
    definition: "prejudice in favor of or against one thing, person, or group",
    russian: "предвзятость, предубеждение, необъективность",
    example: "The study was criticized for its clear statistical bias.",
    tip: "Remember: prejudice in favor of or against one thing, person, or group",
    partOfSpeech: "noun"
  },
{
    word: "bilk",
    definition: "to obtain or withhold money from (someone) by deceit",
    russian: "обманывать, надувать (на деньги)",
    example: "He bilked investors out of millions of dollars.",
    tip: "Remember: to obtain or withhold money from (someone) by deceit",
    partOfSpeech: "verb"
  },
{
    word: "bland",
    definition: "lacking strong features or characteristics; uninteresting",
    russian: "безвкусный, пресный, мягкий",
    example: "The soup was rather bland and needed more seasoning.",
    tip: "Remember: lacking strong features or characteristics",
    partOfSpeech: "noun"
  },
{
    word: "blatant",
    definition: "(of bad behavior) done openly and unashamedly",
    russian: "вопиющий, явный, вульгарный",
    example: "It was a blatant lie, and everyone knew it.",
    tip: "Remember: (of bad behavior) done openly and unashamedly",
    partOfSpeech: "adjective"
  },
{
    word: "bleak",
    definition: "lacking vegetation and exposed; cold and miserable",
    russian: "мрачный, унылый, холодный",
    example: "The future looked bleak after the company closed.",
    tip: "Remember: lacking vegetation and exposed",
    partOfSpeech: "adjective"
  },
{
    word: "blight",
    definition: "a plant disease; something that spoils or damages",
    russian: "зараза, гибель; портить",
    example: "Urban decay was a blight on the city.",
    tip: "Remember: a plant disease",
    partOfSpeech: "noun"
  },
{
    word: "boisterous",
    definition: "noisy, energetic, and cheerful; rowdy",
    russian: "шумный, бурный, неистовый",
    example: "The boisterous children were running around the playground.",
    tip: "Remember: noisy, energetic, and cheerful",
    partOfSpeech: "adjective"
  },
{
    word: "bolster",
    definition: "to support or strengthen; prop up",
    russian: "поддерживать, укреплять",
    example: "The new evidence helped bolster the attorney's case.",
    tip: "Remember: to support or strengthen",
    partOfSpeech: "verb"
  },
{
    word: "bombastic",
    definition: "high-sounding but with little meaning; inflated",
    russian: "напыщенный, помпезный, высокопарный",
    example: "His bombastic speech failed to impress the educated audience.",
    tip: "Remember: high-sounding but with little meaning",
    partOfSpeech: "adjective"
  },
{
    word: "boon",
    definition: "a thing that is helpful or beneficial",
    russian: "благо, дар, преимущество",
    example: "The new library was a boon to the community.",
    tip: "Remember: a thing that is helpful or beneficial",
    partOfSpeech: "noun"
  },
{
    word: "boorish",
    definition: "rough and bad-mannered; coarse",
    russian: "грубый, неотесанный, хамский",
    example: "His boorish behavior at the dinner party embarrassed everyone.",
    tip: "Remember: rough and bad-mannered",
    partOfSpeech: "adjective"
  },
{
    word: "brandish",
    definition: "to wave or flourish (something, especially a weapon) as a threat",
    russian: "размахивать, бряцать (оружием)",
    example: "He brandished the sword angrily at his opponent.",
    tip: "Remember: to wave or flourish (something, especially a weapon) as a threat",
    partOfSpeech: "verb"
  },
{
    word: "brazen",
    definition: "bold and without shame",
    russian: "наглый, бесстыдный, дерзкий",
    example: "She made a brazen attempt to cheat on the exam.",
    tip: "Remember: bold and without shame",
    partOfSpeech: "verb"
  },
{
    word: "breach",
    definition: "an act of breaking a law or agreement; a gap",
    russian: "нарушение, пролом; нарушать",
    example: "This action constitutes a breach of the contract.",
    tip: "Remember: an act of breaking a law or agreement",
    partOfSpeech: "noun"
  },
{
    word: "brevity",
    definition: "concise and exact use of words; shortness of time",
    russian: "краткость, сжатость",
    example: "The brevity of his speech was appreciated by all.",
    tip: "Remember: concise and exact use of words",
    partOfSpeech: "noun"
  },
{
    word: "brittle",
    definition: "hard but liable to break or shatter easily",
    russian: "хрупкий, ломкий",
    example: "The old, dry bones were brittle.",
    tip: "Remember: hard but liable to break or shatter easily",
    partOfSpeech: "adjective"
  },
{
    word: "broach",
    definition: "to raise (a difficult subject) for discussion",
    russian: "поднимать (вопрос), начинать обсуждение",
    example: "He decided to broach the sensitive topic at the meeting.",
    tip: "Remember: to raise (a difficult subject) for discussion",
    partOfSpeech: "verb"
  },
{
    word: "bucolic",
    definition: "relating to the pleasant aspects of the countryside",
    russian: "буколический, пасторальный, сельский",
    example: "The painting depicted a peaceful, bucolic scene.",
    tip: "Remember: relating to the pleasant aspects of the countryside",
    partOfSpeech: "adjective"
  },
{
    word: "bulwark",
    definition: "a defensive wall; a person or thing that acts as a defense",
    russian: "оплот, бастион, защита",
    example: "The new dam serves as a bulwark against flooding.",
    tip: "Remember: a defensive wall",
    partOfSpeech: "noun"
  },
{
    word: "burgeon",
    definition: "to begin to grow or increase rapidly; flourish",
    russian: "расти, расцветать, пускать почки",
    example: "The small town quickly burgeoned into a city.",
    tip: "Remember: to begin to grow or increase rapidly",
    partOfSpeech: "verb"
  },
{
    word: "burnish",
    definition: "to polish (something, especially metal) by rubbing",
    russian: "полировать, шлифовать, придавать блеск",
    example: "He burnished the silver trophy until it gleamed.",
    tip: "Remember: to polish (something, especially metal) by rubbing",
    partOfSpeech: "verb"
  },
{
    word: "bygone",
    definition: "belonging to an earlier time",
    russian: "прошлый, минувший, ушедший",
    example: "She reminisced about the bygone era of her youth.",
    tip: "Remember: belonging to an earlier time",
    partOfSpeech: "adjective"
  },
{
    word: "cache",
    definition: "a collection of items stored in a hidden place",
    russian: "тайник, кэш, (секретный) запас",
    example: "The hikers found a small cache of supplies.",
    tip: "Remember: a collection of items stored in a hidden place",
    partOfSpeech: "noun"
  },
{
    word: "cacophony",
    definition: "a harsh, discordant mixture of sounds",
    russian: "какофония, неблагозвучие",
    example: "A cacophony of car horns filled the air.",
    tip: "Remember: a harsh, discordant mixture of sounds",
    partOfSpeech: "adjective"
  },
{
    word: "cajole",
    definition: "to persuade (someone) to do something by sustained flattery",
    russian: "упрашивать, умасливать, задабривать",
    example: "He cajoled his friends into helping him move.",
    tip: "Remember: to persuade (someone) to do something by sustained flattery",
    partOfSpeech: "verb"
  },
{
    word: "callous",
    definition: "showing or having an insensitive and cruel disregard for others",
    russian: "черствый, бездушный, мозолистый",
    example: "His callous remarks about the tragedy shocked everyone.",
    tip: "Remember: showing or having an insensitive and cruel disregard for others",
    partOfSpeech: "adjective"
  },
{
    word: "callow",
    definition: "inexperienced and immature",
    russian: "неопытный, незрелый, «желторотый»",
    example: "The callow intern made several rookie mistakes.",
    tip: "Remember: inexperienced and immature",
    partOfSpeech: "adjective"
  },
{
    word: "candor",
    definition: "the quality of being open and honest in expression; frankness",
    russian: "откровенность, прямота, искренность",
    example: "I appreciate your candor in this difficult situation.",
    tip: "Remember: the quality of being open and honest in expression",
    partOfSpeech: "noun"
  },
{
    word: "capacious",
    definition: "having a lot of space inside; roomy",
    russian: "вместительный, просторный",
    example: "The capacious backpack held all of their gear.",
    tip: "Remember: having a lot of space inside",
    partOfSpeech: "adjective"
  },
{
    word: "capitulate",
    definition: "to cease to resist an opponent; surrender",
    russian: "капитулировать, сдаваться",
    example: "The army finally capitulated after a long siege.",
    tip: "Remember: to cease to resist an opponent",
    partOfSpeech: "verb"
  },
{
    word: "capricious",
    definition: "given to sudden and unaccountable changes of mood or behavior",
    russian: "капризный, своенравный, непредсказуемый",
    example: "The weather in this region is notoriously capricious.",
    tip: "Remember: given to sudden and unaccountable changes of mood or behavior",
    partOfSpeech: "adjective"
  },
{
    word: "captivate",
    definition: "to attract and hold the interest and attention of; charm",
    russian: "очаровывать, пленять, увлекать",
    example: "The speaker captivated the audience with her stories.",
    tip: "Remember: to attract and hold the interest and attention of",
    partOfSpeech: "verb"
  },
{
    word: "caricature",
    definition: "a picture or imitation in which features are exaggerated",
    russian: "карикатура, шарж",
    example: "The artist drew a humorous caricature of the politician.",
    tip: "Remember: a picture or imitation in which features are exaggerated",
    partOfSpeech: "adjective"
  },
{
    word: "castigate",
    definition: "to reprimand (someone) severely",
    russian: "сурово наказывать, бичевать, критиковать",
    example: "The judge castigated the lawyer for his unethical behavior.",
    tip: "Remember: to reprimand (someone) severely",
    partOfSpeech: "verb"
  },
{
    word: "catalyst",
    definition: "a substance that increases a reaction rate; a person or event causing change",
    russian: "катализатор, возбудитель",
    example: "The new invention was a catalyst for industrial change.",
    tip: "Remember: a substance that increases a reaction rate",
    partOfSpeech: "noun"
  },
{
    word: "categorical",
    definition: "unambiguously explicit and direct",
    russian: "категорический, безусловный",
    example: "He issued a categorical denial of the accusations.",
    tip: "Remember: unambiguously explicit and direct",
    partOfSpeech: "adjective"
  },
{
    word: "catharsis",
    definition: "the process of releasing, and providing relief from, strong emotions",
    russian: "катарсис, очищение (эмоциональное)",
    example: "Writing the novel was a form of catharsis for the author.",
    tip: "Remember: the process of releasing, and providing relief from, strong emotions",
    partOfSpeech: "adjective"
  },
{
    word: "caustic",
    definition: "able to burn or corrode; sarcastic in a scathing way",
    russian: "едкий, каустический, язвительный",
    example: "His caustic comments hurt her feelings.",
    tip: "Remember: able to burn or corrode",
    partOfSpeech: "noun"
  },
{
    word: "cavalier",
    definition: "showing a lack of proper concern; offhand",
    russian: "бесцеремонный, высокомерный, небрежный",
    example: "He has a cavalier attitude towards safety regulations.",
    tip: "Remember: showing a lack of proper concern",
    partOfSpeech: "noun"
  },
{
    word: "censure",
    definition: "to express severe disapproval of (someone or something)",
    russian: "осуждение, порицание; осуждать",
    example: "The Senate voted to censure the member for misconduct.",
    tip: "Remember: to express severe disapproval of (someone or something)",
    partOfSpeech: "verb"
  },
{
    word: "cerebral",
    definition: "intellectual rather than emotional or physical",
    russian: "церебральный, мозговой, интеллектуальный",
    example: "The film was a cerebral exploration of complex ideas.",
    tip: "Remember: intellectual rather than emotional or physical",
    partOfSpeech: "adjective"
  },
{
    word: "charisma",
    definition: "compelling attractiveness or charm that can inspire devotion",
    russian: "харизма, обаяние, одаренность",
    example: "The political leader possessed great charisma.",
    tip: "Remember: compelling attractiveness or charm that can inspire devotion",
    partOfSpeech: "noun"
  },
{
    word: "charlatan",
    definition: "a person falsely claiming to have a special knowledge or skill",
    russian: "шарлатан, обманщик",
    example: "The supposed 'doctor' was exposed as a charlatan.",
    tip: "Remember: a person falsely claiming to have a special knowledge or skill",
    partOfSpeech: "noun"
  },
{
    word: "chastise",
    definition: "to reprimand severely",
    russian: "наказывать, бить, подвергать резкой критике",
    example: "He chastised his son for his reckless driving.",
    tip: "Remember: to reprimand severely",
    partOfSpeech: "verb"
  },
{
    word: "cherish",
    definition: "to protect and care for (someone) lovingly",
    russian: "лелеять, нежно любить, хранить",
    example: "She cherished the memory of her grandmother.",
    tip: "Remember: to protect and care for (someone) lovingly",
    partOfSpeech: "verb"
  },
{
    word: "chicanery",
    definition: "the use of trickery to achieve a political, financial, or legal purpose",
    russian: "крючкотворство, мошенничество, уловки",
    example: "He resorted to chicanery to win the election.",
    tip: "Remember: the use of trickery to achieve a political, financial, or legal purpose",
    partOfSpeech: "adjective"
  },
{
    word: "chimera",
    definition: "a thing that is hoped for but is illusory or impossible",
    russian: "химера, несбыточная мечта, иллюзия",
    example: "World peace sometimes seems like an unattainable chimera.",
    tip: "Remember: a thing that is hoped for but is illusory or impossible",
    partOfSpeech: "noun"
  },
{
    word: "choleric",
    definition: "bad-tempered or irritable",
    russian: "холерический, вспыльчивый, гневливый",
    example: "The choleric manager was feared by his employees.",
    tip: "Remember: bad-tempered or irritable",
    partOfSpeech: "adjective"
  },
{
    word: "chronic",
    definition: "(of an illness) persisting for a long time or constantly recurring",
    russian: "хронический, застарелый, постоянный",
    example: "He suffers from chronic back pain.",
    tip: "Remember: (of an illness) persisting for a long time or constantly recurring",
    partOfSpeech: "adjective"
  },
{
    word: "chronological",
    definition: "starting with the earliest and following the order in which they occurred",
    russian: "хронологический",
    example: "The book presents the events in chronological order.",
    tip: "Remember: starting with the earliest and following the order in which they occurred",
    partOfSpeech: "adjective"
  },
{
    word: "circuitous",
    definition: "(of a route or journey) longer than the most direct way",
    russian: "окольный, круговой, уклончивый",
    example: "They took a circuitous route to avoid the traffic.",
    tip: "Remember: (of a route or journey) longer than the most direct way",
    partOfSpeech: "adjective"
  },
{
    word: "circumlocution",
    definition: "the use of many words where fewer would do; evasion in speech",
    russian: "многословие, уклончивая речь, иносказание",
    example: "His answer was full of circumlocution and vague promises.",
    tip: "Remember: the use of many words where fewer would do",
    partOfSpeech: "noun"
  },
{
    word: "circumscribe",
    definition: "to restrict (something) within limits",
    russian: "ограничивать, очерчивать",
    example: "Her power was circumscribed by the new regulations.",
    tip: "Remember: to restrict (something) within limits",
    partOfSpeech: "verb"
  },
{
    word: "circumspect",
    definition: "wary and unwilling to take risks",
    russian: "осмотрительный, осторожный, продуманный",
    example: "The diplomat was circumspect in his dealings with the media.",
    tip: "Remember: wary and unwilling to take risks",
    partOfSpeech: "adjective"
  },
{
    word: "circumvent",
    definition: "to find a way around (an obstacle); to overcome cleverly",
    russian: "обойти, перехитрить, обмануть",
    example: "They found a way to circumvent the security system.",
    tip: "Remember: to find a way around (an obstacle)",
    partOfSpeech: "verb"
  },
{
    word: "clairvoyant",
    definition: "claiming to have a supernatural ability to perceive future events",
    russian: "ясновидящий, прозорливый",
    example: "The woman claimed to be clairvoyant and predict the future.",
    tip: "Remember: claiming to have a supernatural ability to perceive future events",
    partOfSpeech: "adjective"
  },
{
    word: "clandestine",
    definition: "kept secret or done secretively",
    russian: "тайный, нелегальный, подпольный",
    example: "They held a clandestine meeting in the dead of night.",
    tip: "Remember: kept secret or done secretively",
    partOfSpeech: "adjective"
  },
{
    word: "clemency",
    definition: "mercy; lenience",
    russian: "милосердие, снисхождение, мягкость",
    example: "The prisoner appealed to the governor for clemency.",
    tip: "Remember: mercy",
    partOfSpeech: "adjective"
  },
{
    word: "cliché",
    definition: "a phrase or opinion that is overused and betrays a lack of original thought",
    russian: "клише, банальность, избитая фраза",
    example: "His speech was filled with tired clichés and empty promises.",
    tip: "Remember: a phrase or opinion that is overused and betrays a lack of original thought",
    partOfSpeech: "adjective"
  },
{
    word: "coalesce",
    definition: "to come together and form one mass or whole",
    russian: "срастаться, объединяться, сливаться",
    example: "The small droplets of water coalesced into a large puddle.",
    tip: "Remember: to come together and form one mass or whole",
    partOfSpeech: "verb"
  },
{
    word: "coerce",
    definition: "to persuade (an unwilling person) to do something by using force or threats",
    russian: "принуждать, заставлять, добиваться силой",
    example: "He was coerced into signing the contract.",
    tip: "Remember: to persuade (an unwilling person) to do something by using force or threats",
    partOfSpeech: "verb"
  },
{
    word: "cogent",
    definition: "(of an argument) clear, logical, and convincing",
    russian: "убедительный, веский, неоспоримый",
    example: "She presented a cogent argument for changing the policy.",
    tip: "Remember: (of an argument) clear, logical, and convincing",
    partOfSpeech: "adjective"
  },
{
    word: "cognizant",
    definition: "having knowledge or being aware of",
    russian: "осознающий, знающий, осведомленный",
    example: "He was cognizant of the risks involved in the venture.",
    tip: "Remember: having knowledge or being aware of",
    partOfSpeech: "adjective"
  },
{
    word: "coherent",
    definition: "(of an argument or theory) logical and consistent; united as a whole",
    russian: "связный, последовательный, понятный",
    example: "The essay was well-organized and coherent.",
    tip: "Remember: (of an argument or theory) logical and consistent",
    partOfSpeech: "adjective"
  },
{
    word: "cohesive",
    definition: "characterized by or causing cohesion; sticking together",
    russian: "связный, сплоченный",
    example: "The new manager built a cohesive and productive team.",
    tip: "Remember: characterized by or causing cohesion",
    partOfSpeech: "adjective"
  },
{
    word: "collaborate",
    definition: "to work jointly on an activity, especially to produce something",
    russian: "сотрудничать, работать совместно",
    example: "The two scientists collaborated on the research paper.",
    tip: "Remember: to work jointly on an activity, especially to produce something",
    partOfSpeech: "verb"
  },
{
    word: "colloquial",
    definition: "(of language) used in ordinary or familiar conversation; not formal",
    russian: "разговорный, нелитературный",
    example: "His speech was full of colloquial expressions.",
    tip: "Remember: (of language) used in ordinary or familiar conversation",
    partOfSpeech: "adjective"
  },
{
    word: "collusion",
    definition: "secret or illegal cooperation or conspiracy",
    russian: "сговор, тайное соглашение",
    example: "The companies were accused of collusion to fix prices.",
    tip: "Remember: secret or illegal cooperation or conspiracy",
    partOfSpeech: "noun"
  },
{
    word: "commensurate",
    definition: "corresponding in size or degree; in proportion",
    russian: "соразмерный, соответствующий",
    example: "His salary was commensurate with his experience.",
    tip: "Remember: corresponding in size or degree",
    partOfSpeech: "verb"
  },
{
    word: "compelling",
    definition: "evoking interest in a powerfully irresistible way; not able to be refuted",
    russian: "убедительный, неотразимый, захватывающий",
    example: "The novel was so compelling that I couldn't put it down.",
    tip: "Remember: evoking interest in a powerfully irresistible way",
    partOfSpeech: "adjective"
  },
{
    word: "compendium",
    definition: "a collection of concise but detailed information about a particular subject",
    russian: "сборник, краткое изложение, справочник",
    example: "The book is a compendium of knowledge on ancient history.",
    tip: "Remember: a collection of concise but detailed information about a particular subject",
    partOfSpeech: "adjective"
  },
{
    word: "complacent",
    definition: "showing smug or uncritical satisfaction with oneself",
    russian: "самодовольный, благодушный",
    example: "After their initial success, the team became complacent.",
    tip: "Remember: showing smug or uncritical satisfaction with oneself",
    partOfSpeech: "noun"
  },
{
    word: "complement",
    definition: "a thing that completes or brings to perfection",
    russian: "дополнение, комплект; дополнять",
    example: "The wine was a perfect complement to the spicy food.",
    tip: "Remember: a thing that completes or brings to perfection",
    partOfSpeech: "noun"
  },
{
    word: "compliant",
    definition: "inclined to agree with others or obey rules",
    russian: "уступчивый, податливый, соответствующий (правилам)",
    example: "The company was compliant with all environmental regulations.",
    tip: "Remember: inclined to agree with others or obey rules",
    partOfSpeech: "adjective"
  },
{
    word: "complicity",
    definition: "the state of being involved with others in an illegal activity",
    russian: "соучастие, причастность",
    example: "His complicity in the crime was later proven.",
    tip: "Remember: the state of being involved with others in an illegal activity",
    partOfSpeech: "noun"
  },
{
    word: "component",
    definition: "a part or element of a larger whole",
    russian: "компонент, составная часть",
    example: "Trust is a vital component of any healthy relationship.",
    tip: "Remember: a part or element of a larger whole",
    partOfSpeech: "adjective"
  },
{
    word: "comprehensive",
    definition: "complete; including all or nearly all elements or aspects",
    russian: "всеобъемлющий, исчерпывающий, комплексный",
    example: "The report provides a comprehensive analysis of the issue.",
    tip: "Remember: complete",
    partOfSpeech: "adjective"
  },
{
    word: "comprise",
    definition: "to consist of; be made up of",
    russian: "включать, содержать, составлять",
    example: "The committee comprises representatives from all departments.",
    tip: "Remember: to consist of",
    partOfSpeech: "verb"
  },
{
    word: "compromise",
    definition: "an agreement reached by mutual concession; to weaken",
    russian: "компромисс; ставить под угрозу",
    example: "His principles were compromised by his desire for wealth.",
    tip: "Remember: an agreement reached by mutual concession",
    partOfSpeech: "adjective"
  },
{
    word: "compunction",
    definition: "a feeling of guilt or moral scruple that follows doing something bad",
    russian: "угрызения совести, раскаяние, сожаление",
    example: "He felt no compunction about misleading the investors.",
    tip: "Remember: a feeling of guilt or moral scruple that follows doing something bad",
    partOfSpeech: "noun"
  },
{
    word: "concede",
    definition: "to admit that something is true or valid after first denying it",
    russian: "уступать, признавать, допускать",
    example: "He finally conceded that she was right.",
    tip: "Remember: to admit that something is true or valid after first denying it",
    partOfSpeech: "verb"
  },
{
    word: "concise",
    definition: "giving a lot of information clearly and in a few words; brief",
    russian: "краткий, сжатый, лаконичный",
    example: "His summary of the event was concise and informative.",
    tip: "Remember: giving a lot of information clearly and in a few words",
    partOfSpeech: "adjective"
  },
{
    word: "concoct",
    definition: "to make (a dish) by combining ingredients; to create or devise",
    russian: "состряпать, выдумать, приготовить (смесь)",
    example: "She concocted an elaborate story to explain her absence.",
    tip: "Remember: to make (a dish) by combining ingredients",
    partOfSpeech: "verb"
  },
{
    word: "concomitant",
    definition: "naturally accompanying or associated",
    russian: "сопутствующий, сопровождающий",
    example: "Poverty and its concomitant social problems are on the rise.",
    tip: "Remember: naturally accompanying or associated",
    partOfSpeech: "adjective"
  },
{
    word: "condescend",
    definition: "to show feelings of superiority; be patronizing",
    russian: "снисходить, унижаться",
    example: "He condescended to speak to the junior employees.",
    tip: "Remember: to show feelings of superiority",
    partOfSpeech: "verb"
  },
{
    word: "condone",
    definition: "to accept and allow (behavior that is considered wrong) to continue",
    russian: "мириться (с), потворствовать, смотреть сквозь пальцы",
    example: "The school does not condone bullying in any form.",
    tip: "Remember: to accept and allow (behavior that is considered wrong) to continue",
    partOfSpeech: "verb"
  },
{
    word: "conducive",
    definition: "making a certain situation or outcome likely or possible",
    russian: "способствующий, благоприятный",
    example: "The quiet library was conducive to serious study.",
    tip: "Remember: making a certain situation or outcome likely or possible",
    partOfSpeech: "adjective"
  },
{
    word: "confer",
    definition: "to grant or bestow (a title, degree, benefit, or right)",
    russian: "присуждать, даровать, совещаться",
    example: "The university conferred an honorary degree upon him.",
    tip: "Remember: to grant or bestow (a title, degree, benefit, or right)",
    partOfSpeech: "verb"
  },
{
    word: "confidant",
    definition: "a person with whom one shares a secret or private matter",
    russian: "довірена особа, наперсник",
    example: "She was her sister's closest confidant.",
    tip: "Remember: a person with whom one shares a secret or private matter",
    partOfSpeech: "noun"
  },
{
    word: "conflagration",
    definition: "an extensive fire that destroys a great deal of land or property",
    russian: "большой пожар, пожарище",
    example: "The conflagration destroyed most of the historic forest.",
    tip: "Remember: an extensive fire that destroys a great deal of land or property",
    partOfSpeech: "noun"
  },
{
    word: "confluence",
    definition: "the junction of two rivers; a coming together of people or things",
    russian: "слияние, стечение (обстоятельств, людей)",
    example: "The city is located at the confluence of two major rivers.",
    tip: "Remember: the junction of two rivers",
    partOfSpeech: "noun"
  },
{
    word: "conform",
    definition: "to comply with rules, standards, or laws",
    russian: "соответствовать, приспосабливаться, подчиняться",
    example: "All new products must conform to safety standards.",
    tip: "Remember: to comply with rules, standards, or laws",
    partOfSpeech: "verb"
  },
{
    word: "confound",
    definition: "to cause surprise or confusion in (someone)",
    russian: "смущать, ставить в тупик, смешивать",
    example: "The unexpected results confounded the researchers.",
    tip: "Remember: to cause surprise or confusion in (someone)",
    partOfSpeech: "verb"
  },
{
    word: "congenial",
    definition: "pleasant because of a personality, qualities, or interests similar to one's own",
    russian: "близкий по духу, благоприятный, подходящий",
    example: "He found the new office environment to be very congenial.",
    tip: "Remember: pleasant because of a personality, qualities, or interests similar to one's own",
    partOfSpeech: "noun"
  },
{
    word: "congenital",
    definition: "(of a disease or abnormality) present from birth",
    russian: "врожденный, прирожденный",
    example: "The child was diagnosed with a congenital heart defect.",
    tip: "Remember: (of a disease or abnormality) present from birth",
    partOfSpeech: "adjective"
  },
{
    word: "conjecture",
    definition: "an opinion or conclusion formed on the basis of incomplete information",
    russian: "догадка, предположение, гипотеза",
    example: "His theory was based more on conjecture than on solid evidence.",
    tip: "Remember: an opinion or conclusion formed on the basis of incomplete information",
    partOfSpeech: "adjective"
  },
{
    word: "connoisseur",
    definition: "an expert judge in matters of taste",
    russian: "знаток, ценитель",
    example: "He was a connoisseur of fine wines.",
    tip: "Remember: an expert judge in matters of taste",
    partOfSpeech: "adjective"
  },
{
    word: "conscientious",
    definition: "wishing to do one's work or duty well and thoroughly",
    russian: "добросовестный, сознательный, честный",
    example: "She is a conscientious student who always completes her work.",
    tip: "Remember: wishing to do one's work or duty well and thoroughly",
    partOfSpeech: "adjective"
  },
{
    word: "consecrate",
    definition: "to make or declare (something, typically a church) sacred",
    russian: "освящать, посвящать",
    example: "The bishop will consecrate the new chapel next week.",
    tip: "Remember: to make or declare (something, typically a church) sacred",
    partOfSpeech: "verb"
  },
{
    word: "consensus",
    definition: "a general agreement",
    russian: "консенсус, общее согласие",
    example: "The committee finally reached a consensus on the issue.",
    tip: "Remember: a general agreement",
    partOfSpeech: "adjective"
  },
{
    word: "consign",
    definition: "to deliver (something) to a person's custody; to assign",
    russian: "передавать, поручать, отправлять",
    example: "The painting was consigned to an auction house.",
    tip: "Remember: to deliver (something) to a person's custody",
    partOfSpeech: "verb"
  },
{
    word: "consolidate",
    definition: "to combine (a number of things) into a single, more effective whole",
    russian: "консолидировать, укреплять, объединять",
    example: "The company decided to consolidate its operations.",
    tip: "Remember: to combine (a number of things) into a single, more effective whole",
    partOfSpeech: "verb"
  },
{
    word: "consonant",
    definition: "in agreement or harmony with",
    russian: "согласный, созвучный, соответствующий",
    example: "His actions were not consonant with his stated beliefs.",
    tip: "Remember: in agreement or harmony with",
    partOfSpeech: "adjective"
  },
{
    word: "conspicuous",
    definition: "standing out so as to be clearly visible; attracting attention",
    russian: "заметный, бросающийся в глаза, видный",
    example: "He was conspicuous by his absence at the meeting.",
    tip: "Remember: standing out so as to be clearly visible",
    partOfSpeech: "noun"
  },
{
    word: "constituent",
    definition: "a component part of something; a voter in a district",
    russian: "составная часть, компонент; избиратель",
    example: "The senator received many letters from her constituents.",
    tip: "Remember: a component part of something",
    partOfSpeech: "noun"
  },
{
    word: "construe",
    definition: "to interpret (a word or action) in a particular way",
    russian: "истолковывать, интерпретировать, анализировать",
    example: "His comments were construed as a threat.",
    tip: "Remember: to interpret (a word or action) in a particular way",
    partOfSpeech: "verb"
  },
{
    word: "consummate",
    definition: "showing great skill and flair; complete or perfect",
    russian: "законченный, совершенный; завершать",
    example: "She played the piano with consummate skill.",
    tip: "Remember: showing great skill and flair",
    partOfSpeech: "verb"
  },
{
    word: "contemplate",
    definition: "to look thoughtfully for a long time at; to think about",
    russian: "созерцать, обдумывать, размышлять",
    example: "He contemplated the painting for several minutes.",
    tip: "Remember: to look thoughtfully for a long time at",
    partOfSpeech: "verb"
  },
{
    word: "contemporary",
    definition: "living or occurring at the same time; belonging to the present",
    russian: "современный, одновременный",
    example: "The museum features works by contemporary artists.",
    tip: "Remember: living or occurring at the same time",
    partOfSpeech: "adjective"
  },
{
    word: "contempt",
    definition: "the feeling that a person or a thing is beneath consideration or worthless",
    russian: "презрение, неуважение",
    example: "He showed utter contempt for the court's rules.",
    tip: "Remember: the feeling that a person or a thing is beneath consideration or worthless",
    partOfSpeech: "noun"
  },
{
    word: "contend",
    definition: "to struggle to surmount; to assert something as a position in an argument",
    russian: "бороться, соперничать; утверждать",
    example: "The lawyer contended that her client was innocent.",
    tip: "Remember: to struggle to surmount",
    partOfSpeech: "verb"
  },
{
    word: "contentious",
    definition: "causing or likely to cause an argument; controversial",
    russian: "спорный, вздорный, сварливый",
    example: "Abortion remains a highly contentious issue in politics.",
    tip: "Remember: causing or likely to cause an argument",
    partOfSpeech: "adjective"
  },
{
    word: "context",
    definition: "the circumstances that form the setting for an event, statement, or idea",
    russian: "контекст, обстановка, ситуация",
    example: "To understand the poem, you must know its historical context.",
    tip: "Remember: the circumstances that form the setting for an event, statement, or idea",
    partOfSpeech: "adjective"
  },
{
    word: "contiguous",
    definition: "sharing a common border; touching",
    russian: "смежный, прилегающий, соприкасающийся",
    example: "The 48 contiguous states of the USA.",
    tip: "Remember: sharing a common border",
    partOfSpeech: "adjective"
  },
{
    word: "contrite",
    definition: "feeling or expressing remorse or penitence",
    russian: "кающийся, раскаивающийся, сокрушающийся",
    example: "He was genuinely contrite for his hurtful words.",
    tip: "Remember: feeling or expressing remorse or penitence",
    partOfSpeech: "adjective"
  },
{
    word: "contrived",
    definition: "deliberately created rather than arising naturally; artificial",
    russian: "надуманный, неестественный, притворный",
    example: "The plot of the movie felt contrived and unbelievable.",
    tip: "Remember: deliberately created rather than arising naturally",
    partOfSpeech: "adjective"
  },
{
    word: "conundrum",
    definition: "a confusing and difficult problem or question",
    russian: "головоломка, загадка, дилемма",
    example: "The scientist was faced with a moral conundrum.",
    tip: "Remember: a confusing and difficult problem or question",
    partOfSpeech: "adjective"
  },
{
    word: "converge",
    definition: "to tend to meet at a point; to come together",
    russian: "сходиться, сливаться, сближаться",
    example: "Thousands of supporters converged on the capital.",
    tip: "Remember: to tend to meet at a point",
    partOfSpeech: "verb"
  },
{
    word: "conventional",
    definition: "based on or conforming to what is generally done or believed",
    russian: "обычный, традиционный, общепринятый",
    example: "He held very conventional views on marriage.",
    tip: "Remember: based on or conforming to what is generally done or believed",
    partOfSpeech: "adjective"
  },
{
    word: "conversant",
    definition: "familiar with or knowledgeable about something",
    russian: "осведомленный, сведущий, знакомый",
    example: "She is conversant with the latest trends in technology.",
    tip: "Remember: familiar with or knowledgeable about something",
    partOfSpeech: "noun"
  },
{
    word: "convoluted",
    definition: "(especially of an argument or story) extremely complex and difficult to follow",
    russian: "запутанный, сложный, извилистый",
    example: "His explanation was convoluted and hard to understand.",
    tip: "Remember: (especially of an argument or story) extremely complex and difficult to follow",
    partOfSpeech: "adjective"
  },
{
    word: "copious",
    definition: "abundant in supply or quantity",
    russian: "обильный, обширный, богатый",
    example: "She took copious notes during the lecture.",
    tip: "Remember: abundant in supply or quantity",
    partOfSpeech: "adjective"
  },
{
    word: "correlate",
    definition: "to have a mutual relationship or connection",
    russian: "соотносить, коррелировать, устанавливать связь",
    example: "The study aims to correlate test scores with study habits.",
    tip: "Remember: to have a mutual relationship or connection",
    partOfSpeech: "verb"
  },
{
    word: "corroborate",
    definition: "to confirm or give support to (a statement, theory, or finding)",
    russian: "подтверждать, подкреплять (доказательствами)",
    example: "The witness corroborated the victim's account of the incident.",
    tip: "Remember: to confirm or give support to (a statement, theory, or finding)",
    partOfSpeech: "verb"
  },
{
    word: "corrupt",
    definition: "having or showing a willingness to act dishonestly for personal gain",
    russian: "коррумпированный, продажный, испорченный",
    example: "The investigation revealed a corrupt official.",
    tip: "Remember: having or showing a willingness to act dishonestly for personal gain",
    partOfSpeech: "adjective"
  },
{
    word: "cosmopolitan",
    definition: "familiar with and at ease in many different countries and cultures",
    russian: "космополитический, всемирный",
    example: "New York is a vibrant, cosmopolitan city.",
    tip: "Remember: familiar with and at ease in many different countries and cultures",
    partOfSpeech: "adjective"
  },
{
    word: "counterintuitive",
    definition: "contrary to intuition or to common-sense expectation",
    russian: "парадоксальный, нелогичный, противоречащий интуиции",
    example: "The experimental results were completely counterintuitive.",
    tip: "Remember: contrary to intuition or to common-sense expectation",
    partOfSpeech: "adjective"
  },
{
    word: "covert",
    definition: "not openly acknowledged or displayed; secret",
    russian: "скрытый, тайный, замаскированный",
    example: "The spy agency conducted a covert operation.",
    tip: "Remember: not openly acknowledged or displayed",
    partOfSpeech: "adjective"
  },
{
    word: "covet",
    definition: "to yearn to possess or have (something)",
    russian: "жаждать, домогаться, завидовать",
    example: "He coveted the power and influence of his boss.",
    tip: "Remember: to yearn to possess or have (something)",
    partOfSpeech: "verb"
  },
{
    word: "craft",
    definition: "an activity involving skill in making things by hand; skill or guile",
    russian: "ремесло, умение, хитрость",
    example: "The politician used his craft to win the debate.",
    tip: "Remember: an activity involving skill in making things by hand",
    partOfSpeech: "noun"
  },
{
    word: "crass",
    definition: "lacking sensitivity, refinement, or intelligence",
    russian: "грубый, тупой, бесчувственный",
    example: "His crass jokes were inappropriate at the funeral.",
    tip: "Remember: lacking sensitivity, refinement, or intelligence",
    partOfSpeech: "adjective"
  },
{
    word: "craven",
    definition: "contemptibly lacking in courage; cowardly",
    russian: "трусливый, малодушный",
    example: "The craven soldier deserted his post in fear.",
    tip: "Remember: contemptibly lacking in courage",
    partOfSpeech: "verb"
  },
{
    word: "credence",
    definition: "belief in or acceptance of something as true",
    russian: "доверие, вера",
    example: "I don't give any credence to those rumors.",
    tip: "Remember: belief in or acceptance of something as true",
    partOfSpeech: "noun"
  },
{
    word: "credible",
    definition: "able to be believed; convincing",
    russian: "заслуживающий доверия, надежный, вероятный",
    example: "The police received a credible tip from an informant.",
    tip: "Remember: able to be believed",
    partOfSpeech: "adjective"
  },
{
    word: "credulous",
    definition: "having or showing too great a readiness to believe things",
    russian: "доверчивый, легковерный",
    example: "Credulous people are easily fooled by scams.",
    tip: "Remember: having or showing too great a readiness to believe things",
    partOfSpeech: "adjective"
  },
{
    word: "criterion",
    definition: "a principle or standard by which something may be judged",
    russian: "критерий, мерило, стандарт",
    example: "Academic achievement is one criterion for admission.",
    tip: "Remember: a principle or standard by which something may be judged",
    partOfSpeech: "noun"
  },
{
    word: "critique",
    definition: "a detailed analysis and assessment of something",
    russian: "критика, критический разбор, рецензия",
    example: "The professor gave a helpful critique of her essay.",
    tip: "Remember: a detailed analysis and assessment of something",
    partOfSpeech: "noun"
  },
{
    word: "cryptic",
    definition: "having a meaning that is mysterious or obscure",
    russian: "загадочный, таинственный, скрытый",
    example: "He left a cryptic message on her voicemail.",
    tip: "Remember: having a meaning that is mysterious or obscure",
    partOfSpeech: "adjective"
  },
{
    word: "culminate",
    definition: "to reach a climax or point of highest development",
    russian: "достигать высшей точки, завершаться",
    example: "The long project culminated in a successful product launch.",
    tip: "Remember: to reach a climax or point of highest development",
    partOfSpeech: "verb"
  },
{
    word: "culpable",
    definition: "deserving blame",
    russian: "виновный, преступный, заслуживающий порицания",
    example: "The investigation found him culpable of negligence.",
    tip: "Remember: deserving blame",
    partOfSpeech: "adjective"
  },
{
    word: "cultivate",
    definition: "to prepare and use land for crops; to try to acquire or develop",
    russian: "культивировать, выращивать, развивать",
    example: "He cultivated an image as a man of the people.",
    tip: "Remember: to prepare and use land for crops",
    partOfSpeech: "verb"
  },
{
    word: "cumulative",
    definition: "increasing or increased in quantity or degree by successive additions",
    russian: "совокупный, накопленный, кумулятивный",
    example: "The cumulative effect of pollution is damaging the environment.",
    tip: "Remember: increasing or increased in quantity or degree by successive additions",
    partOfSpeech: "adjective"
  },
{
    word: "cunning",
    definition: "having or showing skill in achieving one's ends by deceit",
    russian: "хитрый, коварный, искусный",
    example: "He was as cunning as a fox.",
    tip: "Remember: having or showing skill in achieving one's ends by deceit",
    partOfSpeech: "adjective"
  },
{
    word: "curb",
    definition: "a check or restraint on something; to restrain or keep in check",
    russian: "сдерживание, обочина; сдерживать",
    example: "The new laws are intended to curb inflation.",
    tip: "Remember: a check or restraint on something",
    partOfSpeech: "noun"
  },
{
    word: "cursory",
    definition: "hasty and therefore not thorough or detailed",
    russian: "беглый, поверхностный, поспешный",
    example: "He gave the report only a cursory glance.",
    tip: "Remember: hasty and therefore not thorough or detailed",
    partOfSpeech: "adjective"
  },
{
    word: "curt",
    definition: "rudely brief",
    russian: "краткий, отрывистый, резкий",
    example: "She responded with a curt 'no'.",
    tip: "Remember: rudely brief",
    partOfSpeech: "adjective"
  },
{
    word: "curtail",
    definition: "to reduce in extent or quantity; impose a restriction on",
    russian: "сокращать, урезать, ограничивать",
    example: "We must curtail our spending to save money.",
    tip: "Remember: to reduce in extent or quantity",
    partOfSpeech: "verb"
  },
{
    word: "cynical",
    definition: "believing that people are motivated purely by self-interest",
    russian: "циничный, скептический",
    example: "He has a cynical view of politics.",
    tip: "Remember: believing that people are motivated purely by self-interest",
    partOfSpeech: "adjective"
  },
{
    word: "daunt",
    definition: "to make (someone) feel intimidated or apprehensive",
    russian: "пугать, устрашать, обескураживать",
    example: "The scale of the challenge did not daunt him.",
    tip: "Remember: to make (someone) feel intimidated or apprehensive",
    partOfSpeech: "verb"
  },
{
    word: "dearth",
    definition: "a scarcity or lack of something",
    russian: "нехватка, дефицит, недостаток",
    example: "There is a dearth of qualified applicants for the job.",
    tip: "Remember: a scarcity or lack of something",
    partOfSpeech: "noun"
  },
{
    word: "debacle",
    definition: "a sudden and ignominious failure; a fiasco",
    russian: "провал, фиаско, крах",
    example: "The military operation was a complete debacle.",
    tip: "Remember: a sudden and ignominious failure",
    partOfSpeech: "adjective"
  },
{
    word: "debase",
    definition: "to reduce (something) in quality or value; degrade",
    russian: "унижать, обесценивать, портить",
    example: "He refused to debase himself by cheating.",
    tip: "Remember: to reduce (something) in quality or value",
    partOfSpeech: "verb"
  },
{
    word: "debilitate",
    definition: "to make (someone) weak and infirm",
    russian: "ослаблять, истощать",
    example: "The long illness debilitated him.",
    tip: "Remember: to make (someone) weak and infirm",
    partOfSpeech: "verb"
  },
{
    word: "debunk",
    definition: "to expose the falseness or hollowness of (a myth, idea, or belief)",
    russian: "развенчивать, разоблачать",
    example: "The investigative journalist debunked the popular conspiracy theory.",
    tip: "Remember: to expose the falseness or hollowness of (a myth, idea, or belief)",
    partOfSpeech: "verb"
  },
{
    word: "decade",
    definition: "a period of ten years",
    russian: "десятилетие, декада",
    example: "The company has grown rapidly over the last decade.",
    tip: "Remember: a period of ten years",
    partOfSpeech: "adjective"
  },
{
    word: "decimate",
    definition: "to kill, destroy, or remove a large percentage of",
    russian: "уничтожать, истреблять, опустошать",
    example: "The population was decimated by the plague.",
    tip: "Remember: to kill, destroy, or remove a large percentage of",
    partOfSpeech: "verb"
  },
{
    word: "decorum",
    definition: "behavior in keeping with good taste and propriety",
    russian: "приличие, благопристойность, этикет",
    example: "He behaved with the utmost decorum at the formal event.",
    tip: "Remember: behavior in keeping with good taste and propriety",
    partOfSpeech: "adjective"
  },
{
    word: "decree",
    definition: "an official order issued by a legal authority",
    russian: "указ, декрет, постановление",
    example: "The government issued a decree banning all protests.",
    tip: "Remember: an official order issued by a legal authority",
    partOfSpeech: "adjective"
  },
{
    word: "decry",
    definition: "to publicly denounce",
    russian: "осуждать, порицать, критиковать",
    example: "Critics decry the new law as a violation of civil rights.",
    tip: "Remember: to publicly denounce",
    partOfSpeech: "verb"
  },
{
    word: "deduce",
    definition: "to arrive at (a fact or a conclusion) by reasoning; draw as a logical conclusion",
    russian: "выводить, заключать, делать вывод",
    example: "From the evidence, the detective deduced the killer's identity.",
    tip: "Remember: to arrive at (a fact or a conclusion) by reasoning",
    partOfSpeech: "verb"
  },
{
    word: "deem",
    definition: "to regard or consider in a specified way",
    russian: "считать, полагать, судить",
    example: "The committee deemed his actions inappropriate.",
    tip: "Remember: to regard or consider in a specified way",
    partOfSpeech: "verb"
  },
{
    word: "deference",
    definition: "humble submission and respect",
    russian: "уважение, почтение, почтительность",
    example: "He showed deference to his elders.",
    tip: "Remember: humble submission and respect",
    partOfSpeech: "noun"
  },
{
    word: "deficient",
    definition: "not having enough of a specified quality or ingredient",
    russian: "дефицитный, недостаточный, несовершенный",
    example: "The diet was deficient in essential vitamins.",
    tip: "Remember: not having enough of a specified quality or ingredient",
    partOfSpeech: "adjective"
  },
{
    word: "definitive",
    definition: "(of a conclusion or agreement) done or reached decisively",
    russian: "окончательный, точный, определенный",
    example: "The book is the definitive guide to the local wildlife.",
    tip: "Remember: (of a conclusion or agreement) done or reached decisively",
    partOfSpeech: "adjective"
  },
{
    word: "deflate",
    definition: "to let air or gas out of; to cause to decrease in size or importance",
    russian: "сдувать, выпускать воздух; снижать (цены)",
    example: "The criticism deflated his ego.",
    tip: "Remember: to let air or gas out of",
    partOfSpeech: "verb"
  },
{
    word: "deft",
    definition: "neatly skillful and quick in one's movements",
    russian: "ловкий, искусный, проворный",
    example: "Her deft fingers quickly tied the intricate knot.",
    tip: "Remember: neatly skillful and quick in one's movements",
    partOfSpeech: "adjective"
  },
{
    word: "defunct",
    definition: "no longer existing or functioning",
    russian: "вымерший, прекративший существование, недействующий",
    example: "The defunct factory was scheduled for demolition.",
    tip: "Remember: no longer existing or functioning",
    partOfSpeech: "adjective"
  },
{
    word: "degenerate",
    definition: "to decline or deteriorate physically, mentally, or morally",
    russian: "вырождаться, деградировать; дегенерат",
    example: "The debate degenerated into a shouting match.",
    tip: "Remember: to decline or deteriorate physically, mentally, or morally",
    partOfSpeech: "verb"
  },
{
    word: "deign",
    definition: "to do something that one considers to be beneath one's dignity",
    russian: "соизволить, удостоить, снизойти",
    example: "He did not deign to reply to my letter.",
    tip: "Remember: to do something that one considers to be beneath one's dignity",
    partOfSpeech: "verb"
  },
{
    word: "delectable",
    definition: "delicious (of food or drink)",
    russian: "восхитительный, очень вкусный",
    example: "The bakery offered a range of delectable pastries.",
    tip: "Remember: delicious (of food or drink)",
    partOfSpeech: "adjective"
  },
{
    word: "deleterious",
    definition: "causing harm or damage",
    russian: "вредный, губительный, пагубный",
    example: "Smoking has deleterious effects on your health.",
    tip: "Remember: causing harm or damage",
    partOfSpeech: "adjective"
  },
{
    word: "deliberate",
    definition: "done consciously and intentionally; to engage in long thought",
    russian: "умышленный, преднамеренный; обдумывать",
    example: "The jury deliberated for two days before reaching a verdict.",
    tip: "Remember: done consciously and intentionally",
    partOfSpeech: "verb"
  },
{
    word: "delineate",
    definition: "to describe or portray (something) precisely",
    russian: "очерчивать, обрисовывать, разграничивать",
    example: "The report clearly delineates the steps to be taken.",
    tip: "Remember: to describe or portray (something) precisely",
    partOfSpeech: "verb"
  },
{
    word: "delude",
    definition: "to impose a misleading belief upon (someone); deceive",
    russian: "вводить в заблуждение, обманывать",
    example: "He deluded himself into thinking he could win.",
    tip: "Remember: to impose a misleading belief upon (someone)",
    partOfSpeech: "verb"
  },
{
    word: "deluge",
    definition: "a severe flood; a great quantity of something arriving at once",
    russian: "потоп, наводнение; заваливать (письмами)",
    example: "The office received a deluge of complaints.",
    tip: "Remember: a severe flood",
    partOfSpeech: "noun"
  },
{
    word: "demagogue",
    definition: "a political leader who seeks support by appealing to popular desires",
    russian: "демагог",
    example: "The politician was a demagogue who preyed on people's fears.",
    tip: "Remember: a political leader who seeks support by appealing to popular desires",
    partOfSpeech: "adjective"
  },
{
    word: "demise",
    definition: "a person's death; the end or failure of an enterprise",
    russian: "кончина, смерть, крах",
    example: "The company's demise was caused by poor management.",
    tip: "Remember: a person's death",
    partOfSpeech: "noun"
  },
{
    word: "demographic",
    definition: "relating to the structure of populations",
    russian: "демографический",
    example: "The product is targeted at a young demographic.",
    tip: "Remember: relating to the structure of populations",
    partOfSpeech: "adjective"
  },
{
    word: "demonstrable",
    definition: "clearly apparent or capable of being logically proved",
    russian: "доказуемый, очевидный, наглядный",
    example: "The benefits of the new system are demonstrable.",
    tip: "Remember: clearly apparent or capable of being logically proved",
    partOfSpeech: "adjective"
  },
{
    word: "demote",
    definition: "to give (someone) a lower rank or less senior position",
    russian: "понижать в должности, разжаловать",
    example: "He was demoted for his role in the scandal.",
    tip: "Remember: to give (someone) a lower rank or less senior position",
    partOfSpeech: "verb"
  },
{
    word: "demur",
    definition: "to raise doubts or objections or show reluctance",
    russian: "возражать, колебаться, сомневаться",
    example: "She demurred at the suggestion that she was responsible.",
    tip: "Remember: to raise doubts or objections or show reluctance",
    partOfSpeech: "verb"
  },
{
    word: "demure",
    definition: "reserved, modest, and shy",
    russian: "скромный, сдержанный, застенчивый",
    example: "She gave him a demure smile.",
    tip: "Remember: reserved, modest, and shy",
    partOfSpeech: "adjective"
  },
{
    word: "denigrate",
    definition: "to criticize unfairly; disparage",
    russian: "клеветать, чернить, порочить",
    example: "He sought to denigrate his opponent's achievements.",
    tip: "Remember: to criticize unfairly",
    partOfSpeech: "verb"
  },
{
    word: "denounce",
    definition: "to publicly declare to be wrong or evil",
    russian: "осуждать, порицать, разоблачать",
    example: "The organization denounced the government's actions.",
    tip: "Remember: to publicly declare to be wrong or evil",
    partOfSpeech: "verb"
  },
{
    word: "deplete",
    definition: "to use up the supply or resources of",
    russian: "истощать, исчерпывать",
    example: "Overfishing has depleted the local fish population.",
    tip: "Remember: to use up the supply or resources of",
    partOfSpeech: "verb"
  },
{
    word: "deplore",
    definition: "to feel or express strong disapproval of (something)",
    russian: "глубоко сожалеть, оплакивать, порицать",
    example: "We deplore all forms of violence.",
    tip: "Remember: to feel or express strong disapproval of (something)",
    partOfSpeech: "verb"
  },
{
    word: "deploy",
    definition: "to move (troops or equipment) into position for military action; to bring into effective action",
    russian: "развертывать, размещать, применять",
    example: "The company is ready to deploy its new software.",
    tip: "Remember: to move (troops or equipment) into position for military action",
    partOfSpeech: "verb"
  },
{
    word: "depravity",
    definition: "moral corruption; wickedness",
    russian: "порочность, развращенность, испорченность",
    example: "He was shocked by the depravity of the crime.",
    tip: "Remember: moral corruption",
    partOfSpeech: "noun"
  },
{
    word: "deprecate",
    definition: "to express disapproval of",
    russian: "возражать, протестовать, осуждать",
    example: "The author deprecated the use of clichés in writing.",
    tip: "Remember: to express disapproval of",
    partOfSpeech: "verb"
  },
{
    word: "depreciate",
    definition: "to diminish in value over a period of time",
    russian: "обесценивать(ся), амортизировать",
    example: "New cars depreciate in value very quickly.",
    tip: "Remember: to diminish in value over a period of time",
    partOfSpeech: "verb"
  },
{
    word: "deride",
    definition: "to express contempt for; ridicule",
    russian: "высмеивать, осмеивать, издеваться",
    example: "The critics derided his new play as simplistic.",
    tip: "Remember: to express contempt for",
    partOfSpeech: "verb"
  },
{
    word: "derivative",
    definition: "something that is based on another source; unoriginal",
    russian: "производный, неоригинальный",
    example: "Her style is highly derivative of other artists.",
    tip: "Remember: something that is based on another source",
    partOfSpeech: "noun"
  },
{
    word: "derive",
    definition: "to obtain something from (a specified source)",
    russian: "происходить, извлекать, получать",
    example: "Many English words derive from Latin.",
    tip: "Remember: to obtain something from (a specified source)",
    partOfSpeech: "verb"
  },
{
    word: "desecrate",
    definition: "to treat (a sacred place or thing) with violent disrespect",
    russian: "осквернять, порочить",
    example: "The vandals desecrated the ancient tomb.",
    tip: "Remember: to treat (a sacred place or thing) with violent disrespect",
    partOfSpeech: "verb"
  },
{
    word: "desiccate",
    definition: "to remove the moisture from (something); to dry out",
    russian: "высушивать, иссушать",
    example: "The intense heat desiccated the land.",
    tip: "Remember: to remove the moisture from (something)",
    partOfSpeech: "verb"
  },
{
    word: "desolate",
    definition: "(of a place) deserted of people and in a state of bleak emptiness",
    russian: "пустынный, безлюдный, заброшенный",
    example: "They found themselves in a desolate, windswept landscape.",
    tip: "Remember: (of a place) deserted of people and in a state of bleak emptiness",
    partOfSpeech: "noun"
  },
{
    word: "despondent",
    definition: "in low spirits from loss of hope or courage",
    russian: "унылый, подавленный, отчаявшийся",
    example: "She became despondent after losing her job.",
    tip: "Remember: in low spirits from loss of hope or courage",
    partOfSpeech: "adjective"
  },
{
    word: "despot",
    definition: "a ruler or other person who holds absolute power, typically one who exercises it cruelly",
    russian: "деспот, тиран",
    example: "The cruel despot ruled the country for decades.",
    tip: "Remember: a ruler or other person who holds absolute power, typically one who exercises it cruelly",
    partOfSpeech: "noun"
  },
{
    word: "destitute",
    definition: "without the basic necessities of life; penniless",
    russian: "нуждающийся, бедный, лишенный (средств)",
    example: "The famine left thousands of people destitute.",
    tip: "Remember: without the basic necessities of life",
    partOfSpeech: "adjective"
  },
{
    word: "desultory",
    definition: "lacking a plan, purpose, or enthusiasm; random",
    russian: "бессвязный, отрывочный, бесцельный",
    example: "He made a desultory attempt at cleaning his room.",
    tip: "Remember: lacking a plan, purpose, or enthusiasm",
    partOfSpeech: "adjective"
  },
{
    word: "detached",
    definition: "separate or disconnected; aloof and objective",
    russian: "отдельный, обособленный; беспристрастный",
    example: "He maintained a detached, professional attitude.",
    tip: "Remember: separate or disconnected",
    partOfSpeech: "adjective"
  },
{
    word: "deter",
    definition: "to discourage (someone) from doing something by instilling doubt or fear",
    russian: "удерживать, отпугивать, предотвращать",
    example: "The high price might deter potential buyers.",
    tip: "Remember: to discourage (someone) from doing something by instilling doubt or fear",
    partOfSpeech: "verb"
  },
{
    word: "deteriorate",
    definition: "to become progressively worse",
    russian: "ухудшаться, портиться, деградировать",
    example: "Her health began to deteriorate rapidly.",
    tip: "Remember: to become progressively worse",
    partOfSpeech: "verb"
  },
{
    word: "detrimental",
    definition: "tending to cause harm",
    russian: "вредный, пагубный, убыточный",
    example: "Lack of sleep can be detrimental to your performance.",
    tip: "Remember: tending to cause harm",
    partOfSpeech: "adjective"
  },
{
    word: "deviate",
    definition: "to depart from an established course or accepted standard",
    russian: "отклоняться, отступать, уклоняться",
    example: "He refused to deviate from his original plan.",
    tip: "Remember: to depart from an established course or accepted standard",
    partOfSpeech: "verb"
  },
{
    word: "devious",
    definition: "showing a skillful use of underhanded tactics to achieve goals",
    russian: "хитрый, коварный, окольный",
    example: "He used devious methods to get ahead in his career.",
    tip: "Remember: showing a skillful use of underhanded tactics to achieve goals",
    partOfSpeech: "noun"
  },
{
    word: "devoid",
    definition: "entirely lacking or free from",
    russian: "лишенный, свободный (от)",
    example: "His speech was devoid of any real emotion.",
    tip: "Remember: entirely lacking or free from",
    partOfSpeech: "adjective"
  },
{
    word: "devout",
    definition: "having or showing deep religious feeling or commitment",
    russian: "набожный, благочестивый, преданный",
    example: "She was a devout Catholic all her life.",
    tip: "Remember: having or showing deep religious feeling or commitment",
    partOfSpeech: "adjective"
  },
{
    word: "dexterity",
    definition: "skill in performing tasks, especially with the hands",
    russian: "ловкость, проворство, сноровка",
    example: "The artisan showed great dexterity in his work.",
    tip: "Remember: skill in performing tasks, especially with the hands",
    partOfSpeech: "noun"
  },
{
    word: "diaphanous",
    definition: "(especially of fabric) light, delicate, and translucent",
    russian: "прозрачный, просвечивающий, воздушный",
    example: "She wore a diaphanous silk scarf.",
    tip: "Remember: (especially of fabric) light, delicate, and translucent",
    partOfSpeech: "adjective"
  },
{
    word: "diatribe",
    definition: "a forceful and bitter verbal attack against someone or something",
    russian: "обличительная речь, резкая критика, диатриба",
    example: "He launched into a long diatribe against the government.",
    tip: "Remember: a forceful and bitter verbal attack against someone or something",
    partOfSpeech: "adjective"
  },
{
    word: "dichotomy",
    definition: "a division or contrast between two things that are represented as being opposed",
    russian: "дихотомия, резкое различие",
    example: "There is often a dichotomy between theory and practice.",
    tip: "Remember: a division or contrast between two things that are represented as being opposed",
    partOfSpeech: "noun"
  },
{
    word: "didactic",
    definition: "intended to teach, particularly in having moral instruction",
    russian: "дидактический, поучительный, назидательный",
    example: "The play was overly didactic, with a heavy-handed message.",
    tip: "Remember: intended to teach, particularly in having moral instruction",
    partOfSpeech: "adjective"
  },
{
    word: "diffident",
    definition: "modest or shy because of a lack of self-confidence",
    russian: "неуверенный в себе, робкий, застенчивый",
    example: "He was diffident about expressing his opinions in public.",
    tip: "Remember: modest or shy because of a lack of self-confidence",
    partOfSpeech: "adjective"
  },
{
    word: "diffuse",
    definition: "spread out over a large area; not concentrated",
    russian: "рассеянный, расплывчатый; распространять",
    example: "The article was diffuse and lacked a clear focus.",
    tip: "Remember: spread out over a large area",
    partOfSpeech: "adjective"
  },
{
    word: "digress",
    definition: "to leave the main subject temporarily in speech or writing",
    russian: "отклоняться, отступать (от темы)",
    example: "The professor would often digress during his lectures.",
    tip: "Remember: to leave the main subject temporarily in speech or writing",
    partOfSpeech: "verb"
  },
{
    word: "dilemma",
    definition: "a situation in which a difficult choice has to be made",
    russian: "дилемма, затруднительное положение",
    example: "She faced the dilemma of choosing between her career and her family.",
    tip: "Remember: a situation in which a difficult choice has to be made",
    partOfSpeech: "adjective"
  },
{
    word: "dilettante",
    definition: "a person who cultivates an area of interest without real commitment",
    russian: "дилетант, любитель",
    example: "He was a dilettante, dabbling in art but never mastering it.",
    tip: "Remember: a person who cultivates an area of interest without real commitment",
    partOfSpeech: "noun"
  },
{
    word: "diligent",
    definition: "having or showing care and conscientiousness in one's work",
    russian: "прилежный, усердный, старательный",
    example: "The diligent student earned top marks.",
    tip: "Remember: having or showing care and conscientiousness in one's work",
    partOfSpeech: "adjective"
  },
{
    word: "diminish",
    definition: "to make or become less",
    russian: "уменьшать(ся), ослаблять",
    example: "The public's trust in the government has diminished.",
    tip: "Remember: to make or become less",
    partOfSpeech: "verb"
  },
{
    word: "din",
    definition: "a loud, unpleasant, and prolonged noise",
    russian: "шум, грохот, гул",
    example: "It was hard to hear over the din of the construction.",
    tip: "Remember: a loud, unpleasant, and prolonged noise",
    partOfSpeech: "adjective"
  },
{
    word: "dirge",
    definition: "a lament for the dead, especially one forming part of a funeral rite",
    russian: "погребальная песнь, панихида",
    example: "The mournful dirge played as the coffin was lowered.",
    tip: "Remember: a lament for the dead, especially one forming part of a funeral rite",
    partOfSpeech: "adjective"
  },
{
    word: "disabuse",
    definition: "to persuade (someone) that an idea or belief is mistaken",
    russian: "выводить из заблуждения, разуверять",
    example: "He sought to disabuse her of her naive beliefs.",
    tip: "Remember: to persuade (someone) that an idea or belief is mistaken",
    partOfSpeech: "verb"
  },
{
    word: "disaffected",
    definition: "dissatisfied with the people in authority and no longer willing to support them",
    russian: "недовольный, разочарованный, нелояльный",
    example: "The disaffected youth felt ignored by the politicians.",
    tip: "Remember: dissatisfied with the people in authority and no longer willing to support them",
    partOfSpeech: "adjective"
  },
{
    word: "disavow",
    definition: "to deny any responsibility or support for",
    russian: "отрицать, отрекаться, не признавать",
    example: "He disavowed any knowledge of the secret deal.",
    tip: "Remember: to deny any responsibility or support for",
    partOfSpeech: "verb"
  },
{
    word: "discern",
    definition: "to perceive or recognize (something)",
    russian: "различать, распознавать, постигать",
    example: "It was difficult to discern the truth in his statement.",
    tip: "Remember: to perceive or recognize (something)",
    partOfSpeech: "verb"
  },
{
    word: "discomfit",
    definition: "to make (someone) feel uneasy or embarrassed",
    russian: "смущать, приводить в замешательство, расстраивать",
    example: "He was discomfited by the unexpected question.",
    tip: "Remember: to make (someone) feel uneasy or embarrassed",
    partOfSpeech: "verb"
  },
{
    word: "disconcert",
    definition: "to disturb the composure of; unsettle",
    russian: "приводить в замешательство, смущать, расстраивать",
    example: "Her sudden change in tone disconcerted him.",
    tip: "Remember: to disturb the composure of",
    partOfSpeech: "verb"
  },
{
    word: "discordant",
    definition: "disagreeing or incongruous; (of sounds) harsh and jarring",
    russian: "несогласный, противоречивый; неблагозвучный",
    example: "The discordant opinions within the group led to no decision.",
    tip: "Remember: disagreeing or incongruous",
    partOfSpeech: "adjective"
  },
{
    word: "discourse",
    definition: "written or spoken communication or debate",
    russian: "рассуждение, лекция, речь",
    example: "The book is a scholarly discourse on 18th-century art.",
    tip: "Remember: written or spoken communication or debate",
    partOfSpeech: "adjective"
  },
{
    word: "discredit",
    definition: "to harm the good reputation of; to cause to be disbelieved",
    russian: "дискредитировать, подрывать доверие",
    example: "The new evidence discredited the witness's testimony.",
    tip: "Remember: to harm the good reputation of",
    partOfSpeech: "verb"
  },
{
    word: "discreet",
    definition: "careful and circumspect in one's speech or actions",
    russian: "сдержанный, тактичный, благоразумный",
    example: "He was very discreet about his involvement in the project.",
    tip: "Remember: careful and circumspect in one's speech or actions",
    partOfSpeech: "noun"
  },
{
    word: "discrete",
    definition: "individually separate and distinct",
    russian: "дискретный, отдельный, прерывистый",
    example: "The project was broken down into several discrete tasks.",
    tip: "Remember: individually separate and distinct",
    partOfSpeech: "adjective"
  },
{
    word: "discretion",
    definition: "the quality of behaving or speaking to avoid offense; the freedom to decide",
    russian: "осмотрительность, усмотрение, свобода действий",
    example: "The penalty is left to the discretion of the judge.",
    tip: "Remember: the quality of behaving or speaking to avoid offense",
    partOfSpeech: "adjective"
  },
{
    word: "discriminating",
    definition: "having or showing refined taste or good judgment",
    russian: "разборчивый, умеющий ценить, проницательный",
    example: "She has a discriminating palate for fine food.",
    tip: "Remember: having or showing refined taste or good judgment",
    partOfSpeech: "adjective"
  },
{
    word: "discursive",
    definition: "digressing from subject to subject; rambling",
    russian: "бессвязный, отрывочный, дискурсивный",
    example: "His writing style is discursive and hard to follow.",
    tip: "Remember: digressing from subject to subject",
    partOfSpeech: "adjective"
  },
{
    word: "disdain",
    definition: "the feeling that someone or something is unworthy of one's respect",
    russian: "презрение, пренебрежение; презирать",
    example: "He looked at the poorly written essay with disdain.",
    tip: "Remember: the feeling that someone or something is unworthy of one's respect",
    partOfSpeech: "noun"
  },
{
    word: "disenfranchise",
    definition: "to deprive (someone) of the right to vote",
    russian: "лишать гражданских прав (особенно права голоса)",
    example: "New laws threatened to disenfranchise minority voters.",
    tip: "Remember: to deprive (someone) of the right to vote",
    partOfSpeech: "verb"
  },
{
    word: "disgruntled",
    definition: "angry or dissatisfied",
    russian: "недовольный, раздраженный, ворчливый",
    example: "The disgruntled employees staged a walkout.",
    tip: "Remember: angry or dissatisfied",
    partOfSpeech: "adjective"
  },
{
    word: "disingenuous",
    definition: "not candid or sincere, typically by pretending to know less",
    russian: "неискренний, лицемерный, хитрый",
    example: "Her 'innocent' question was actually quite disingenuous.",
    tip: "Remember: not candid or sincere, typically by pretending to know less",
    partOfSpeech: "adjective"
  },
{
    word: "disinterested",
    definition: "not influenced by considerations of personal advantage; impartial",
    russian: "бескорыстный, незаинтересованный, беспристрастный",
    example: "We need a disinterested third party to mediate the dispute.",
    tip: "Remember: not influenced by considerations of personal advantage",
    partOfSpeech: "noun"
  },
{
    word: "dismal",
    definition: "depressing; dreary; (of a person) gloomy",
    russian: "мрачный, унылый, гнетущий",
    example: "The team's performance has been dismal all season.",
    tip: "Remember: depressing",
    partOfSpeech: "noun"
  },
{
    word: "dismantle",
    definition: "to take (a machine or structure) to pieces",
    russian: "демонтировать, разбирать",
    example: "They had to dismantle the old bridge.",
    tip: "Remember: to take (a machine or structure) to pieces",
    partOfSpeech: "verb"
  },
{
    word: "dismay",
    definition: "concern and distress caused by something unexpected",
    russian: "смятение, тревога, испуг; устрашать",
    example: "She looked at the high bill with dismay.",
    tip: "Remember: concern and distress caused by something unexpected",
    partOfSpeech: "noun"
  },
{
    word: "disparage",
    definition: "to regard or represent as being of little worth",
    russian: "принижать, умалять, пренебрежительно отзываться",
    example: "He tends to disparage the efforts of his competitors.",
    tip: "Remember: to regard or represent as being of little worth",
    partOfSpeech: "verb"
  },
{
    word: "disparate",
    definition: "essentially different in kind; not allowing comparison",
    russian: "несравнимый, коренным образом отличный",
    example: "The study brought together data from disparate sources.",
    tip: "Remember: essentially different in kind",
    partOfSpeech: "verb"
  },
{
    word: "dispassionate",
    definition: "not influenced by strong emotion, and so able to be rational",
    russian: "бесстрастный, хладнокровный, беспристрастный",
    example: "The judge delivered a dispassionate review of the evidence.",
    tip: "Remember: not influenced by strong emotion, and so able to be rational",
    partOfSpeech: "verb"
  },
{
    word: "dispatch",
    definition: "to send off to a destination or for a purpose; speed and efficiency",
    russian: "отправка, депеша; отправлять",
    example: "The goods were dispatched from the warehouse.",
    tip: "Remember: to send off to a destination or for a purpose",
    partOfSpeech: "verb"
  },
{
    word: "dispel",
    definition: "to make (a doubt, feeling, or belief) disappear",
    russian: "разгонять, развеивать (сомнения, слухи)",
    example: "The CEO's speech helped to dispel rumors of bankruptcy.",
    tip: "Remember: to make (a doubt, feeling, or belief) disappear",
    partOfSpeech: "verb"
  },
{
    word: "dispense",
    definition: "to distribute or provide (a service or information) to people",
    russian: "распределять, раздавать, обходиться (без)",
    example: "The pharmacist dispensed the medication.",
    tip: "Remember: to distribute or provide (a service or information) to people",
    partOfSpeech: "verb"
  },
{
    word: "disperse",
    definition: "to distribute or spread over a wide area",
    russian: "рассеивать(ся), разгонять",
    example: "The police used tear gas to disperse the crowd.",
    tip: "Remember: to distribute or spread over a wide area",
    partOfSpeech: "verb"
  },
{
    word: "disputatious",
    definition: "fond of or causing heated arguments",
    russian: "любящий спорить, сварливый, спорный",
    example: "He was a difficult and disputatious colleague.",
    tip: "Remember: fond of or causing heated arguments",
    partOfSpeech: "adjective"
  },
{
    word: "disquiet",
    definition: "a feeling of anxiety or worry",
    russian: "беспокойство, тревога",
    example: "There was public disquiet about the new policy.",
    tip: "Remember: a feeling of anxiety or worry",
    partOfSpeech: "adjective"
  },
{
    word: "dissemble",
    definition: "to conceal one's true motives, feelings, or beliefs",
    russian: "лицемерить, притворяться, скрывать",
    example: "She dissembled her true intentions behind a smile.",
    tip: "Remember: to conceal one's true motives, feelings, or beliefs",
    partOfSpeech: "verb"
  },
{
    word: "disseminate",
    definition: "to spread (something, especially information) widely",
    russian: "распространять, рассеивать (информацию, идеи)",
    example: "The organization's goal is to disseminate information about climate change.",
    tip: "Remember: to spread (something, especially information) widely",
    partOfSpeech: "verb"
  },
{
    word: "dissent",
    definition: "to hold or express opinions that are at variance with those commonly held",
    russian: "разногласие, инакомыслие; расходиться во мнениях",
    example: "Two judges dissented from the majority opinion.",
    tip: "Remember: to hold or express opinions that are at variance with those commonly held",
    partOfSpeech: "verb"
  },
{
    word: "dissident",
    definition: "a person who opposes official policy, especially that of an authoritarian state",
    russian: "диссидент, инакомыслящий",
    example: "The dissident writer was arrested for his political views.",
    tip: "Remember: a person who opposes official policy, especially that of an authoritarian state",
    partOfSpeech: "noun"
  },
{
    word: "dissipate",
    definition: "to disperse or scatter; to squander or fritter away",
    russian: "рассеивать(ся), расточать, проматывать",
    example: "He dissipated his inheritance on gambling.",
    tip: "Remember: to disperse or scatter",
    partOfSpeech: "verb"
  },
{
    word: "dissolution",
    definition: "the closing down or dismissal of an assembly; disintegration",
    russian: "роспуск, расторжение, распад",
    example: "The dissolution of the partnership was amicable.",
    tip: "Remember: the closing down or dismissal of an assembly",
    partOfSpeech: "noun"
  },
{
    word: "dissonance",
    definition: "a lack of harmony or agreement; a tension from conflicting elements",
    russian: "диссонанс, разногласие, неблагозвучие",
    example: "Cognitive dissonance is the stress from holding contradictory beliefs.",
    tip: "Remember: a lack of harmony or agreement",
    partOfSpeech: "noun"
  },
{
    word: "dissuade",
    definition: "to persuade (someone) not to take a particular course of action",
    russian: "отговаривать, разубеждать",
    example: "His parents tried to dissuade him from dropping out of school.",
    tip: "Remember: to persuade (someone) not to take a particular course of action",
    partOfSpeech: "verb"
  },
{
    word: "distant",
    definition: "far away in space or time; aloof or reserved",
    russian: "далекий, отдаленный; сдержанный",
    example: "After the argument, he became cold and distant.",
    tip: "Remember: far away in space or time",
    partOfSpeech: "adjective"
  },
{
    word: "distend",
    definition: "to swell or cause to swell by pressure from inside",
    russian: "надувать(ся), расширять(ся), раздуваться",
    example: "The starving child had a distended belly.",
    tip: "Remember: to swell or cause to swell by pressure from inside",
    partOfSpeech: "verb"
  },
{
    word: "distill",
    definition: "to extract the essential meaning or most important aspects of",
    russian: "дистиллировать, извлекать суть, очищать",
    example: "She distilled the complex report into a one-page summary.",
    tip: "Remember: to extract the essential meaning or most important aspects of",
    partOfSpeech: "verb"
  },
{
    word: "distraught",
    definition: "deeply upset and agitated",
    russian: "потерявший рассудок (от горя), обезумевший",
    example: "The distraught parents searched for their missing child.",
    tip: "Remember: deeply upset and agitated",
    partOfSpeech: "adjective"
  },
{
    word: "diverge",
    definition: "to separate from another route and go in a different direction",
    russian: "расходиться, отклоняться, отступать",
    example: "The two roads diverge after the village.",
    tip: "Remember: to separate from another route and go in a different direction",
    partOfSpeech: "verb"
  },
{
    word: "diverse",
    definition: "showing a great deal of variety; very different",
    russian: "разнообразный, различный",
    example: "The city has a culturally diverse population.",
    tip: "Remember: showing a great deal of variety",
    partOfSpeech: "adjective"
  },
{
    word: "divest",
    definition: "to deprive (someone) of power, rights, or possessions; to rid oneself of",
    russian: "лишать, отчуждать, избавляться от",
    example: "The company decided to divest its shares in the subsidiary.",
    tip: "Remember: to deprive (someone) of power, rights, or possessions",
    partOfSpeech: "verb"
  },
{
    word: "divulge",
    definition: "to make known (private or sensitive information)",
    russian: "разглашать, раскрывать, обнародовать",
    example: "The journalist refused to divulge her sources.",
    tip: "Remember: to make known (private or sensitive information)",
    partOfSpeech: "verb"
  },
{
    word: "docile",
    definition: "ready to accept control or instruction; submissive",
    russian: "послушный, покорный, смирный",
    example: "The dog was docile and easy to train.",
    tip: "Remember: ready to accept control or instruction",
    partOfSpeech: "adjective"
  },
{
    word: "doctrinaire",
    definition: "seeking to impose a doctrine in all circumstances without regard to practical considerations",
    russian: "доктринерский, догматический, фанатичный",
    example: "His doctrinaire approach to economics ignored the real-world consequences.",
    tip: "Remember: seeking to impose a doctrine in all circumstances without regard to practical considerations",
    partOfSpeech: "adjective"
  },
{
    word: "doctrine",
    definition: "a belief or set of beliefs held and taught by a church, political party, or other group",
    russian: "доктрина, учение, догма",
    example: "The party's official doctrine was outlined in its manifesto.",
    tip: "Remember: a belief or set of beliefs held and taught by a church, political party, or other group",
    partOfSpeech: "adjective"
  },
{
    word: "document",
    definition: "to record (something) in written, photographic, or other form",
    russian: "документировать, подтверждать документами",
    example: "The film documents the lives of immigrant families.",
    tip: "Remember: to record (something) in written, photographic, or other form",
    partOfSpeech: "verb"
  },
{
    word: "dogmatic",
    definition: "inclined to lay down principles as incontrovertibly true",
    russian: "догматический, категоричный, не терпящий возражений",
    example: "He was dogmatic in his assertion that he was right.",
    tip: "Remember: inclined to lay down principles as incontrovertibly true",
    partOfSpeech: "adjective"
  },
{
    word: "doleful",
    definition: "expressing sorrow; mournful",
    russian: "печальный, скорбный, унылый",
    example: "She had a doleful expression on her face.",
    tip: "Remember: expressing sorrow",
    partOfSpeech: "adjective"
  },
{
    word: "dominant",
    definition: "most important, powerful, or influential",
    russian: "доминирующий, господствующий, преобладающий",
    example: "The company has a dominant position in the market.",
    tip: "Remember: most important, powerful, or influential",
    partOfSpeech: "adjective"
  },
{
    word: "dormant",
    definition: "(of an animal) having normal physical functions suspended, as in sleep",
    russian: "спящий, дремлющий, бездействующий",
    example: "The volcano has been dormant for hundreds of years.",
    tip: "Remember: (of an animal) having normal physical functions suspended, as in sleep",
    partOfSpeech: "adjective"
  },
{
    word: "dour",
    definition: "severe, stern, or gloomy in manner or appearance",
    russian: "суровый, непреклонный, угрюмый",
    example: "The dour old man rarely smiled.",
    tip: "Remember: severe, stern, or gloomy in manner or appearance",
    partOfSpeech: "adjective"
  },
{
    word: "doyen",
    definition: "the most respected or prominent person in a particular field",
    russian: "старейшина, дуайен, ветеран",
    example: "He is the doyen of American literature.",
    tip: "Remember: the most respected or prominent person in a particular field",
    partOfSpeech: "noun"
  },
{
    word: "drone",
    definition: "to make a continuous low humming sound; to speak tediously",
    russian: "гудеть, жужжать; говорить монотонно",
    example: "The professor droned on about a boring topic.",
    tip: "Remember: to make a continuous low humming sound",
    partOfSpeech: "verb"
  },
{
    word: "droll",
    definition: "curious or unusual in a way that provokes dry amusement",
    russian: "забавный, смешной, чудной",
    example: "He entertained us with his droll stories.",
    tip: "Remember: curious or unusual in a way that provokes dry amusement",
    partOfSpeech: "adjective"
  },
{
    word: "dubious",
    definition: "hesitating or doubting; not to be relied upon",
    russian: "сомнительный, подозрительный, неоднозначный",
    example: "I am dubious about the chances of success.",
    tip: "Remember: hesitating or doubting",
    partOfSpeech: "adjective"
  },
{
    word: "dupe",
    definition: "to deceive; trick",
    russian: "обманывать, одурачивать; жертва обмана",
    example: "He was duped into buying a fake watch.",
    tip: "Remember: to deceive",
    partOfSpeech: "verb"
  },
{
    word: "duplicity",
    definition: "deceitfulness; double-dealing",
    russian: "двуличие, лживость, двусмысленность",
    example: "He was accused of duplicity in his business dealings.",
    tip: "Remember: deceitfulness",
    partOfSpeech: "noun"
  },
{
    word: "durable",
    definition: "able to withstand wear, pressure, or damage; hard-wearing",
    russian: "прочный, долговечный, надежный",
    example: "The material is durable and easy to clean.",
    tip: "Remember: able to withstand wear, pressure, or damage",
    partOfSpeech: "adjective"
  },
{
    word: "dynamic",
    definition: "characterized by constant change, activity, or progress",
    russian: "динамичный, энергичный, активный",
    example: "She is a dynamic leader with a clear vision.",
    tip: "Remember: characterized by constant change, activity, or progress",
    partOfSpeech: "adjective"
  },
{
    word: "ebullient",
    definition: "cheerful and full of energy",
    russian: "кипящий, бьющий ключом, восторженный",
    example: "She was in an ebullient mood after her promotion.",
    tip: "Remember: cheerful and full of energy",
    partOfSpeech: "adjective"
  },
{
    word: "eccentric",
    definition: "(of a person or their behavior) unconventional and slightly strange",
    russian: "эксцентричный, чудаковатый",
    example: "The eccentric billionaire lived in seclusion.",
    tip: "Remember: (of a person or their behavior) unconventional and slightly strange",
    partOfSpeech: "noun"
  },
{
    word: "eclectic",
    definition: "deriving ideas, style, or taste from a broad range of sources",
    russian: "эклектичный, разносторонний, отбирающий",
    example: "Her musical taste is eclectic, ranging from classical to hip-hop.",
    tip: "Remember: deriving ideas, style, or taste from a broad range of sources",
    partOfSpeech: "adjective"
  },
{
    word: "economy",
    definition: "careful management of resources; use of the minimum amount",
    russian: "экономика, экономия, бережливость",
    example: "The essay was praised for its economy of language.",
    tip: "Remember: careful management of resources",
    partOfSpeech: "adjective"
  },
{
    word: "ecstasy",
    definition: "an overwhelming feeling of great happiness or joyful excitement",
    russian: "экстаз, восторг, исступление",
    example: "They were in ecstasy after winning the championship.",
    tip: "Remember: an overwhelming feeling of great happiness or joyful excitement",
    partOfSpeech: "adjective"
  },
{
    word: "edict",
    definition: "an official order or proclamation issued by a person in authority",
    russian: "указ, эдикт, распоряжение",
    example: "The government issued an edict banning public gatherings.",
    tip: "Remember: an official order or proclamation issued by a person in authority",
    partOfSpeech: "adjective"
  },
{
    word: "edify",
    definition: "to instruct or improve (someone) morally or intellectually",
    russian: "наставлять, поучать, просвещать",
    example: "The book was intended to edify its readers.",
    tip: "Remember: to instruct or improve (someone) morally or intellectually",
    partOfSpeech: "verb"
  },
{
    word: "efface",
    definition: "to erase (a mark) from a surface; to make oneself inconspicuous",
    russian: "стирать, изглаживать, вычеркивать",
    example: "He tried to efface the memory of that terrible day.",
    tip: "Remember: to erase (a mark) from a surface",
    partOfSpeech: "verb"
  },
{
    word: "effervescent",
    definition: "giving off bubbles; fizzy; vivacious and enthusiastic",
    russian: "шипучий, игристый; искрометный, полный энтузиазма",
    example: "Her effervescent personality made her popular.",
    tip: "Remember: giving off bubbles",
    partOfSpeech: "adjective"
  },
{
    word: "efficacious",
    definition: "effective; successful in producing a desired result",
    russian: "эффективный, действенный, результативный",
    example: "The new drug proved to be efficacious in treating the disease.",
    tip: "Remember: effective",
    partOfSpeech: "adjective"
  },
{
    word: "efficacy",
    definition: "the ability to produce a desired or intended result",
    russian: "эффективность, действенность, сила",
    example: "The efficacy of the vaccine is still being tested.",
    tip: "Remember: the ability to produce a desired or intended result",
    partOfSpeech: "adjective"
  },
{
    word: "effrontery",
    definition: "insolent or impertinent behavior",
    russian: "наглость, бесстыдство, дерзость",
    example: "He had the effrontery to ask for a raise after only one week.",
    tip: "Remember: insolent or impertinent behavior",
    partOfSpeech: "adjective"
  },
{
    word: "effusive",
    definition: "expressing feelings of gratitude or pleasure in an unrestrained way",
    russian: "несдержанный, бурный, экспансивный",
    example: "She greeted him with effusive praise.",
    tip: "Remember: expressing feelings of gratitude or pleasure in an unrestrained way",
    partOfSpeech: "adjective"
  },
{
    word: "egalitarian",
    definition: "believing in or based on the principle that all people are equal",
    russian: "эгалитарный, уравнительный",
    example: "The country is moving towards a more egalitarian society.",
    tip: "Remember: believing in or based on the principle that all people are equal",
    partOfSpeech: "adjective"
  },
{
    word: "egregious",
    definition: "outstandingly bad; shocking",
    russian: "вопиющий, отъявленный, ужасный",
    example: "It was an egregious error of judgment.",
    tip: "Remember: outstandingly bad",
    partOfSpeech: "adjective"
  },
{
    word: "elaborate",
    definition: "involving many carefully arranged parts; detailed and complicated",
    russian: "тщательно разработанный, сложный; разрабатывать",
    example: "She gave an elaborate explanation for her absence.",
    tip: "Remember: involving many carefully arranged parts",
    partOfSpeech: "verb"
  },
{
    word: "elated",
    definition: "ecstatically happy",
    russian: "ликующий, воодушевленный, в восторге",
    example: "He was elated by the good news.",
    tip: "Remember: ecstatically happy",
    partOfSpeech: "adjective"
  },
{
    word: "elegy",
    definition: "a poem of serious reflection, typically a lament for the dead",
    russian: "элегия, жалоба",
    example: "The poet wrote an elegy for his deceased friend.",
    tip: "Remember: a poem of serious reflection, typically a lament for the dead",
    partOfSpeech: "adjective"
  },
{
    word: "elicit",
    definition: "to evoke or draw out (a response, answer, or fact) from someone",
    russian: "вызывать, выявлять, извлекать",
    example: "The question was intended to elicit a thoughtful response.",
    tip: "Remember: to evoke or draw out (a response, answer, or fact) from someone",
    partOfSpeech: "verb"
  },
{
    word: "eloquent",
    definition: "fluent or persuasive in speaking or writing",
    russian: "красноречивый, выразительный",
    example: "She delivered an eloquent speech that moved the audience.",
    tip: "Remember: fluent or persuasive in speaking or writing",
    partOfSpeech: "adjective"
  },
{
    word: "elucidate",
    definition: "to make (something) clear; explain",
    russian: "разъяснять, растолковывать, прояснять",
    example: "The professor used a diagram to elucidate the complex theory.",
    tip: "Remember: to make (something) clear",
    partOfSpeech: "verb"
  },
{
    word: "elude",
    definition: "to evade or escape from (a danger, enemy, or pursuer), typically in a skillful way",
    russian: "ускользать, уклоняться, избегать",
    example: "The answer to the mystery continues to elude the detectives.",
    tip: "Remember: to evade or escape from (a danger, enemy, or pursuer), typically in a skillful way",
    partOfSpeech: "verb"
  },
{
    word: "elusive",
    definition: "difficult to find, catch, or achieve",
    russian: "неуловимый, ускользающий, уклончивый",
    example: "The elusive concept of 'happiness' is hard to define.",
    tip: "Remember: difficult to find, catch, or achieve",
    partOfSpeech: "adjective"
  },
{
    word: "emaciated",
    definition: "abnormally thin or weak, especially because of illness or a lack of food",
    russian: "истощенный, исхудавший",
    example: "The emaciated stray dog was rescued from the streets.",
    tip: "Remember: abnormally thin or weak, especially because of illness or a lack of food",
    partOfSpeech: "adjective"
  },
{
    word: "embellish",
    definition: "to make (something) more attractive by the addition of decorative details",
    russian: "приукрашивать, украшать",
    example: "He tended to embellish his stories to make them more exciting.",
    tip: "Remember: to make (something) more attractive by the addition of decorative details",
    partOfSpeech: "verb"
  },
{
    word: "embezzle",
    definition: "to steal or misappropriate (money placed in one's trust)",
    russian: "присваивать, растрачивать (чужие деньги)",
    example: "The accountant was caught embezzling funds from the company.",
    tip: "Remember: to steal or misappropriate (money placed in one's trust)",
    partOfSpeech: "verb"
  },
{
    word: "embody",
    definition: "to be an expression of or give a tangible form to (an idea or quality)",
    russian: "воплощать, олицетворять",
    example: "She embodies the ideals of honesty and integrity.",
    tip: "Remember: to be an expression of or give a tangible form to (an idea or quality)",
    partOfSpeech: "verb"
  },
{
    word: "emerge",
    definition: "to move out of or away from something and come into view",
    russian: "появляться, возникать, всплывать",
    example: "New evidence has emerged from the investigation.",
    tip: "Remember: to move out of or away from something and come into view",
    partOfSpeech: "verb"
  },
{
    word: "eminent",
    definition: "(of a person) famous and respected within a particular sphere",
    russian: "выдающийся, видный, знаменитый",
    example: "He is an eminent scholar of ancient history.",
    tip: "Remember: (of a person) famous and respected within a particular sphere",
    partOfSpeech: "noun"
  },
{
    word: "emollient",
    definition: "having the quality of softening or soothing the skin; attempting to avoid confrontation",
    russian: "смягчающий, успокаивающий",
    example: "He used an emollient tone to calm the angry customer.",
    tip: "Remember: having the quality of softening or soothing the skin",
    partOfSpeech: "adjective"
  },
{
    word: "empathy",
    definition: "the ability to understand and share the feelings of another",
    russian: "эмпатия, сопереживание, сочувствие",
    example: "She showed great empathy towards the suffering of others.",
    tip: "Remember: the ability to understand and share the feelings of another",
    partOfSpeech: "adjective"
  },
{
    word: "empirical",
    definition: "based on, concerned with, or verifiable by observation or experience",
    russian: "эмпирический, основанный на опыте",
    example: "The study was based on empirical evidence, not just theory.",
    tip: "Remember: based on, concerned with, or verifiable by observation or experience",
    partOfSpeech: "adjective"
  },
{
    word: "emulate",
    definition: "to match or surpass (a person or achievement), typically by imitation",
    russian: "эмулировать, подражать, соревноваться",
    example: "Many young artists try to emulate the style of the masters.",
    tip: "Remember: to match or surpass (a person or achievement), typically by imitation",
    partOfSpeech: "verb"
  },
{
    word: "encompass",
    definition: "to surround and have or hold within; to include comprehensively",
    russian: "охватывать, заключать в себе, содержать",
    example: "The new course will encompass a wide range of topics.",
    tip: "Remember: to surround and have or hold within",
    partOfSpeech: "verb"
  },
{
    word: "encumber",
    definition: "to restrict or burden (someone or something) in such a way that free action is difficult",
    russian: "обременить, отягощать, затруднять",
    example: "She was encumbered with heavy luggage.",
    tip: "Remember: to restrict or burden (someone or something) in such a way that free action is difficult",
    partOfSpeech: "verb"
  },
{
    word: "endorse",
    definition: "to declare one's public approval or support of",
    russian: "одобрять, поддерживать, индоссировать",
    example: "The newspaper endorsed the candidate for mayor.",
    tip: "Remember: to declare one's public approval or support of",
    partOfSpeech: "verb"
  },
{
    word: "enervate",
    definition: "to cause (someone) to feel drained of energy or vitality; weaken",
    russian: "ослаблять, лишать сил, обессиливать",
    example: "The intense heat enervated the hikers.",
    tip: "Remember: to cause (someone) to feel drained of energy or vitality",
    partOfSpeech: "verb"
  },
{
    word: "enfranchise",
    definition: "to give (someone) the right to vote",
    russian: "предоставлять право голоса, давать избирательные права",
    example: "Women were enfranchised in the United States in 1920.",
    tip: "Remember: to give (someone) the right to vote",
    partOfSpeech: "verb"
  },
{
    word: "engender",
    definition: "to cause or give rise to (a feeling, situation, or condition)",
    russian: "порождать, вызывать, возбуждать",
    example: "The new policy engendered bitter controversy.",
    tip: "Remember: to cause or give rise to (a feeling, situation, or condition)",
    partOfSpeech: "verb"
  },
{
    word: "engross",
    definition: "to absorb all the attention or interest of",
    russian: "поглощать, завладевать (вниманием)",
    example: "The book was so engrossing that she read it in one night.",
    tip: "Remember: to absorb all the attention or interest of",
    partOfSpeech: "verb"
  },
{
    word: "enigma",
    definition: "a person or thing that is mysterious, puzzling, or difficult to understand",
    russian: "загадка, головоломка, тайна",
    example: "The politician's true motives remain an enigma.",
    tip: "Remember: a person or thing that is mysterious, puzzling, or difficult to understand",
    partOfSpeech: "noun"
  },
{
    word: "enmity",
    definition: "the state or feeling of being actively opposed or hostile to someone",
    russian: "вражда, неприязнь, враждебность",
    example: "There was a long history of enmity between the two families.",
    tip: "Remember: the state or feeling of being actively opposed or hostile to someone",
    partOfSpeech: "noun"
  },
{
    word: "ennui",
    definition: "a feeling of listlessness and dissatisfaction arising from a lack of occupation",
    russian: "тоска, скука, апатия",
    example: "He succumbed to a feeling of ennui after weeks of unemployment.",
    tip: "Remember: a feeling of listlessness and dissatisfaction arising from a lack of occupation",
    partOfSpeech: "noun"
  },
{
    word: "enormity",
    definition: "the great or extreme scale of something perceived as bad; a grave crime",
    russian: "чудовищность, громадность, гнусность",
    example: "The public was shocked by the enormity of the crime.",
    tip: "Remember: the great or extreme scale of something perceived as bad",
    partOfSpeech: "noun"
  },
{
    word: "ensue",
    definition: "to happen or occur afterward or as a result",
    russian: "следовать, вытекать, происходить (в результате)",
    example: "A heated argument ensued after his controversial statement.",
    tip: "Remember: to happen or occur afterward or as a result",
    partOfSpeech: "verb"
  },
{
    word: "entail",
    definition: "to involve (something) as a necessary or inevitable part or consequence",
    russian: "влечь за собой, вызывать, требовать",
    example: "The project will entail considerable expense.",
    tip: "Remember: to involve (something) as a necessary or inevitable part or consequence",
    partOfSpeech: "verb"
  },
{
    word: "enthrall",
    definition: "to capture the fascinated attention of",
    russian: "очаровывать, увлекать, порабощать",
    example: "The magician's performance enthralled the audience.",
    tip: "Remember: to capture the fascinated attention of",
    partOfSpeech: "verb"
  },
{
    word: "entrenched",
    definition: "firmly established and difficult or unlikely to change",
    russian: "укоренившийся, прочно обосновавшийся",
    example: "The organization's culture is deeply entrenched.",
    tip: "Remember: firmly established and difficult or unlikely to change",
    partOfSpeech: "adjective"
  },
{
    word: "entrepreneur",
    definition: "a person who sets up a business, taking on financial risks",
    russian: "предприниматель, бизнесмен",
    example: "The young entrepreneur founded a successful tech startup.",
    tip: "Remember: a person who sets up a business, taking on financial risks",
    partOfSpeech: "noun"
  },
{
    word: "enumerate",
    definition: "to mention (a number of things) one by one",
    russian: "перечислять, подсчитывать",
    example: "She enumerated the reasons for her decision.",
    tip: "Remember: to mention (a number of things) one by one",
    partOfSpeech: "verb"
  },
{
    word: "ephemeral",
    definition: "lasting for a very short time",
    russian: "эфемерный, мимолетный, недолговечный",
    example: "Fame in the entertainment industry is often ephemeral.",
    tip: "Remember: lasting for a very short time",
    partOfSpeech: "adjective"
  },
{
    word: "epic",
    definition: "a long poem narrating the deeds of a heroic figure; grand",
    russian: "эпический, героический; эпопея",
    example: "The film was an epic historical drama.",
    tip: "Remember: a long poem narrating the deeds of a heroic figure",
    partOfSpeech: "adjective"
  },
{
    word: "epiphany",
    definition: "a moment of sudden realization or insight",
    russian: "прозрение, озарение",
    example: "He had an epiphany and suddenly understood the problem.",
    tip: "Remember: a moment of sudden realization or insight",
    partOfSpeech: "adjective"
  },
{
    word: "epitome",
    definition: "a person or thing that is a perfect example of a particular quality",
    russian: "воплощение, олицетворение, квинтэссенция",
    example: "She is the epitome of grace and elegance.",
    tip: "Remember: a person or thing that is a perfect example of a particular quality",
    partOfSpeech: "noun"
  },
{
    word: "equanimity",
    definition: "mental calmness, composure, and evenness of temper, especially in a difficult situation",
    russian: "самообладание, хладнокровие, невозмутимость",
    example: "He faced the crisis with equanimity.",
    tip: "Remember: mental calmness, composure, and evenness of temper, especially in a difficult situation",
    partOfSpeech: "noun"
  },
{
    word: "equilibrium",
    definition: "a state in which opposing forces or influences are balanced",
    russian: "равновесие, баланс",
    example: "The system must maintain a stable equilibrium.",
    tip: "Remember: a state in which opposing forces or influences are balanced",
    partOfSpeech: "noun"
  },
{
    word: "equivocal",
    definition: "open to more than one interpretation; ambiguous",
    russian: "двусмысленный, неопределенный, уклончивый",
    example: "His response to the question was equivocal.",
    tip: "Remember: open to more than one interpretation",
    partOfSpeech: "adjective"
  },
{
    word: "equivocate",
    definition: "to use ambiguous language so as to conceal the truth or avoid committing",
    russian: "увиливать, говорить двусмысленно, уклоняться от ответа",
    example: "The politician equivocated when asked about his tax plan.",
    tip: "Remember: to use ambiguous language so as to conceal the truth or avoid committing",
    partOfSpeech: "verb"
  },
{
    word: "era",
    definition: "a long and distinct period of history with a particular feature",
    russian: "эра, эпоха, период",
    example: "The fall of the Berlin Wall marked the end of an era.",
    tip: "Remember: a long and distinct period of history with a particular feature",
    partOfSpeech: "adjective"
  },
{
    word: "eradicate",
    definition: "to destroy completely; put an end to",
    russian: "искоренять, уничтожать, истреблять",
    example: "Scientists are working to eradicate the disease.",
    tip: "Remember: to destroy completely",
    partOfSpeech: "verb"
  },
{
    word: "errant",
    definition: "erring or straying from the proper course or standards",
    russian: "блуждающий, странствующий; заблудший",
    example: "An errant throw missed the target completely.",
    tip: "Remember: erring or straying from the proper course or standards",
    partOfSpeech: "adjective"
  },
{
    word: "erratic",
    definition: "not even or regular in pattern or movement; unpredictable",
    russian: "неустойчивый, беспорядочный, эксцентричный",
    example: "His erratic behavior worried his friends.",
    tip: "Remember: not even or regular in pattern or movement",
    partOfSpeech: "adjective"
  },
{
    word: "erroneous",
    definition: "wrong; incorrect",
    russian: "ошибочный, неверный, ложный",
    example: "The report was based on erroneous data.",
    tip: "Remember: wrong",
    partOfSpeech: "adjective"
  },
{
    word: "ersatz",
    definition: "(of a product) made or used as a substitute, typically an inferior one",
    russian: "эрзац, суррогат, заменитель",
    example: "They were served ersatz coffee made from chicory.",
    tip: "Remember: (of a product) made or used as a substitute, typically an inferior one",
    partOfSpeech: "adjective"
  },
{
    word: "erudite",
    definition: "having or showing great knowledge or learning",
    russian: "эрудированный, ученый, начитанный",
    example: "The erudite professor gave a fascinating lecture.",
    tip: "Remember: having or showing great knowledge or learning",
    partOfSpeech: "adjective"
  },
{
    word: "escalate",
    definition: "to increase rapidly in intensity or seriousness",
    russian: "обострять(ся), эскалировать, повышать(ся)",
    example: "The minor disagreement quickly escalated into a full-blown argument.",
    tip: "Remember: to increase rapidly in intensity or seriousness",
    partOfSpeech: "verb"
  },
{
    word: "eschew",
    definition: "to deliberately avoid using; abstain from",
    russian: "избегать, сторониться, воздерживаться",
    example: "He eschewed all forms of luxury.",
    tip: "Remember: to deliberately avoid using",
    partOfSpeech: "verb"
  },
{
    word: "esoteric",
    definition: "intended for or likely to be understood by only a small number of people",
    russian: "эзотерический, тайный, известный лишь посвященным",
    example: "The book was filled with esoteric references.",
    tip: "Remember: intended for or likely to be understood by only a small number of people",
    partOfSpeech: "adjective"
  },
{
    word: "espouse",
    definition: "to adopt or support (a cause, belief, or way of life)",
    russian: "поддерживать, принимать, исповедовать",
    example: "He espoused the principles of nonviolence.",
    tip: "Remember: to adopt or support (a cause, belief, or way of life)",
    partOfSpeech: "verb"
  },
{
    word: "essential",
    definition: "absolutely necessary; extremely important",
    russian: "существенный, необходимый, основной",
    example: "Good communication is essential for a healthy relationship.",
    tip: "Remember: absolutely necessary",
    partOfSpeech: "adjective"
  },
{
    word: "esteem",
    definition: "respect and admiration, typically for a person",
    russian: "уважение, почтение; уважать",
    example: "She is held in high esteem by her colleagues.",
    tip: "Remember: respect and admiration, typically for a person",
    partOfSpeech: "noun"
  },
{
    word: "estranged",
    definition: "(of a person) no longer close or affectionate to someone; alienated",
    russian: "отчужденный, разлученный",
    example: "He became estranged from his family after the argument.",
    tip: "Remember: (of a person) no longer close or affectionate to someone",
    partOfSpeech: "noun"
  },
{
    word: "eulogy",
    definition: "a speech or piece of writing that praises someone highly, typically someone who has just died",
    russian: "панегирик, хвалебная речь, надгробное слово",
    example: "He delivered a moving eulogy at his father's funeral.",
    tip: "Remember: a speech or piece of writing that praises someone highly, typically someone who has just died",
    partOfSpeech: "adjective"
  },
{
    word: "euphemism",
    definition: "a mild or indirect word substituted for one considered too harsh",
    russian: "эвфемизм",
    example: "'Passed away' is a euphemism for 'died'.",
    tip: "Remember: a mild or indirect word substituted for one considered too harsh",
    partOfSpeech: "noun"
  },
{
    word: "euphoria",
    definition: "a feeling or state of intense excitement and happiness",
    russian: "эйфория, восторг",
    example: "He felt a wave of euphoria after finishing the marathon.",
    tip: "Remember: a feeling or state of intense excitement and happiness",
    partOfSpeech: "noun"
  },
{
    word: "evanescent",
    definition: "soon passing out of sight, memory, or existence; quickly fading",
    russian: "исчезающий, мимолетный, кратковременный",
    example: "The evanescent beauty of the sunset was captivating.",
    tip: "Remember: soon passing out of sight, memory, or existence",
    partOfSpeech: "adjective"
  },
{
    word: "evasive",
    definition: "tending to avoid commitment or self-revelation; directed toward avoidance",
    russian: "уклончивый, неуловимый",
    example: "He gave an evasive answer to the direct question.",
    tip: "Remember: tending to avoid commitment or self-revelation",
    partOfSpeech: "adjective"
  },
{
    word: "evince",
    definition: "to reveal the presence of (a quality or feeling); indicate",
    russian: "проявлять, выказывать, демонстрировать",
    example: "His letters evince a deep love for his family.",
    tip: "Remember: to reveal the presence of (a quality or feeling)",
    partOfSpeech: "verb"
  },
{
    word: "evoke",
    definition: "to bring or recall (a feeling, memory, or image) to the conscious mind",
    russian: "вызывать (чувства, воспоминания)",
    example: "The music evoked memories of his childhood.",
    tip: "Remember: to bring or recall (a feeling, memory, or image) to the conscious mind",
    partOfSpeech: "verb"
  },
{
    word: "exacerbate",
    definition: "to make (a problem, bad situation, or negative feeling) worse",
    russian: "обострять, усугублять, осложнять",
    example: "His critical comments only exacerbated the tension.",
    tip: "Remember: to make (a problem, bad situation, or negative feeling) worse",
    partOfSpeech: "verb"
  },
{
    word: "exacting",
    definition: "making great demands on one's skill, attention, or other resources",
    russian: "требовательный, взыскательный, суровый",
    example: "She was an exacting boss who demanded perfection.",
    tip: "Remember: making great demands on one's skill, attention, or other resources",
    partOfSpeech: "adjective"
  },
{
    word: "exalt",
    definition: "to hold (someone or something) in very high regard; praise",
    russian: "превозносить, восхвалять, возвеличивать",
    example: "The essay exalts the virtues of simple living.",
    tip: "Remember: to hold (someone or something) in very high regard",
    partOfSpeech: "verb"
  },
{
    word: "exasperate",
    definition: "to irritate and frustrate (someone) intensely",
    russian: "раздражать, выводить из себя, сердить",
    example: "His constant interruptions exasperated the speaker.",
    tip: "Remember: to irritate and frustrate (someone) intensely",
    partOfSpeech: "verb"
  },
{
    word: "excavate",
    definition: "to make (a hole or channel) by digging; to unearth",
    russian: "раскапывать, выкапывать, рыть",
    example: "Archaeologists are excavating the ruins of the ancient city.",
    tip: "Remember: to make (a hole or channel) by digging",
    partOfSpeech: "verb"
  },
{
    word: "exculpate",
    definition: "to show or declare that (someone) is not guilty of wrongdoing",
    russian: "оправдывать, реабилитировать, снимать обвинение",
    example: "The new evidence helped to exculpate the defendant.",
    tip: "Remember: to show or declare that (someone) is not guilty of wrongdoing",
    partOfSpeech: "verb"
  },
{
    word: "exemplar",
    definition: "a person or thing serving as a typical example or excellent model",
    russian: "образец, пример (для подражания)",
    example: "He is an exemplar of judicial fairness.",
    tip: "Remember: a person or thing serving as a typical example or excellent model",
    partOfSpeech: "noun"
  },
{
    word: "exemplary",
    definition: "serving as a desirable model; representing the best of its kind",
    russian: "примерный, образцовый, поучительный",
    example: "Her behavior was exemplary, and she was praised by the teacher.",
    tip: "Remember: serving as a desirable model",
    partOfSpeech: "adjective"
  },
{
    word: "exemplify",
    definition: "to be a typical example of",
    russian: "служить примером, иллюстрировать",
    example: "His volunteer work exemplifies the spirit of community.",
    tip: "Remember: to be a typical example of",
    partOfSpeech: "verb"
  },
{
    word: "exempt",
    definition: "free from an obligation or liability imposed on others",
    russian: "освобожденный (от); освобождать",
    example: "Charitable organizations are exempt from taxes.",
    tip: "Remember: free from an obligation or liability imposed on others",
    partOfSpeech: "adjective"
  },
{
    word: "exert",
    definition: "to apply or bring to bear (force, influence, or quality)",
    russian: "оказывать (влияние), применять (силу), напрягать",
    example: "He had to exert all his strength to move the boulder.",
    tip: "Remember: to apply or bring to bear (force, influence, or quality)",
    partOfSpeech: "verb"
  },
{
    word: "exhaustive",
    definition: "examining, including, or considering all elements or aspects; fully comprehensive",
    russian: "исчерпывающий, всесторонний, истощающий",
    example: "The police conducted an exhaustive search of the area.",
    tip: "Remember: examining, including, or considering all elements or aspects",
    partOfSpeech: "adjective"
  },
{
    word: "exhilarating",
    definition: "making one feel very happy, animated, or elated; thrilling",
    russian: "бодрящий, веселящий, возбуждающий",
    example: "The rollercoaster ride was an exhilarating experience.",
    tip: "Remember: making one feel very happy, animated, or elated",
    partOfSpeech: "adjective"
  },
{
    word: "exhort",
    definition: "to strongly encourage or urge (someone) to do something",
    russian: "увещевать, призывать, убеждать",
    example: "The coach exhorted the team to play their best.",
    tip: "Remember: to strongly encourage or urge (someone) to do something",
    partOfSpeech: "verb"
  },
{
    word: "exigent",
    definition: "pressing; demanding",
    russian: "требовательный, настоятельный, срочный",
    example: "The exigent circumstances required immediate action.",
    tip: "Remember: pressing",
    partOfSpeech: "adjective"
  },
{
    word: "exonerate",
    definition: "to absolve (someone) from blame for a fault or wrongdoing",
    russian: "оправдывать, реабилитировать, освобождать (от обвинения)",
    example: "The DNA evidence exonerated the suspect.",
    tip: "Remember: to absolve (someone) from blame for a fault or wrongdoing",
    partOfSpeech: "verb"
  },
{
    word: "exorbitant",
    definition: "(of a price or amount charged) unreasonably high",
    russian: "чрезмерный, непомерный, баснословный",
    example: "The hotel charged an exorbitant price for a small room.",
    tip: "Remember: (of a price or amount charged) unreasonably high",
    partOfSpeech: "adjective"
  },
{
    word: "exotic",
    definition: "originating in or characteristic of a distant foreign country",
    russian: "экзотический, иноземный, диковинный",
    example: "She collects exotic plants from around the world.",
    tip: "Remember: originating in or characteristic of a distant foreign country",
    partOfSpeech: "noun"
  },
{
    word: "expansive",
    definition: "covering a wide area in terms of space or scope; (of a person) open and communicative",
    russian: "обширный, экспансивный, несдержанный",
    example: "He was in an expansive mood, sharing stories freely.",
    tip: "Remember: covering a wide area in terms of space or scope",
    partOfSpeech: "adjective"
  },
{
    word: "expedient",
    definition: "(of an action) convenient and practical, although possibly improper or immoral",
    russian: "целесообразный, выгодный, подходящий",
    example: "It was expedient to settle the lawsuit out of court.",
    tip: "Remember: (of an action) convenient and practical, although possibly improper or immoral",
    partOfSpeech: "noun"
  },
{
    word: "expedite",
    definition: "to make (an action or process) happen sooner or be accomplished more quickly",
    russian: "ускорять, содействовать, быстро отправлять",
    example: "We need to expedite the delivery of the emergency supplies.",
    tip: "Remember: to make (an action or process) happen sooner or be accomplished more quickly",
    partOfSpeech: "verb"
  },
{
    word: "explicit",
    definition: "stated clearly and in detail, leaving no room for confusion",
    russian: "явный, точный, откровенный",
    example: "She gave explicit instructions on how to complete the task.",
    tip: "Remember: stated clearly and in detail, leaving no room for confusion",
    partOfSpeech: "noun"
  },
{
    word: "exploit",
    definition: "to make full use of and derive benefit from (a resource); to use unfairly",
    russian: "эксплуатировать, использовать; подвиг",
    example: "The company was accused of exploiting its workers.",
    tip: "Remember: to make full use of and derive benefit from (a resource)",
    partOfSpeech: "verb"
  },
{
    word: "exponent",
    definition: "a person who believes in and promotes the truth or benefits of an idea",
    russian: "показатель (степени), поборник, сторонник",
    example: "He was a leading exponent of the minimalist art movement.",
    tip: "Remember: a person who believes in and promotes the truth or benefits of an idea",
    partOfSpeech: "noun"
  },
{
    word: "expound",
    definition: "to present and explain (a theory or idea) systematically and in detail",
    russian: "излагать, разъяснять, толковать",
    example: "The professor expounded on his theory of relativity.",
    tip: "Remember: to present and explain (a theory or idea) systematically and in detail",
    partOfSpeech: "verb"
  },
{
    word: "extant",
    definition: "(especially of a document) still in existence; surviving",
    russian: "существующий, сохранившийся (до наших дней)",
    example: "The oldest extant manuscript of the poem dates from the 10th century.",
    tip: "Remember: (especially of a document) still in existence",
    partOfSpeech: "adjective"
  },
{
    word: "extemporaneous",
    definition: "spoken or done without preparation; impromptu",
    russian: "экспромтом, импровизированный, спонтанный",
    example: "He gave a brilliant extemporaneous speech.",
    tip: "Remember: spoken or done without preparation",
    partOfSpeech: "adjective"
  },
{
    word: "extenuate",
    definition: "to cause (an offense) to seem less serious; to mitigate",
    russian: "смягчать (вину), преуменьшать",
    example: "He pleaded that his difficult childhood extenuated his crimes.",
    tip: "Remember: to cause (an offense) to seem less serious",
    partOfSpeech: "verb"
  },
{
    word: "extinct",
    definition: "(of a species, family, or other group) having no living members",
    russian: "вымерший, потухший, угасший",
    example: "The dodo bird has been extinct for centuries.",
    tip: "Remember: (of a species, family, or other group) having no living members",
    partOfSpeech: "adjective"
  },
{
    word: "extol",
    definition: "to praise enthusiastically",
    russian: "превозносить, восхвалять, превозносить",
    example: "The critics extolled the virtues of the new film.",
    tip: "Remember: to praise enthusiastically",
    partOfSpeech: "verb"
  },
{
    word: "extort",
    definition: "to obtain (something) by force or threats",
    russian: "вымогать, исторгать, добиваться силой",
    example: "The criminals attempted to extort money from the business owner.",
    tip: "Remember: to obtain (something) by force or threats",
    partOfSpeech: "verb"
  },
{
    word: "extraneous",
    definition: "irrelevant or unrelated to the subject being dealt with",
    russian: "посторонний, чуждый, не относящийся к делу",
    example: "The essay was filled with extraneous details.",
    tip: "Remember: irrelevant or unrelated to the subject being dealt with",
    partOfSpeech: "adjective"
  },
{
    word: "extrapolate",
    definition: "to extend the application of (a method or conclusion) to an unknown situation",
    russian: "экстраполировать, делать вывод",
    example: "We can extrapolate future trends from the current data.",
    tip: "Remember: to extend the application of (a method or conclusion) to an unknown situation",
    partOfSpeech: "verb"
  },
{
    word: "extricate",
    definition: "to free (someone or something) from a constraint or difficulty",
    russian: "выпутывать(ся), высвобождать, извлекать",
    example: "He managed to extricate himself from the awkward situation.",
    tip: "Remember: to free (someone or something) from a constraint or difficulty",
    partOfSpeech: "verb"
  },
{
    word: "extrinsic",
    definition: "not part of the essential nature of someone or something; coming from outside",
    russian: "внешний, не свойственный, пришлый",
    example: "Extrinsic factors, like the weather, affected the experiment.",
    tip: "Remember: not part of the essential nature of someone or something",
    partOfSpeech: "adjective"
  },
{
    word: "extrovert",
    definition: "an outgoing, overtly expressive person",
    russian: "экстраверт",
    example: "She is an extrovert who loves parties and meeting new people.",
    tip: "Remember: an outgoing, overtly expressive person",
    partOfSpeech: "noun"
  },
{
    word: "exuberant",
    definition: "filled with or characterized by a lively energy and excitement",
    russian: "бурный, кипучий, жизнерадостный",
    example: "The children's exuberant laughter filled the room.",
    tip: "Remember: filled with or characterized by a lively energy and excitement",
    partOfSpeech: "adjective"
  },
{
    word: "exult",
    definition: "to show or feel elation or jubilation, especially as the result of a success",
    russian: "ликовать, торжествовать, радоваться",
    example: "The team exulted in their championship victory.",
    tip: "Remember: to show or feel elation or jubilation, especially as the result of a success",
    partOfSpeech: "verb"
  },
{
    word: "fabricate",
    definition: "to invent or concoct (something), typically with deceitful intent",
    russian: "фабриковать, выдумывать, подделывать",
    example: "He was accused of fabricating evidence.",
    tip: "Remember: to invent or concoct (something), typically with deceitful intent",
    partOfSpeech: "verb"
  },
{
    word: "façade",
    definition: "the face of a building; an outward appearance that is maintained to conceal a less pleasant reality",
    russian: "фасад, внешний вид, видимость",
    example: "He maintained a façade of confidence, but he was actually nervous.",
    tip: "Remember: the face of a building",
    partOfSpeech: "adjective"
  },
{
    word: "facet",
    definition: "one side of something many-sided, especially of a cut gem; a particular aspect",
    russian: "грань, аспект, сторона",
    example: "The report examines every facet of the problem.",
    tip: "Remember: one side of something many-sided, especially of a cut gem",
    partOfSpeech: "noun"
  },
{
    word: "facetious",
    definition: "treating serious issues with deliberately inappropriate humor; flippant",
    russian: "шутливый, комичный, неуместно-веселый",
    example: "His facetious remarks were not appreciated.",
    tip: "Remember: treating serious issues with deliberately inappropriate humor",
    partOfSpeech: "adjective"
  },
{
    word: "facile",
    definition: "(especially of a theory or argument) appearing neat and comprehensive only by ignoring true complexities",
    russian: "поверхностный, легкий, беглый",
    example: "His facile solution to the complex problem was dismissed.",
    tip: "Remember: (especially of a theory or argument) appearing neat and comprehensive only by ignoring true complexities",
    partOfSpeech: "adjective"
  },
{
    word: "facilitate",
    definition: "to make (an action or process) easy or easier",
    russian: "облегчать, содействовать, способствовать",
    example: "The new software will facilitate data entry.",
    tip: "Remember: to make (an action or process) easy or easier",
    partOfSpeech: "verb"
  },
{
    word: "faction",
    definition: "a small, organized, dissenting group within a larger one",
    russian: "фракция, группировка, распря",
    example: "The political party was split by warring factions.",
    tip: "Remember: a small, organized, dissenting group within a larger one",
    partOfSpeech: "noun"
  },
{
    word: "fallacious",
    definition: "based on a mistaken belief",
    russian: "ложный, ошибочный, обманчивый",
    example: "His argument was based on a fallacious premise.",
    tip: "Remember: based on a mistaken belief",
    partOfSpeech: "adjective"
  },
{
    word: "fallible",
    definition: "capable of making mistakes or being erroneous",
    russian: "ошибающийся, подверженный ошибкам, ненадежный",
    example: "All human beings are fallible.",
    tip: "Remember: capable of making mistakes or being erroneous",
    partOfSpeech: "adjective"
  },
{
    word: "falter",
    definition: "to start to lose strength or momentum; to speak hesitatingly",
    russian: "колебаться, спотыкаться, запинаться",
    example: "His courage never faltered during the crisis.",
    tip: "Remember: to start to lose strength or momentum",
    partOfSpeech: "verb"
  },
{
    word: "fastidious",
    definition: "very attentive to and concerned about accuracy and detail",
    russian: "привередливый, разборчивый, брезгливый",
    example: "He is fastidious about his appearance.",
    tip: "Remember: very attentive to and concerned about accuracy and detail",
    partOfSpeech: "adjective"
  },
{
    word: "fathom",
    definition: "to understand (a difficult problem or an enigmatic person) after much thought",
    russian: "постигать, понимать, вникать",
    example: "I cannot fathom why he would do such a thing.",
    tip: "Remember: to understand (a difficult problem or an enigmatic person) after much thought",
    partOfSpeech: "verb"
  },
{
    word: "fatuous",
    definition: "silly and pointless",
    russian: "глупый, бессмысленный, самодовольно-глупый",
    example: "He made a fatuous comment that annoyed everyone.",
    tip: "Remember: silly and pointless",
    partOfSpeech: "adjective"
  },
{
    word: "fault",
    definition: "an unattractive or unsatisfactory feature; responsibility for an error",
    russian: "вина, ошибка, недостаток",
    example: "It was his fault that they were late.",
    tip: "Remember: an unattractive or unsatisfactory feature",
    partOfSpeech: "noun"
  },
{
    word: "fawn",
    definition: "to give a servile display of exaggerated flattery or affection",
    russian: "подлизываться, лебезить, пресмыкаться",
    example: "The employees fawned over their new boss.",
    tip: "Remember: to give a servile display of exaggerated flattery or affection",
    partOfSpeech: "verb"
  },
{
    word: "feasible",
    definition: "possible to do easily or conveniently",
    russian: "осуществимый, выполнимый, возможный",
    example: "The plan is not feasible without more funding.",
    tip: "Remember: possible to do easily or conveniently",
    partOfSpeech: "adjective"
  },
{
    word: "fecund",
    definition: "producing or capable of producing an abundance of offspring or new growth; fertile",
    russian: "плодовитый, плодородный, изобильный",
    example: "The fecund soil produced a rich harvest.",
    tip: "Remember: producing or capable of producing an abundance of offspring or new growth",
    partOfSpeech: "adjective"
  },
{
    word: "feign",
    definition: "to pretend to be affected by (a feeling, state, or injury)",
    russian: "притворяться, симулировать",
    example: "She feigned illness to avoid going to the meeting.",
    tip: "Remember: to pretend to be affected by (a feeling, state, or injury)",
    partOfSpeech: "verb"
  },
{
    word: "felicitous",
    definition: "well chosen or suited to the circumstances; pleasing and fortunate",
    russian: "удачный, уместный, счастливый",
    example: "Her felicitous remarks lightened the mood.",
    tip: "Remember: well chosen or suited to the circumstances",
    partOfSpeech: "adjective"
  },
{
    word: "feral",
    definition: "(especially of an animal) in a wild state, especially after escape from captivity",
    russian: "дикий, одичавший",
    example: "A pack of feral dogs roamed the abandoned streets.",
    tip: "Remember: (especially of an animal) in a wild state, especially after escape from captivity",
    partOfSpeech: "noun"
  },
{
    word: "fervent",
    definition: "having or displaying a passionate intensity",
    russian: "пылкий, горячий, ревностный",
    example: "He is a fervent supporter of the environmental cause.",
    tip: "Remember: having or displaying a passionate intensity",
    partOfSpeech: "adjective"
  },
{
    word: "fervor",
    definition: "intense and passionate feeling",
    russian: "пыл, жар, рвение",
    example: "He spoke with great fervor about his beliefs.",
    tip: "Remember: intense and passionate feeling",
    partOfSpeech: "noun"
  },
{
    word: "fetter",
    definition: "a chain or manacle used to restrain a prisoner; a restraint",
    russian: "оковы, путы; сковывать",
    example: "He felt fettered by his family's expectations.",
    tip: "Remember: a chain or manacle used to restrain a prisoner",
    partOfSpeech: "noun"
  },
{
    word: "fiasco",
    definition: "a thing that is a complete failure, especially in a ludicrous or humiliating way",
    russian: "фиаско, провал, неудача",
    example: "The party turned into a complete fiasco.",
    tip: "Remember: a thing that is a complete failure, especially in a ludicrous or humiliating way",
    partOfSpeech: "noun"
  },
{
    word: "fiat",
    definition: "a formal authorization or proposition; a decree",
    russian: "указ, декрет, распоряжение",
    example: "The dictator ruled by fiat.",
    tip: "Remember: a formal authorization or proposition",
    partOfSpeech: "adjective"
  },
{
    word: "fickle",
    definition: "changing frequently, especially as regards one's loyalties or affections",
    russian: "непостоянный, переменчивый, ненадежный",
    example: "The fickle weather made it hard to plan the picnic.",
    tip: "Remember: changing frequently, especially as regards one's loyalties or affections",
    partOfSpeech: "adjective"
  },
{
    word: "fidelity",
    definition: "faithfulness to a person, cause, or belief, demonstrated by continuing loyalty",
    russian: "верность, преданность, точность",
    example: "He was praised for his fidelity to the company.",
    tip: "Remember: faithfulness to a person, cause, or belief, demonstrated by continuing loyalty",
    partOfSpeech: "noun"
  },
{
    word: "figurative",
    definition: "departing from a literal use of words; metaphorical",
    russian: "образный, переносный, фигуральный",
    example: "'He has a heart of stone' is a figurative expression.",
    tip: "Remember: departing from a literal use of words",
    partOfSpeech: "adjective"
  },
{
    word: "filibuster",
    definition: "an action (such as a prolonged speech) that obstructs progress in a legislative assembly",
    russian: "флибустьерство, обструкция (в парламенте)",
    example: "The senator threatened a filibuster to delay the vote.",
    tip: "Remember: an action (such as a prolonged speech) that obstructs progress in a legislative assembly",
    partOfSpeech: "noun"
  },
{
    word: "finite",
    definition: "having limits or bounds",
    russian: "конечный, ограниченный",
    example: "The world's resources are finite.",
    tip: "Remember: having limits or bounds",
    partOfSpeech: "adjective"
  },
{
    word: "flagrant",
    definition: "(of an action considered wrong or immoral) conspicuously or obviously offensive",
    russian: "вопиющий, скандальный, ужасный",
    example: "It was a flagrant violation of the rules.",
    tip: "Remember: (of an action considered wrong or immoral) conspicuously or obviously offensive",
    partOfSpeech: "noun"
  },
{
    word: "flaunt",
    definition: "to display (something) ostentatiously, especially in order to provoke envy",
    russian: "выставлять напоказ, щеголять, рисоваться",
    example: "He liked to flaunt his wealth by driving expensive cars.",
    tip: "Remember: to display (something) ostentatiously, especially in order to provoke envy",
    partOfSpeech: "verb"
  },
{
    word: "fledgling",
    definition: "a person or organization that is immature, inexperienced, or underdeveloped",
    russian: "новичок, неопытный человек, «желторотик»",
    example: "The fledgling company struggled to compete with established firms.",
    tip: "Remember: a person or organization that is immature, inexperienced, or underdeveloped",
    partOfSpeech: "noun"
  },
{
    word: "fleeting",
    definition: "lasting for a very short time",
    russian: "быстротечный, мимолетный, скоропреходящий",
    example: "She caught a fleeting glimpse of the deer.",
    tip: "Remember: lasting for a very short time",
    partOfSpeech: "adjective"
  },
{
    word: "flimsy",
    definition: "insubstantial and easily damaged; (of an argument) weak",
    russian: "непрочный, хлипкий; неубедительный",
    example: "His excuse for being late was rather flimsy.",
    tip: "Remember: insubstantial and easily damaged",
    partOfSpeech: "adjective"
  },
{
    word: "flippant",
    definition: "not showing a serious or respectful attitude",
    russian: "легкомысленный, дерзкий, неуважительный",
    example: "His flippant remark angered the teacher.",
    tip: "Remember: not showing a serious or respectful attitude",
    partOfSpeech: "adjective"
  },
{
    word: "florid",
    definition: "having a red or flushed complexion; elaborately or excessively intricate",
    russian: "румяный, цветистый, вычурный",
    example: "His speech was full of florid language.",
    tip: "Remember: having a red or flushed complexion",
    partOfSpeech: "adjective"
  },
{
    word: "flourish",
    definition: "to grow or develop in a healthy or vigorous way",
    russian: "процветать, преуспевать, расцветать",
    example: "The arts scene flourished in the city.",
    tip: "Remember: to grow or develop in a healthy or vigorous way",
    partOfSpeech: "verb"
  },
{
    word: "flout",
    definition: "to openly disregard (a rule, law, or convention)",
    russian: "презирать, насмехаться, не подчиняться",
    example: "He openly flouted the company's dress code.",
    tip: "Remember: to openly disregard (a rule, law, or convention)",
    partOfSpeech: "verb"
  },
{
    word: "flummox",
    definition: "to perplex (someone) greatly; bewilder",
    russian: "сбивать с толку, озадачивать",
    example: "He was completely flummoxed by the difficult riddle.",
    tip: "Remember: to perplex (someone) greatly",
    partOfSpeech: "verb"
  },
{
    word: "foible",
    definition: "a minor weakness or eccentricity in someone's character",
    russian: "слабость, недостаток, причуда",
    example: "We all have our little foibles.",
    tip: "Remember: a minor weakness or eccentricity in someone's character",
    partOfSpeech: "adjective"
  },
{
    word: "foil",
    definition: "to prevent (something considered wrong or undesirable) from succeeding",
    russian: "мешать, расстраивать (планы); фольга",
    example: "The police foiled the bank robbery.",
    tip: "Remember: to prevent (something considered wrong or undesirable) from succeeding",
    partOfSpeech: "verb"
  },
{
    word: "foment",
    definition: "to instigate or stir up (an undesirable or violent course of action)",
    russian: "разжигать, подстрекать, провоцировать",
    example: "He was accused of fomenting political unrest.",
    tip: "Remember: to instigate or stir up (an undesirable or violent course of action)",
    partOfSpeech: "verb"
  },
{
    word: "forage",
    definition: "to search widely for food or provisions",
    russian: "добывать продовольствие, фураж; искать",
    example: "The deer foraged for food in the forest.",
    tip: "Remember: to search widely for food or provisions",
    partOfSpeech: "verb"
  },
{
    word: "forbearance",
    definition: "patient self-control; restraint and tolerance",
    russian: "воздержанность, терпимость, снисходительность",
    example: "He showed great forbearance in dealing with the difficult child.",
    tip: "Remember: patient self-control",
    partOfSpeech: "noun"
  },
{
    word: "forbid",
    definition: "to refuse to allow (something)",
    russian: "запрещать, не позволять",
    example: "The rules forbid smoking inside the building.",
    tip: "Remember: to refuse to allow (something)",
    partOfSpeech: "verb"
  },
{
    word: "foreboding",
    definition: "a feeling that something bad will happen; fearful apprehension",
    russian: "дурное предчувствие, предзнаменование",
    example: "She had a sense of foreboding about the upcoming trip.",
    tip: "Remember: a feeling that something bad will happen",
    partOfSpeech: "noun"
  },
{
    word: "foreshadow",
    definition: "to be a warning or indication of (a future event)",
    russian: "предвещать, быть предзнаменованием",
    example: "The dark clouds foreshadowed an approaching storm.",
    tip: "Remember: to be a warning or indication of (a future event)",
    partOfSpeech: "verb"
  },
{
    word: "forestall",
    definition: "to prevent or obstruct (an anticipated event) by taking action ahead of time",
    russian: "предотвращать, предупреждать, опережать",
    example: "He forestalled any criticism by apologizing first.",
    tip: "Remember: to prevent or obstruct (an anticipated event) by taking action ahead of time",
    partOfSpeech: "verb"
  },
{
    word: "forgo",
    definition: "to omit or decline to take (something pleasant or valuable); go without",
    russian: "отказываться, воздерживаться (от)",
    example: "She decided to forgo dessert and have coffee instead.",
    tip: "Remember: to omit or decline to take (something pleasant or valuable)",
    partOfSpeech: "verb"
  },
{
    word: "formidable",
    definition: "inspiring fear or respect through being impressively large or powerful",
    russian: "грозный, внушительный, труднопреодолимый",
    example: "The team faced a formidable opponent in the finals.",
    tip: "Remember: inspiring fear or respect through being impressively large or powerful",
    partOfSpeech: "adjective"
  },
{
    word: "formulaic",
    definition: "constituting or containing a set form of words; unoriginal",
    russian: "шаблонный, трафаретный, стереотипный",
    example: "The movie's plot was predictable and formulaic.",
    tip: "Remember: constituting or containing a set form of words",
    partOfSpeech: "adjective"
  },
{
    word: "forsake",
    definition: "to abandon or leave",
    russian: "покидать, оставлять, отрекаться",
    example: "He vowed never to forsake his principles.",
    tip: "Remember: to abandon or leave",
    partOfSpeech: "verb"
  },
{
    word: "forthcoming",
    definition: "about to happen or appear; (of a person) willing to divulge information",
    russian: "предстоящий, грядущий; откровенный",
    example: "The author's forthcoming novel is eagerly awaited.",
    tip: "Remember: about to happen or appear",
    partOfSpeech: "noun"
  },
{
    word: "forthright",
    definition: "(of a person or their speech) direct and outspoken; straightforward",
    russian: "прямой, откровенный, честный",
    example: "She was forthright about her concerns.",
    tip: "Remember: (of a person or their speech) direct and outspoken",
    partOfSpeech: "noun"
  },
{
    word: "fortitude",
    definition: "courage in pain or adversity",
    russian: "сила духа, стойкость, мужество",
    example: "She endured her illness with great fortitude.",
    tip: "Remember: courage in pain or adversity",
    partOfSpeech: "adjective"
  },
{
    word: "fortuitous",
    definition: "happening by chance rather than design; lucky",
    russian: "случайный, непредвиденный, удачный",
    example: "Their fortuitous meeting led to a long friendship.",
    tip: "Remember: happening by chance rather than design",
    partOfSpeech: "adjective"
  },
{
    word: "founder",
    definition: "(of a plan or undertaking) to fail or break down; (of a ship) to fill with water and sink",
    russian: "основатель; тонуть, проваливаться (о плане)",
    example: "The project foundered due to a lack of funding.",
    tip: "Remember: (of a plan or undertaking) to fail or break down",
    partOfSpeech: "noun"
  },
{
    word: "fractious",
    definition: "(typically of children) irritable and quarrelsome; difficult to control",
    russian: "капризный, беспокойный, раздражительный",
    example: "The fractious child refused to cooperate.",
    tip: "Remember: (typically of children) irritable and quarrelsome",
    partOfSpeech: "adjective"
  },
{
    word: "fragmented",
    definition: "broken or separated into distinct parts",
    russian: "фрагментированный, раздробленный, разрозненный",
    example: "The industry is highly fragmented, with many small companies.",
    tip: "Remember: broken or separated into distinct parts",
    partOfSpeech: "adjective"
  },
{
    word: "frank",
    definition: "open, honest, and direct in speech or writing",
    russian: "откровенный, искренний, честный",
    example: "To be frank, I don't think your plan will work.",
    tip: "Remember: open, honest, and direct in speech or writing",
    partOfSpeech: "adjective"
  },
{
    word: "fraudulent",
    definition: "obtained, done by, or involving deception, especially criminal deception",
    russian: "мошеннический, обманный, фальшивый",
    example: "He was arrested for fraudulent activities.",
    tip: "Remember: obtained, done by, or involving deception, especially criminal deception",
    partOfSpeech: "adjective"
  },
{
    word: "fraught",
    definition: "(of a situation or course of action) filled with (something undesirable)",
    russian: "чреватый, полный (опасности, риска)",
    example: "The negotiation was fraught with tension and disagreement.",
    tip: "Remember: (of a situation or course of action) filled with (something undesirable)",
    partOfSpeech: "noun"
  },
{
    word: "frivolous",
    definition: "not having any serious purpose or value",
    russian: "легкомысленный, несерьезный, поверхностный",
    example: "She spent her money on frivolous purchases.",
    tip: "Remember: not having any serious purpose or value",
    partOfSpeech: "adjective"
  },
{
    word: "frugal",
    definition: "sparing or economical with regard to money or food",
    russian: "бережливый, экономный, скромный (о еде)",
    example: "He leads a frugal life, saving most of his income.",
    tip: "Remember: sparing or economical with regard to money or food",
    partOfSpeech: "adjective"
  },
{
    word: "fugitive",
    definition: "a person who has escaped from captivity or is in hiding",
    russian: "беглец, дезертир; мимолетный",
    example: "The fugitive was apprehended by the police.",
    tip: "Remember: a person who has escaped from captivity or is in hiding",
    partOfSpeech: "noun"
  },
{
    word: "fulminate",
    definition: "to express vehement protest",
    russian: "метать громы и молнии, резко осуждать, взрываться",
    example: "He fulminated against the new tax policy.",
    tip: "Remember: to express vehement protest",
    partOfSpeech: "verb"
  },
{
    word: "fundamental",
    definition: "forming a necessary base or core; of central importance",
    russian: "фундаментальный, основной, существенный",
    example: "Learning the alphabet is a fundamental step in reading.",
    tip: "Remember: forming a necessary base or core",
    partOfSpeech: "adjective"
  },
{
    word: "furtive",
    definition: "attempting to avoid notice or attention, typically because of guilt; secretive",
    russian: "скрытный, вороватый, тайный",
    example: "He cast a furtive glance in her direction.",
    tip: "Remember: attempting to avoid notice or attention, typically because of guilt",
    partOfSpeech: "adjective"
  },
{
    word: "futile",
    definition: "incapable of producing any useful result; pointless",
    russian: "бесполезный, тщетный, бесплодный",
    example: "All their attempts to save the company were futile.",
    tip: "Remember: incapable of producing any useful result",
    partOfSpeech: "adjective"
  },
{
    word: "gadfly",
    definition: "an annoying person, especially one who provokes others into action by criticism",
    russian: "овод, надоедливый человек, критик",
    example: "He was known as a political gadfly, always challenging the establishment.",
    tip: "Remember: an annoying person, especially one who provokes others into action by criticism",
    partOfSpeech: "noun"
  },
{
    word: "gaffe",
    definition: "an unintentional act or remark causing embarrassment to its originator",
    russian: "оплошность, бестактность, ляп",
    example: "The politician's comment was a major gaffe.",
    tip: "Remember: an unintentional act or remark causing embarrassment to its originator",
    partOfSpeech: "noun"
  },
{
    word: "gainsay",
    definition: "to deny or contradict (a fact or statement)",
    russian: "отрицать, противоречить, оспаривать",
    example: "No one dared to gainsay the professor's theory.",
    tip: "Remember: to deny or contradict (a fact or statement)",
    partOfSpeech: "verb"
  },
{
    word: "galvanize",
    definition: "to shock or excite (someone) into taking action",
    russian: "гальванизировать, возбуждать, стимулировать",
    example: "The speech galvanized the crowd into action.",
    tip: "Remember: to shock or excite (someone) into taking action",
    partOfSpeech: "verb"
  },
{
    word: "gambit",
    definition: "an act or remark that is calculated to gain an advantage",
    russian: "гамбит, уловка, тактический ход",
    example: "His offer to help was just a gambit to win her trust.",
    tip: "Remember: an act or remark that is calculated to gain an advantage",
    partOfSpeech: "noun"
  },
{
    word: "gargantuan",
    definition: "enormous",
    russian: "гигантский, огромный, колоссальный",
    example: "He had a gargantuan appetite.",
    tip: "Remember: enormous",
    partOfSpeech: "adjective"
  },
{
    word: "garish",
    definition: "obtrusively bright and showy; lurid",
    russian: "яркий, кричащий, безвкусный",
    example: "The hotel lobby was decorated in a garish style.",
    tip: "Remember: obtrusively bright and showy",
    partOfSpeech: "adjective"
  },
{
    word: "garner",
    definition: "to gather or collect (something, especially information or approval)",
    russian: "собирать, копить, запасать",
    example: "She garnered widespread support for her proposal.",
    tip: "Remember: to gather or collect (something, especially information or approval)",
    partOfSpeech: "verb"
  },
{
    word: "garrulous",
    definition: "excessively talkative, especially on trivial matters",
    russian: "разговорчивый, болтливый, словоохотливый",
    example: "The garrulous old man told stories for hours.",
    tip: "Remember: excessively talkative, especially on trivial matters",
    partOfSpeech: "adjective"
  },
{
    word: "gauche",
    definition: "lacking ease or grace; unsophisticated and socially awkward",
    russian: "неуклюжий, неловкий, бестактный",
    example: "His gauche behavior made everyone feel uncomfortable.",
    tip: "Remember: lacking ease or grace",
    partOfSpeech: "adjective"
  },
{
    word: "gaudy",
    definition: "extravagantly bright or showy, typically so as to be tasteless",
    russian: "безвкусный, кричащий, аляповатый",
    example: "She wore a gaudy dress with bright sequins.",
    tip: "Remember: extravagantly bright or showy, typically so as to be tasteless",
    partOfSpeech: "adjective"
  },
{
    word: "genealogy",
    definition: "a line of descent traced continuously from an ancestor",
    russian: "генеалогия, родословная",
    example: "He spent years researching his family's genealogy.",
    tip: "Remember: a line of descent traced continuously from an ancestor",
    partOfSpeech: "adjective"
  },
{
    word: "generalization",
    definition: "a general statement or concept obtained by inference from specific cases",
    russian: "обобщение, генерализация",
    example: "It is a broad generalization to say that all politicians are dishonest.",
    tip: "Remember: a general statement or concept obtained by inference from specific cases",
    partOfSpeech: "noun"
  },
{
    word: "generate",
    definition: "to cause (something, especially an emotion or situation) to arise or come about",
    russian: "генерировать, производить, порождать",
    example: "The new project will generate hundreds of jobs.",
    tip: "Remember: to cause (something, especially an emotion or situation) to arise or come about",
    partOfSpeech: "verb"
  },
{
    word: "generic",
    definition: "characteristic of or relating to a class or group of things; not specific",
    russian: "родовой, общий, непатентованный",
    example: "The store sells generic brands at lower prices.",
    tip: "Remember: characteristic of or relating to a class or group of things",
    partOfSpeech: "noun"
  },
{
    word: "genesis",
    definition: "the origin or mode of formation of something",
    russian: "происхождение, возникновение, генезис",
    example: "The book explores the genesis of the conflict.",
    tip: "Remember: the origin or mode of formation of something",
    partOfSpeech: "noun"
  },
{
    word: "genial",
    definition: "friendly and cheerful",
    russian: "добрый, радушный, сердечный",
    example: "The host was genial and welcoming.",
    tip: "Remember: friendly and cheerful",
    partOfSpeech: "adjective"
  },
{
    word: "genre",
    definition: "a category of artistic composition characterized by similarities in form or style",
    russian: "жанр, род, стиль",
    example: "Science fiction is his favorite literary genre.",
    tip: "Remember: a category of artistic composition characterized by similarities in form or style",
    partOfSpeech: "adjective"
  },
{
    word: "genteel",
    definition: "polite, refined, or respectable, often in an affected or ostentatious way",
    russian: "благородный, изящный, светский",
    example: "They lived in a state of genteel poverty.",
    tip: "Remember: polite, refined, or respectable, often in an affected or ostentatious way",
    partOfSpeech: "adjective"
  },
{
    word: "germane",
    definition: "relevant to a subject under consideration",
    russian: "уместный, релевантный, относящийся к делу",
    example: "His comments were not germane to the discussion.",
    tip: "Remember: relevant to a subject under consideration",
    partOfSpeech: "adjective"
  },
{
    word: "gestation",
    definition: "the process of developing in the womb; the development of an idea over time",
    russian: "беременность, вынашивание (идеи)",
    example: "The new policy was in gestation for months.",
    tip: "Remember: the process of developing in the womb",
    partOfSpeech: "noun"
  },
{
    word: "gist",
    definition: "the substance or essence of a speech or text",
    russian: "суть, смысл, сущность",
    example: "I didn't read the whole report, but I got the gist of it.",
    tip: "Remember: the substance or essence of a speech or text",
    partOfSpeech: "noun"
  },
{
    word: "glean",
    definition: "to extract (information) from various sources; to collect gradually",
    russian: "подбирать, собирать (по крупицам)",
    example: "She gleaned information from several different websites.",
    tip: "Remember: to extract (information) from various sources",
    partOfSpeech: "verb"
  },
{
    word: "glib",
    definition: "(of words or the person speaking them) fluent and voluble but insincere",
    russian: "бойкий, гладкий, поверхностный",
    example: "He offered a glib apology that no one believed.",
    tip: "Remember: (of words or the person speaking them) fluent and voluble but insincere",
    partOfSpeech: "noun"
  },
{
    word: "gloat",
    definition: "to contemplate or dwell on one's own success or another's misfortune",
    russian: "злорадствовать, торжествовать",
    example: "It is not polite to gloat over your victory.",
    tip: "Remember: to contemplate or dwell on one's own success or another's misfortune",
    partOfSpeech: "verb"
  },
{
    word: "glut",
    definition: "an excessively abundant supply of something",
    russian: "избыток, пресыщение; пресыщать",
    example: "There is a glut of cheap apartments in the city.",
    tip: "Remember: an excessively abundant supply of something",
    partOfSpeech: "noun"
  },
{
    word: "gossamer",
    definition: "used to refer to something very light, thin, and insubstantial",
    russian: "паутина, тонкая ткань; легкий, воздушный",
    example: "The spider spun a gossamer web.",
    tip: "Remember: used to refer to something very light, thin, and insubstantial",
    partOfSpeech: "noun"
  },
{
    word: "grandeur",
    definition: "splendor and impressiveness, especially of appearance or style",
    russian: "величие, пышность, великолепие",
    example: "They were struck by the grandeur of the mountains.",
    tip: "Remember: splendor and impressiveness, especially of appearance or style",
    partOfSpeech: "adjective"
  },
{
    word: "grandiloquent",
    definition: "pompous or extravagant in language, style, or manner",
    russian: "высокопарный, напыщенный, помпезный",
    example: "His grandiloquent speech bored the audience.",
    tip: "Remember: pompous or extravagant in language, style, or manner",
    partOfSpeech: "adjective"
  },
{
    word: "grandiose",
    definition: "impressive and imposing in appearance or style, especially pretentiously so",
    russian: "грандиозный, великолепный, внушительный",
    example: "He had grandiose plans to build a new city.",
    tip: "Remember: impressive and imposing in appearance or style, especially pretentiously so",
    partOfSpeech: "adjective"
  },
{
    word: "graphic",
    definition: "relating to visual art; giving vivid detail",
    russian: "графический, наглядный, живописный",
    example: "The news report gave a graphic description of the accident.",
    tip: "Remember: relating to visual art",
    partOfSpeech: "adjective"
  },
{
    word: "esoteric",
    definition: "intended for or understood by only a small number of people with specialized knowledge",
    russian: "эзотерический, что-то сверхестественное",
    example: "The professor's lecture on quantum mechanics was too esoteric for most students.",
    tip: "Esoteric = rare knowledge for the few, mysterious and specialized.",
    partOfSpeech: "adjective"
  },
{
    word: "foraging",
    definition: "searching widely for food or provisions",
    russian: "поиск еды, добыча пищи",
    example: "The squirrels were foraging for acorns in the forest.",
    tip: "Foraging = hunting FOR food in nature.",
    partOfSpeech: "verb"
  },
{
    word: "negligibly",
    definition: "to such a small degree as to be not worth considering; insignificantly",
    russian: "незначительно, пренебрежимо мало",
    example: "The price difference was negligibly small.",
    tip: "Negligibly = so small you can neglect it, basically nothing.",
    partOfSpeech: "adverb"
  },
{
    word: "bolster",
    definition: "to support or strengthen; to prop up",
    russian: "усилить, поддержать, укрепить",
    example: "The new evidence will bolster their argument.",
    tip: "Bolster = boost and strengthen, like a pillow supports your head.",
    partOfSpeech: "verb"
  },
{
    word: "resistance",
    definition: "the refusal to accept or comply with something; the ability to withstand or oppose",
    russian: "сопротивление, устойчивость",
    example: "The bacteria showed resistance to antibiotics.",
    tip: "Resistance = standing against, refusing to give in.",
    partOfSpeech: "noun"
  },
{
    word: "vertebrates",
    definition: "animals having a backbone or spinal column",
    russian: "позвоночные животные",
    example: "Mammals, birds, and fish are all vertebrates.",
    tip: "Vertebrates have vertebrae (backbones) in their spine.",
    partOfSpeech: "noun"
  },
{
    word: "shrank",
    definition: "became smaller in size or amount (past tense of shrink)",
    russian: "уменьшился, сократился",
    example: "His confidence shrank after the criticism.",
    tip: "Shrank = got smaller, like a sweater in hot water.",
    partOfSpeech: "verb"
  },
{
    word: "extinction",
    definition: "the state or process of being or becoming extinct; complete disappearance",
    russian: "вымирание, исчезновение",
    example: "Many species are facing extinction due to climate change.",
    tip: "Extinction = being extinguished forever, no longer existing.",
    partOfSpeech: "noun"
  },
{
    word: "swelled",
    definition: "became larger or rounder in size, typically as a result of accumulation (past tense of swell)",
    russian: "увеличился, раздулся, набух",
    example: "The crowd swelled to over 10,000 people.",
    tip: "Swelled = expanded and grew bigger, opposite of shrank.",
    partOfSpeech: "verb"
  },
{
    word: "moderated",
    definition: "made or became less extreme, intense, or violent",
    russian: "умерить, сделать умеренным",
    example: "He moderated his tone after seeing her reaction.",
    tip: "Moderated = made moderate, toned down to middle ground.",
    partOfSpeech: "verb"
  },
{
    word: "facilitated",
    definition: "made an action or process easy or easier; helped bring about",
    russian: "способствовал, облегчил, предоставил возможность",
    example: "The new software facilitated communication between teams.",
    tip: "Facilitated = made it easy (facile), helped things happen smoothly.",
    partOfSpeech: "verb"
  },
{
    word: "exerted",
    definition: "applied or brought to bear (a force, influence, or quality)",
    russian: "оказывал давление, прилагал усилия",
    example: "She exerted pressure on the committee to change the policy.",
    tip: "Exerted = pushed out force or effort, applied energy.",
    partOfSpeech: "verb"
  },
{
    word: "alternates",
    definition: "occurs in turn repeatedly; switches back and forth between two things",
    russian: "переключается между, чередуется",
    example: "The weather alternates between rain and sunshine.",
    tip: "Alternates = goes back and forth, takes turns between options.",
    partOfSpeech: "verb"
  },
{
    word: "posthumously",
    definition: "occurring, awarded, or appearing after the death of the person involved",
    russian: "посмертно, после смерти",
    example: "The author's final novel was published posthumously.",
    tip: "Posthumous = POST (after) death, happening after someone dies.",
    partOfSpeech: "adverb"
  }
];