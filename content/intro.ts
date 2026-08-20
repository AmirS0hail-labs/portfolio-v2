export const INTRO_STORAGE_KEY = "amir-intro-seen";

/** Greeting flash, then a short fade. Total budget 1.5s. */
export const INTRO_CYCLE_MS = 1250;
export const INTRO_FADE_MS = 250;

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

/** Runs before paint so the canvas overlay is up before hydration. */
export const introGateScript = `(function(){try{if(location.pathname!=="/")return;if(sessionStorage.getItem(${JSON.stringify(INTRO_STORAGE_KEY)})||matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.dataset.intro="skip";return}document.documentElement.dataset.intro="pending"}catch(e){document.documentElement.dataset.intro="skip"}})();`;
