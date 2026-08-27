export const INTRO_STORAGE_KEY = "amir-intro-seen";

/** Greeting flash, then a short fade. Total budget 1.5s. */
export const INTRO_CYCLE_MS = 1250;
export const INTRO_FADE_MS = 250;
/** If hydration never starts the overlay, drop the black cover. */
export const INTRO_FAIL_OPEN_MS = 2000;

export const greetings: {
  text: string;
  lang: string;
  dir?: "rtl";
}[] = [
  { text: "Hello", lang: "en" },
  { text: "سلام", lang: "ar", dir: "rtl" },
  { text: "Bonjour", lang: "fr" },
  { text: "Hallo", lang: "de" },
  { text: "Hola", lang: "es" },
  { text: "Ciao", lang: "it" },
  { text: "Olá", lang: "pt" },
  { text: "Здравствуйте", lang: "ru" },
  { text: "你好", lang: "zh" },
  { text: "こんにちは", lang: "ja" },
];

export function greetingAt(index: number) {
  if (greetings.length === 0) return undefined;
  const i = Number.isFinite(index)
    ? Math.max(0, Math.min(Math.trunc(index), greetings.length - 1))
    : 0;
  return greetings[i];
}

/** Runs before paint so the canvas overlay is up before hydration. */
export const introGateScript = `(function(){try{var h=document.documentElement;if(location.pathname!=="/")return;if(sessionStorage.getItem(${JSON.stringify(INTRO_STORAGE_KEY)})||matchMedia("(prefers-reduced-motion: reduce)").matches){h.dataset.intro="skip";return}h.dataset.intro="pending";setTimeout(function(){if(h.dataset.intro==="pending")h.removeAttribute("data-intro")},${INTRO_FAIL_OPEN_MS})}catch(e){try{document.documentElement.removeAttribute("data-intro")}catch(_){}}})();`;
