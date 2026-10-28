/**
 * Industries the founder has shipped websites in, shown inside the "By The Numbers" marquee.
 *
 * Rules:
 * - This list never names a client or shows a client logo. A company can be named or shown only
 *   after written permission (COMPANY.md: client work is shown only with permission).
 * - Adding an industry is not a client claim. It describes the range of the founder's work.
 * - If a permitted client strip is added later, keep it in a separate data file and render it only
 *   for entries with permission.
 */
export type IndustryMark =
  | "fintech"
  | "regtech"
  | "beauty"
  | "realestate"
  | "creative"
  | "salesops";

export interface Industry {
  label: string;
  mark: IndustryMark;
}

export const industries: Industry[] = [
  { label: "FinTech", mark: "fintech" },
  { label: "RegTech", mark: "regtech" },
  { label: "Beauty", mark: "beauty" },
  { label: "Real Estate", mark: "realestate" },
  { label: "Creative", mark: "creative" },
  { label: "Sales Ops", mark: "salesops" },
];
