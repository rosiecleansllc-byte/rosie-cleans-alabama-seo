"use client";

import { useEffect } from "react";
import { GA_MEASUREMENT_ID, trackScrollDepth } from "@/lib/analytics";
import Script from "next/script";

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

export function ScrollDepthTracker() {
  useEffect(() => {
    let fired50 = false;
    let fired90 = false;

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = (scrollTop / docHeight) * 100;

      if (!fired50 && pct >= 50) {
        fired50 = true;
        trackScrollDepth(50);
      }
      if (!fired90 && pct >= 90) {
        fired90 = true;
        trackScrollDepth(90);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
