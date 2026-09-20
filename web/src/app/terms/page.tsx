import type { Metadata } from "next";
import "../legal.css";

export const metadata: Metadata = {
  title: "Terms of Service — ePurse",
  description: "Terms for using the ePurse app.",
};

export default function TermsPage() {
  return (
    <article className="container legal">
      <h1>Terms of Service</h1>
      <span className="legal__updated">Draft — pending legal review. Last updated 2026-09-20.</span>

      <p>
        These terms govern your use of the ePurse app. By using ePurse, you agree to
        the terms below.
      </p>

      <h2>What ePurse is</h2>
      <p>
        ePurse is a personal finance tracker that reads transaction SMS on-device to
        record spends, income, budgets and goals. It is a tracking tool, not a payment
        or banking service — ePurse cannot move money, initiate payments, or access
        your bank accounts directly.
      </p>

      <h2>Your responsibility</h2>
      <ul>
        <li>You are responsible for the accuracy of manually entered transactions.</li>
        <li>Auto-parsed transactions depend on your bank&apos;s SMS format; ePurse does its best to parse correctly but cannot guarantee it for every sender or message format.</li>
        <li>You are responsible for keeping your device and any App Lock credentials secure.</li>
      </ul>

      <h2>No warranty</h2>
      <p>
        ePurse is provided &quot;as is&quot;, without warranty of any kind. We do not
        guarantee that the app will be error-free or available at all times.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms as the app evolves. Material changes will be reflected
        on this page with an updated date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href="mailto:support@epurse.co.in">support@epurse.co.in</a>.
      </p>
    </article>
  );
}
