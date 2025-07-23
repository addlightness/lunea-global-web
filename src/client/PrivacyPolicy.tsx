import React from "react";

const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: 700, margin: "40px auto", color: "#ccc", background: "#181818", padding: 32, borderRadius: 12, fontSize: 16 }}>
      <h1>Lunea – Privacy Policy</h1>
      <em>Effective date: {today}</em>
      <blockquote style={{ color: "#aaa", fontStyle: "italic", margin: "24px 0" }}>
        This document is a template prepared for Lunea based on the data-collection settings you entered in App Store Connect. It is not legal advice. Please have qualified counsel review, localize, and finalize the text before publishing.
      </blockquote>
      <hr />
      <h3>1. Who We Are</h3>
      <p>Lunea (“<b>we</b>,” “<b>our</b>,” or “<b>us</b>”) is a mobile application that delivers personalized lunar, astrological, and wellness content.<br />
      • Email: <a href="mailto:support@lunea-astrology.com">support@lunea-astrology.com</a></p>
      <hr />
      <h3>2. Scope & Acceptance</h3>
      <p>By installing or using Lunea you agree to the collection, use, disclosure, and retention of information as described below. If you do not agree, please uninstall the app and discontinue use.</p>
      <hr />
      <h3>3. Information We Collect</h3>
      <table style={{ width: "100%", color: "#ccc", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #333" }}>
            <th>Category (App Store label)</th>
            <th>Specific data</th>
            <th>Purpose</th>
            <th>Apple’s “Linked to You” status</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><b>Contact Info</b></td><td>Name; Email address</td><td>Account creation, in-app support, service announcements, optional marketing</td><td><b>Linked</b></td></tr>
          <tr><td><b>Location</b></td><td>Precise GPS; Coarse (city/region)</td><td>To calculate accurate birth charts & local lunar events</td><td><b>Linked</b></td></tr>
          <tr><td><b>Sensitive Info</b></td><td>Birth date, birth time, birth location, gender label you choose</td><td>To generate personalized horoscopes</td><td><b>Linked</b></td></tr>
          <tr><td><b>Contacts</b></td><td>Optional: names & birthdays you import</td><td>To personalize compatibility features; never stored on our servers unless you opt in</td><td><b>Linked</b></td></tr>
          <tr><td><b>User Content</b></td><td>Messages & attachments you send to Support</td><td>Troubleshooting analytics</td><td><b>Linked</b></td></tr>
          <tr><td><b>Identifiers</b></td><td>Internal user ID; (if you opt in) Apple IDFV; Push-token</td><td>Authentication, syncing, crash diagnostics</td><td><b>Linked</b></td></tr>
          <tr><td><b>Usage Data</b></td><td>Screen taps, feature usage, session length</td><td>Product analytics & UX optimization</td><td>Not linked</td></tr>
          <tr><td><b>Diagnostics</b></td><td>Crash logs, performance metrics (CPU, memory)</td><td>Bug fixing & service reliability</td><td>Not linked</td></tr>
        </tbody>
      </table>
      <p style={{ marginTop: 12 }}><b>We do not collect:</b> photos, videos, health data, or government-issued IDs.</p>
      <hr />
      <h3>4. How We Use Your Information</h3>
      <ol>
        <li><b>Core App Functionality</b> – calculate charts, deliver daily forecasts, sync widgets, and back up your preferences.</li>
        <li><b>Personalization</b> – surface content relevant to your sign, location, and language.</li>
        <li><b>Analytics</b> – understand feature popularity, improve stability, and plan new functionality.</li>
        <li><b>Customer Support</b> – answer your questions and resolve technical issues.</li>
        <li><b>Marketing</b> – with your consent, email you about new features, offers, or events. You may unsubscribe at any time.</li>
      </ol>
      <p>We rely on the following legal bases (GDPR): performance of contract, legitimate interests (product improvement, fraud prevention), and consent (marketing, precise location, contacts import).</p>
      <hr />
      <h3>5. Sharing & Disclosure</h3>
      <table style={{ width: "100%", color: "#ccc", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #333" }}>
            <th>Recipient</th>
            <th>Reason</th>
            <th>Safeguards</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><b>Service Providers</b> (e.g., cloud hosting, analytics, crash reporting, email delivery)</td><td>Operate and improve the app</td><td>Data-processing agreements; limited to purpose</td></tr>
          <tr><td><b>Advertising partners</b> (only if you opt-in to marketing)</td><td>Send promotional email</td><td>Email address only</td></tr>
          <tr><td><b>Legal & Safety</b></td><td>Comply with law, protect rights, investigate fraud</td><td>As required by applicable law</td></tr>
          <tr><td><b>Business Transfers</b></td><td>In the event of a merger, acquisition, or asset sale</td><td>Notice to users; successor bound by this Policy</td></tr>
        </tbody>
      </table>
      <p style={{ marginTop: 12 }}><b>We do not sell your personal data</b> and we do not permit third-party ad networks to track you across other apps or websites.</p>
      <hr />
      <h3>6. Retention</h3>
      <ul>
        <li>Account data – while you maintain an account, then 30 days after deletion</li>
        <li>Precise location – processed in real time; never stored server-side</li>
        <li>Crash/analytics logs – 24 months</li>
        <li>Email marketing suppression list – indefinitely (to honor opt-out)</li>
      </ul>
      <hr />
      <h3>7. Security</h3>
      <p>We use industry-standard safeguards: encrypted transit (TLS 1.2+), encrypted storage (AES-256), least-privilege access controls, and regular penetration testing. No system is 100% secure; please contact us immediately if you believe your account has been compromised.</p>
      <hr />
      <h3>8. Your Rights & Choices</h3>
      <table style={{ width: "100%", color: "#ccc", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #333" }}>
            <th>If you are…</th>
            <th>You may</th>
            <th>How</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><b>Any user</b></td><td>Access, correct, or delete your data; opt out of marketing</td><td>In-app <b>Settings → Privacy</b>, or email us</td></tr>
          <tr><td><b>California resident (CCPA)</b></td><td>Request categories, specific pieces, or deletion; opt out of “sharing”</td><td>Same as above; we honor “Do Not Sell/Share”</td></tr>
          <tr><td><b>EEA/UK resident (GDPR)</b></td><td>Object, restrict, data portability, lodge complaint</td><td>Email us; supervisory authority in your country</td></tr>
          <tr><td><b>Opting out of Location</b></td><td>Disable location access in iOS Settings &gt; Privacy & Security &gt; Location Services</td><td>Some features will be limited</td></tr>
        </tbody>
      </table>
      <hr />
      <h3>9. Children’s Privacy</h3>
      <p>Lunea is <b>not directed to children under 13</b> (or equivalent minimum age in your jurisdiction). We do not knowingly collect personal data from children. If you are a parent or guardian and believe your child provided data, contact us for deletion.</p>
      <hr />
      <h3>10. International Transfers</h3>
      <p>We process data in the United States and other countries. Where required, we rely on Standard Contractual Clauses or equivalent safeguards for cross-border transfers.</p>
      <hr />
      <h3>11. Changes to This Policy</h3>
      <p>We may update this Policy to reflect changes in law or product features. Material changes will be announced in-app or by email at least 14 days before they take effect. Continued use after the effective date constitutes acceptance.</p>
      <hr />
      <h3>12. Contact Us</h3>
      <p>For privacy questions, data requests, or complaints, please email <a href="mailto:support@lunea-astrology.com">support@lunea-astrology.com</a></p>
      <blockquote style={{ color: "#aaa", fontStyle: "italic" }}>
      </blockquote>
      <hr />
      <em>Last revised: {today}</em>
    </div>
  );
} 