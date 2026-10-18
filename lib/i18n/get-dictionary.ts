import { en, type Dictionary } from "@/lib/i18n/dictionaries/en";
import { ja } from "@/lib/i18n/dictionaries/ja";
import type { Locale } from "@/lib/i18n/config";

const dictionaries: Record<Locale, Dictionary> = { en, ja };

/**
 * Dictionaries are small, typed TS objects imported statically, so this is
 * synchronous. Only call from Server Components / server actions — client
 * components receive the strings they need as props.
 */
export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}

/** Tiny interpolation helper: fill("Hi {name}", { name: "Sree" }) */
export function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => vars[k] ?? `{${k}}`);
}

export type { Dictionary };
