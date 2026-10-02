export interface LegalSection {
  id: string;
  title: string;
  /** Paragraphs. `{email}` is replaced with a mailto link. */
  paragraphs?: string[];
  items?: string[];
  /** Paragraphs shown after the list. */
  after?: string[];
}

export interface LegalDocument {
  title: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
}

export const LEGAL_UPDATED = "2 October 2026";
export const LEGAL_EMAIL = "hello@sliiqque.space";
