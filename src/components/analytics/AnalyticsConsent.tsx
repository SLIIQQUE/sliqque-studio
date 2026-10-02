"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { CONSENT_KEY, GA_MEASUREMENT_ID, OPEN_SETTINGS_EVENT } from "@/lib/analytics";

type Consent = "granted" | "denied" | null;

const readConsent = (): Consent => {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
};

/** Removes Google Analytics cookies when a visitor declines or withdraws consent. */
const clearAnalyticsCookies = () => {
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (name !== "_ga" && !name.startsWith("_ga_")) return;
    const host = window.location.hostname.split(".");
    for (let i = 0; i < host.length - 1; i++) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${host.slice(i).join(".")}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  });
};

const button =
  "px-5 py-3 font-body font-bold text-[10px] uppercase tracking-[0.2em] transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none";

/**
 * Loads Google Analytics only after the visitor accepts, and shows the choice banner.
 * Nothing is sent to Google before consent.
 */
export function AnalyticsConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setOpen(stored === null);
    setReady(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  const choose = useCallback((value: "granted" | "denied") => {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* storage unavailable: the choice applies for this visit only */
    }
    if (value === "denied") clearAnalyticsCookies();
    setConsent(value);
    setOpen(false);
  }, []);

  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
          </Script>
        </>
      )}

      {ready && open && (
        <div
          role="dialog"
          aria-label="Analytics cookies"
          className="fixed z-[60] bottom-4 left-4 right-4 md:right-auto md:max-w-md bg-[#0a0a0a] border border-white/10 p-5 shadow-2xl"
        >
          <p className="text-sm font-body text-white/70 leading-relaxed mb-4">
            We use Google Analytics cookies to understand how the site is used. Nothing is loaded unless you accept. Read
            our{" "}
            <Link href="/privacy/#cookies" className="text-white underline underline-offset-2 hover:no-underline">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex gap-3">
            <button type="button" onClick={() => choose("granted")} className={`${button} bg-white text-black hover:bg-white/90`}>
              Accept
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className={`${button} border border-white/20 text-white/80 hover:text-white hover:border-white/40`}
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
