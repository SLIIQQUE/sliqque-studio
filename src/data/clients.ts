/**
 * Companies the founder has worked with, shown in the "Worked with" strip on the home page.
 *
 * Rules (RULES.md: zero fabrication; COMPANY.md: client work is shown only with permission):
 * - Add an entry only when the company has agreed in writing to be listed, then set `permission: true`.
 * - Entries without `permission: true` are never rendered.
 * - Logos: put a transparent SVG or PNG in `public/images/clients/` and set `logoSrc`. The strip draws every
 *   logo in white, so any colour works. Without a logo the company name is shown as text.
 * - The strip stays hidden until at least MIN_CLIENTS entries have permission, so it never looks empty.
 */
export interface Client {
  name: string;
  /** Path under /public, for example "/images/clients/acme.svg". Optional. */
  logoSrc?: string;
  /** Optional link to the company's site. */
  url?: string;
  /** True only when written permission to list this company has been received. */
  permission: boolean;
}

export const MIN_CLIENTS = 3;

export const clients: Client[] = [
  { name: "Mo Touch", url: "https://mo-touch.vercel.app/", permission: true },
];

export const permittedClients = (): Client[] => clients.filter((c) => c.permission);
