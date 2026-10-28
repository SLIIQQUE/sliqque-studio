import type { ReactNode } from "react";
import type { IndustryMark } from "@/data/industries";

const markStroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const marks: Record<IndustryMark, ReactNode> = {
  fintech: (
    <>
      <path d="M12 2.75 21.25 12 12 21.25 2.75 12Z" />
      <path d="M12 7.25 16.75 12 12 16.75 7.25 12Z" />
      <path d="M12 9.75v4.5M9.75 12h4.5" />
    </>
  ),
  regtech: (
    <>
      <path d="M12 2.75 20 6v6.1c0 4.4-3.2 7.9-8 9.9-4.8-2-8-5.5-8-9.9V6Z" />
      <path d="m8.75 12.25 2.25 2.25 4.5-4.75" />
    </>
  ),
  beauty: (
    <>
      <path d="M12 3.25c2.15 3.9 4.85 6.6 8.75 8.75-3.9 2.15-6.6 4.85-8.75 8.75-2.15-3.9-4.85-6.6-8.75-8.75 3.9-2.15 6.6-4.85 8.75-8.75Z" />
      <circle cx="12" cy="12" r="2.25" />
    </>
  ),
  realestate: (
    <>
      <path d="M3.5 10.75 12 3.5l8.5 7.25" />
      <path d="M5.75 9.5v10.25h12.5V9.5" />
      <path d="M10 19.75v-5.5h4v5.5" />
    </>
  ),
  creative: (
    <>
      <circle cx="9.25" cy="12" r="5.75" />
      <circle cx="14.75" cy="12" r="5.75" />
    </>
  ),
  salesops: (
    <>
      <path d="M4 19.5h16" />
      <path d="M6.5 19.5v-5.25M11 19.5v-9.5M15.5 19.5v-6.75M20 19.5v-13" />
    </>
  ),
};

export function IndustryMarkIcon({
  mark,
  className = "h-4 w-4",
}: {
  mark: IndustryMark;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...markStroke}>
      {marks[mark]}
    </svg>
  );
}
