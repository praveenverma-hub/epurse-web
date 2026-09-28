import type { Metadata } from "next";
import Link from "next/link";
import "../legal.css";

export const metadata: Metadata = {
  title: "Security & backup — ePurse",
  description: "How ePurse keeps financial records local and gives you control over encrypted Google Drive backup and restore.",
};

export default function SecurityPage() {
  return (
    <main id="main-content" className="container legal">
      <p className="eyebrow">Your records, in your control</p>
      <h1>Local by default.<br />Backed up by choice.</h1>
      <p>Your financial ledger is stored on your device. Optional backup gives you a way to restore your records when you change phones or need to recover them.</p>
      <h2>Protect access to the app</h2>
      <p>Use ePurse’s App Lock to restrict access on your device. Device security and keeping your phone up to date remain part of protecting your local records.</p>
      <h2>Choose when to back up</h2>
      <p>Open Backup in the app and start a backup when you want one. The app encrypts the backup payload on your device before uploading it to your own Google Drive. Backup is separate from Google sign-in and does not continuously synchronize your financial ledger between devices.</p>
      <h2>What goes into the backup</h2>
      <p>The backup includes supported financial records and settings, such as parsed transactions, accounts, budgets and goals. Original SMS message text is excluded from the backup payload. Basic file metadata, such as app version and a coarse device label, is separate from the encrypted contents.</p>
      <h2>Keep your password or recovery key</h2>
      <p>You need your backup password or recovery key to decrypt a backup. Keep it somewhere safe; ePurse cannot recover a forgotten password for you.</p>
      <h2>Restore when you need to</h2>
      <p>Sign in with the Google account used for the backup, open Backup, choose a saved backup and enter your password or recovery key. Read the app’s restore confirmation before replacing current records.</p>
      <h2>Deleting local data and backups</h2>
      <p>Deleting your account clears local app data and disconnects Google access. Existing Drive backups remain until you delete them separately. Follow the <Link href="/delete-account">account and backup deletion steps</Link> for both locations.</p>
      <h2>A clear view of connected services</h2>
      <p>Local financial storage does not mean the app never connects to the internet. Google sign-in, optional Drive backup, remote app configuration and crash reporting serve separate purposes. Read the <Link href="/privacy">privacy information</Link> for these distinctions.</p>
      <p>Need help? <a href="mailto:support@epurse.co.in">support@epurse.co.in</a></p>
    </main>
  );
}
