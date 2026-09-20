import type { Metadata } from "next";
import "../legal.css";

export const metadata: Metadata = {
  title: "Privacy Policy — ePurse",
  description: "How ePurse handles your data: on-device by default, nothing sent to a server.",
};

export default function PrivacyPage() {
  return (
    <article className="container legal">
      <h1>Privacy Policy</h1>
      <span className="legal__updated">Draft — pending legal review. Last updated 2026-09-20.</span>

      <p>
        ePurse is built with no backend. This policy describes what actually happens on
        your device, because that is the entirety of how ePurse handles your data.
      </p>

      <h2>What ePurse reads</h2>
      <p>
        With your permission, ePurse reads transaction-related SMS from your device to
        automatically record spends, income and bill due dates. This parsing happens
        entirely on-device. The raw SMS content is never uploaded, transmitted, or sent
        to any server — ePurse does not have a server to send it to.
      </p>

      <h2>Where your data lives</h2>
      <p>
        Transactions, accounts, budgets, goals, groups and lent/borrowed records are
        stored locally on your device. ePurse does not sync this data to the cloud by
        default.
      </p>

      <h2>Backup</h2>
      <p>
        If you turn on backup, ePurse encrypts your data and stores it in your own
        Google Drive. Only parsed values are backed up — never raw SMS content. You
        control when a backup runs; nothing is automatic unless you enable it.
      </p>

      <h2>App Lock</h2>
      <p>
        ePurse supports an on-device App Lock (PIN/biometric) and screen-capture
        protection. These do not transmit any data anywhere; they only control access
        to the app on your own device.
      </p>

      <h2>Deleting your data</h2>
      <p>
        You can delete your account and all associated data at any time from within the
        app, or via the <a href="/delete-account">delete-account</a> page. Deletion
        removes your local data and, if a backup exists, the backup in your Google
        Drive.
      </p>

      <h2>Third parties</h2>
      <p>
        ePurse does not sell or share your data with third parties. The only third-party
        service involved is Google Drive, and only if you explicitly enable backup.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy: <a href="mailto:privacy@epurse.co.in">privacy@epurse.co.in</a>.
      </p>
    </article>
  );
}
