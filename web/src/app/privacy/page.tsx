import type { Metadata } from "next";
import Link from "next/link";
import "../legal.css";

export const metadata: Metadata = {
  title: "Privacy — ePurse",
  description: "Your money. Your data. Your device. Understand local financial storage, private groups, connected services and optional encrypted backup in ePurse.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="container legal">
      <p className="eyebrow">Private by design</p>
      <h1>Your money. Your data.<br />Your device.</h1>
      <span className="legal__updated">Privacy information · draft policy pending review. Updated 28 September 2026.</span>
      <p>ePurse stores your financial ledger locally on your device. Understanding that promise also means understanding the separate services used for sign-in, optional backup, app configuration and crash reporting.</p>

      <h2>Your financial records stay local by default</h2>
      <p>Transactions, accounts, budgets, goals, Groups and Lent & Borrow records live in the app’s local storage. ePurse does not maintain a shared cloud financial ledger or automatically synchronize your financial records between devices.</p>

      <h2>Transaction capture and permissions</h2>
      <p>You can enter records manually. On Android, with your permission, ePurse can read transaction-related SMS and parse them on your device. The backup payload excludes original SMS message text. Optional permissions, such as contacts or location, support related app features when you choose to use them.</p>

      <h2>Groups are personal ledgers</h2>
      <p>A person you add to a Group or a Lent & Borrow record does not automatically receive a notification or gain access to your data. These records represent your own view of shared expenses, lending and repayments.</p>

      <h2>Google sign-in is separate from financial sync</h2>
      <p>The app uses Google sign-in for your session. Signing in does not upload your financial ledger or create a collaborative account. Google processes sign-in information as part of providing authentication.</p>

      <h2>Optional encrypted backup</h2>
      <p>When you start a backup, ePurse encrypts supported records on your device before uploading them to your own Google Drive. You need your password or recovery key to restore the contents. Basic backup metadata, including app version and a coarse device label, is stored separately from the encrypted payload.</p>
      <p>Backup is user initiated. It is not ongoing financial synchronization. Read <Link href="/security">Security & backup</Link> for how backup and recovery work.</p>

      <h2>App services and diagnostics</h2>
      <p>Released builds are configured to send crash and error reports to Sentry. Default personally identifying information collection is disabled in that configuration, and performance tracing is disabled. This is separate from financial ledger storage; it does not mean that the app makes no network requests.</p>
      <p>The app also fetches remote configuration for version checks and feature availability. Google and Sentry process information needed for their respective services. This draft still requires a complete review of diagnostic fields and service retention before publication as a final policy.</p>

      <h2>Control and deletion</h2>
      <p>App Lock helps restrict access on your device. Settings → Delete Account clears local app data and disconnects your Google account. Drive backups are separate and remain until you delete them. Follow the <Link href="/delete-account">deletion guide</Link> for both steps.</p>

      <h2>Contact</h2>
      <p>For privacy questions, contact <a href="mailto:support@epurse.co.in">support@epurse.co.in</a>.</p>
    </main>
  );
}
