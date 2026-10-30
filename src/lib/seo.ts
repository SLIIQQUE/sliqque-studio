const MONTHS: Record<string, string> = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
  Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
};

/** "Jun 2026" -> "2026-06". Month precision on purpose: the visible dates carry no day, so none is invented. */
export const displayDateToIso = (displayDate: string) => {
  const [month, year] = displayDate.split(" ");
  return `${year}-${MONTHS[month]}`;
};

/** "Why AI Natives" -> "why-ai-natives", for heading ids that deep links and citations can target. */
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
