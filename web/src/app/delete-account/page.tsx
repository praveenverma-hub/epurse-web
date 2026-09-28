import type { Metadata } from "next";
import Link from "next/link";
import "../legal.css";

export const metadata: Metadata = {
  title: "Delete account & data — ePurse",
  description: "Delete local ePurse records, disconnect Google access and remove optional Google Drive backups separately.",
};

export default function DeleteAccountPage() {
  return (
    <main id="main-content" className="container legal">
      <h1>Delete your account & data</h1>
      <span className="legal__updated">Updated 28 September 2026.</span>
      <p>Your financial records are stored on your device. If you created an encrypted Google Drive backup, it is a separate copy that needs a separate deletion step.</p>
      <h2>1. Delete local app data</h2>
      <ol>
        <li>Open ePurse and go to <strong>Settings</strong>.</li>
        <li>Tap <strong>Delete Account</strong>, below Logout.</li>
        <li>Read the confirmation and choose Delete to erase your local records and disconnect your Google account.</li>
      </ol>
      <p>This removes local transactions, accounts, budgets, goals, reminders and other app records. It cannot be undone through the deletion flow. It does not delete existing Drive backups.</p>
      <h2>2. Remove your Drive backups separately</h2>
      <p>If you have used backup, open your own Google Drive with the same Google account. Search for <strong>epurse-backup</strong>, review the matching files and remove the backups you no longer want to retain. Deleting a backup does not erase a separate local copy in the app.</p>
      <h2>3. If you no longer have the app</h2>
      <p>Use your device’s app settings to remove any remaining local ePurse data. Review ePurse’s access in your Google account’s connected-app settings and revoke it if needed. Separately remove any saved Drive backups.</p>
      <h2>What this does not affect</h2>
      <p>Deleting ePurse records does not delete original SMS messages or change balances at your bank. ePurse records financial activity; it does not move money from bank accounts.</p>
      <h2>Need help?</h2>
      <p>Contact <a href="mailto:support@epurse.co.in">support@epurse.co.in</a>. See <Link href="/privacy">Privacy</Link> for information about diagnostics and connected services, and <Link href="/security">Security & backup</Link> for backup recovery.</p>
    </main>
  );
}
