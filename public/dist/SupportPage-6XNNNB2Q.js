import {
  __toESM,
  require_react
} from "./chunk-ODPORMEJ.js";

// src/client/SupportPage.tsx
var import_react = __toESM(require_react());
var FAQ = [
  {
    question: "Notifications aren\u2019t arriving or are arriving late?",
    answer: "Double-check that notifications are enabled for Lunea in iOS Settings and that Focus mode isn\u2019t silencing them. If you see multiple devices, force-quit the app on the other device to stop duplicate scheduling."
  },
  {
    question: "Globe widgets or timeline tiles show zeros or stale data?",
    answer: "Open Lunea and tap \u201CRefresh\u201D (bottom-right globe icon) then wait 20\u201330 seconds before reviewing the widgets; widgets may also need a device restart if they were added before the latest app update."
  },
  {
    question: "Timezone/location looks wrong in charts?",
    answer: "Confirm the location saved under Settings \u2192 Location matches the desired city, then force-close the app and relaunch so we can recompute the chart with the latest GPS fix."
  },
  {
    question: "How do I restore my Moon Plus/subscription purchases?",
    answer: "Go to Settings \u2192 Subscription \u2192 Restore Purchases, then sign in with the Apple ID that originally bought Moon Plus. If that still fails, email us the receipt Apple emailed you so we can verify."
  },
  {
    question: "Why is the AI oracle or daily forecast different from what I expect?",
    answer: "We calculate everything from your precise birth data and the current planetary transits; small timing or location corrections can shift interpretations, so share any updated birth info with us and we\u2019ll recompute your chart."
  }
];
function SupportPage() {
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "support-page" }, /* @__PURE__ */ import_react.default.createElement("section", { className: "support-hero" }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("h1", null, "Contact Support"), /* @__PURE__ */ import_react.default.createElement("p", null, "Email", " ", /* @__PURE__ */ import_react.default.createElement("a", { href: "mailto:support@lunea-astrology.com" }, "support@lunea-astrology.com"), " with a short description of the issue and we\u2019ll reply within 24 hours on weekdays.")), /* @__PURE__ */ import_react.default.createElement("div", { className: "support-commitment" }, /* @__PURE__ */ import_react.default.createElement("strong", null, "Expected response time"), /* @__PURE__ */ import_react.default.createElement("p", null, "24h on weekdays \xB7 48h over weekends and holidays"))), /* @__PURE__ */ import_react.default.createElement("section", null, /* @__PURE__ */ import_react.default.createElement("h2", null, "How to reach us"), /* @__PURE__ */ import_react.default.createElement("p", null, "We prioritize support-first answers, so please include the basics up-front."), /* @__PURE__ */ import_react.default.createElement("ul", null, /* @__PURE__ */ import_react.default.createElement("li", null, "Summarize the problem in one sentence (for example: \u201Cwidget shows old phase\u201D)."), /* @__PURE__ */ import_react.default.createElement("li", null, "Mention exactly what you tapped or changed before the issue appeared."), /* @__PURE__ */ import_react.default.createElement("li", null, "Attach a screenshot when visuals help us reproduce the issue."))), /* @__PURE__ */ import_react.default.createElement("section", null, /* @__PURE__ */ import_react.default.createElement("h2", null, "Support basics"), /* @__PURE__ */ import_react.default.createElement("p", null, "Lunea is built around lunar data and personal charts, so these checks help us troubleshoot faster:"), /* @__PURE__ */ import_react.default.createElement("ul", null, /* @__PURE__ */ import_react.default.createElement("li", null, "Ping your device\u2019s Date & Time settings to ensure automatic time zone sync."), /* @__PURE__ */ import_react.default.createElement("li", null, "Compare your in-app birth chart data to what you entered in App Store Connect."), /* @__PURE__ */ import_react.default.createElement("li", null, "Restart the app after major iOS updates before assuming a feature is broken."))), /* @__PURE__ */ import_react.default.createElement("section", null, /* @__PURE__ */ import_react.default.createElement("h2", null, "FAQ for common situations"), FAQ.map((entry) => /* @__PURE__ */ import_react.default.createElement("div", { key: entry.question, className: "faq-item" }, /* @__PURE__ */ import_react.default.createElement("h3", null, entry.question), /* @__PURE__ */ import_react.default.createElement("p", null, entry.answer)))), /* @__PURE__ */ import_react.default.createElement("section", null, /* @__PURE__ */ import_react.default.createElement("h2", null, "Report a bug"), /* @__PURE__ */ import_react.default.createElement("p", null, "For anything that looks like a crash, graphic glitch, or missing content, email us the following:"), /* @__PURE__ */ import_react.default.createElement("ol", null, /* @__PURE__ */ import_react.default.createElement("li", null, "Device name (e.g., \u201CiPhone 15 Pro\u201D) and iOS version (e.g., \u201CiOS 19.0\u201D)."), /* @__PURE__ */ import_react.default.createElement("li", null, "App version (shown in Settings \u2192 About at the bottom of the screen)."), /* @__PURE__ */ import_react.default.createElement("li", null, "Steps you took before the bug appeared."), /* @__PURE__ */ import_react.default.createElement("li", null, "Optional: attach a screenshot or screen recording.")), /* @__PURE__ */ import_react.default.createElement("p", null, "Mention if you were connected to Wi-Fi or cellular and whether you were in Low Power Mode, as that sometimes affects background updates.")));
}
export {
  SupportPage as default
};
//# sourceMappingURL=SupportPage-6XNNNB2Q.js.map
