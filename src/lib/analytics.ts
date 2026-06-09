declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export function trackEvent(
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, parameters);
}

export const AnalyticsEvents = {
  BOOK_ONLINE_CLICK: "book_online_click",
  PHONE_CLICK: "phone_click",
  FAQ_EXPAND: "faq_expand",
  PAGE_SCROLL_50: "page_scroll_50",
  PAGE_SCROLL_90: "page_scroll_90",
} as const;

export function trackBookOnlineClick(location?: string) {
  trackEvent(AnalyticsEvents.BOOK_ONLINE_CLICK, {
    event_category: "CTA",
    event_label: location || "unknown",
  });
}

export function trackPhoneClick(location?: string) {
  trackEvent(AnalyticsEvents.PHONE_CLICK, {
    event_category: "CTA",
    event_label: location || "unknown",
  });
}

export function trackFaqExpand(question: string) {
  trackEvent(AnalyticsEvents.FAQ_EXPAND, {
    event_category: "Engagement",
    event_label: question,
  });
}

export function trackScrollDepth(depth: 50 | 90) {
  trackEvent(depth === 50 ? AnalyticsEvents.PAGE_SCROLL_50 : AnalyticsEvents.PAGE_SCROLL_90, {
    event_category: "Scroll",
    event_label: `${depth}%`,
  });
}
