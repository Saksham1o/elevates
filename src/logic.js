const INTENTS = {
  greeting: [
    "hi","hello","hey","yo","good morning","good evening","good afternoon"
  ],

  services: [
    "services","offer","what do you do","what services","what can you build",
    "website services","ai services","automation services","what do you provide"
  ],

  tech: [
    "tech","stack","technology","react","next","nextjs","tailwind",
    "python","firebase","backend","frontend","languages","tools"
  ],

  pricing: [
    "price","pricing","cost","charge","fees","budget","how much",
    "quote","estimate","rate","package"
  ],

  contact: [
    "contact","email","reach","hire","get in touch","call","connect",
    "work with you","start project","book"
  ],

  project: [
    "build","website","project","create site","make website","develop",
    "landing page","portfolio","web app"
  ],

  timeline: [
    "time","timeline","how long","duration","delivery","deadline"
  ]
};

// responses (tight, premium tone)
const RESPONSES = {
  greeting: "State your requirement—website, performance, or automation.",

  services: "Website redesign, performance optimization, AI integrations, and automation systems.",

  tech: "React, Next.js, Tailwind on frontend. Python + Firebase for backend and AI workflows.",

  pricing: "Project-based pricing. Scope defines cost. Share requirements for a quote.",

  contact: "Use the form on this page or email: helloelevatesweb@gmail.com",

  project: "Good. Define your goal—leads, sales, or branding. I’ll guide the structure.",

  timeline: "Typical delivery: 3–10 days depending on scope."
};

// strict fallback
const FALLBACK =
  "I only handle queries related to Saksham’s services, projects, pricing, or hiring.";



// simple similarity (not perfect, but effective)
const similarity = (a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();

  let matches = 0;
  for (let char of a) {
    if (b.includes(char)) matches++;
  }
  return matches / Math.max(a.length, b.length);
};


const detectIntent = (input) => {
  input = input.toLowerCase();

  let bestIntent = null;
  let bestScore = 0;

  for (let intent in INTENTS) {
    for (let phrase of INTENTS[intent]) {

      if (input.includes(phrase)) {
        return intent;
      }

      const score = similarity(input, phrase);
      if (score > bestScore) {
        bestScore = score;
        bestIntent = intent;
      }
    }
  }

  if (bestScore > 0.6) return bestIntent;

  return null;
};



const generateResponse = (input, step, setStep) => {
  const intent = detectIntent(input);

  // ---- FLOW HANDLING ----
  if (intent === "project") {
    setStep("awaiting_goal");
    return RESPONSES.project;
  }

  if (
    step === "awaiting_goal" &&
    (input.includes("lead") || input.includes("sale") || input.includes("business"))
  ) {
    setStep("initial");
    return "Understood. Click 'Fix My Website' and submit details. Saksham will respond directly.";
  }

  if (intent && RESPONSES[intent]) {
    return RESPONSES[intent];
  }

  return FALLBACK;
};

export { generateResponse };