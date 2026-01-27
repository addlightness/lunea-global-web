import React from "react";

const FAQ = [
  {
    question: "Notifications aren’t arriving or are arriving late?",
    answer:
      "Double-check that notifications are enabled for Lunea in iOS Settings and that Focus mode isn’t silencing them. If you see multiple devices, force-quit the app on the other device to stop duplicate scheduling.",
  },
  {
    question: "Globe widgets or timeline tiles show zeros or stale data?",
    answer:
      "Open Lunea and tap “Refresh” (bottom-right globe icon) then wait 20–30 seconds before reviewing the widgets; widgets may also need a device restart if they were added before the latest app update.",
  },
  {
    question: "Timezone/location looks wrong in charts?",
    answer:
      "Confirm the location saved under Settings → Location matches the desired city, then force-close the app and relaunch so we can recompute the chart with the latest GPS fix.",
  },
  {
    question: "How do I restore my Moon Plus/subscription purchases?",
    answer:
      "Go to Settings → Subscription → Restore Purchases, then sign in with the Apple ID that originally bought Moon Plus. If that still fails, email us the receipt Apple emailed you so we can verify.",
  },
  {
    question: "Why is the AI oracle or daily forecast different from what I expect?",
    answer:
      "We calculate everything from your precise birth data and the current planetary transits; small timing or location corrections can shift interpretations, so share any updated birth info with us and we’ll recompute your chart.",
  },
];

export default function SupportPage() {
  return (
    <div className="support-page">
      <section className="support-hero">
        <div>
          <h1>Contact Support</h1>
          <p>
            Email{" "}
            <a href="mailto:support@lunea-astrology.com">support@lunea-astrology.com</a> with a short description
            of the issue and we’ll reply within 24 hours on weekdays.
          </p>
        </div>
        <div className="support-commitment">
          <strong>Expected response time</strong>
          <p>24h on weekdays · 48h over weekends and holidays</p>
        </div>
      </section>

      <section>
        <h2>How to reach us</h2>
        <p>We prioritize support-first answers, so please include the basics up-front.</p>
        <ul>
          <li>Summarize the problem in one sentence (for example: “widget shows old phase”).</li>
          <li>Mention exactly what you tapped or changed before the issue appeared.</li>
          <li>Attach a screenshot when visuals help us reproduce the issue.</li>
        </ul>
      </section>

      <section>
        <h2>Support basics</h2>
        <p>
          Lunea is built around lunar data and personal charts, so these checks help us troubleshoot faster:
        </p>
        <ul>
          <li>Ping your device’s Date & Time settings to ensure automatic time zone sync.</li>
          <li>Compare your in-app birth chart data to what you entered in App Store Connect.</li>
          <li>Restart the app after major iOS updates before assuming a feature is broken.</li>
        </ul>
      </section>

      <section>
        <h2>FAQ for common situations</h2>
        {FAQ.map((entry) => (
          <div key={entry.question} className="faq-item">
            <h3>{entry.question}</h3>
            <p>{entry.answer}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Report a bug</h2>
        <p>
          For anything that looks like a crash, graphic glitch, or missing content, email us the following:
        </p>
        <ol>
          <li>Device name (e.g., “iPhone 15 Pro”) and iOS version (e.g., “iOS 19.0”).</li>
          <li>App version (shown in Settings → About at the bottom of the screen).</li>
          <li>Steps you took before the bug appeared.</li>
          <li>Optional: attach a screenshot or screen recording.</li>
        </ol>
        <p>
          Mention if you were connected to Wi-Fi or cellular and whether you were in Low Power Mode, as that
          sometimes affects background updates.
        </p>
      </section>
    </div>
  );
}
