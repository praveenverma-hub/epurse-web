import type { Metadata } from "next";
import "../legal.css";

export const metadata: Metadata = {
  title: "Delete Account — ePurse",
  description: "How to delete your ePurse account and data.",
};

export default function DeleteAccountPage() {
  return (
    <article className="container legal">
      <h1>Delete your account</h1>
      <span className="legal__updated">Draft — pending reconciliation with the mobile app&apos;s delete flow. Last updated 2026-09-20.</span>

      <p>
        Since ePurse has no backend, deleting your account means erasing your local
        data on this device — there is no separate server-side account to close.
      </p>

      <h2>From within the app</h2>
      <ul>
        <li>Open ePurse and go to <b>Settings → Security → Delete account</b>.</li>
        <li>Confirm the deletion. This immediately and irreversibly erases all local data: transactions, accounts, budgets, goals, groups, and lent/borrowed records.</li>
        <li>If you had backup enabled, the corresponding backup in your Google Drive is deleted as well.</li>
      </ul>

      <h2>If you no longer have the app installed</h2>
      <p>
        Uninstalling ePurse already removes all local data, since nothing is stored
        outside your device. If you had backup enabled, you can delete the backup
        file directly from your Google Drive (look for the ePurse backup folder).
      </p>

      <h2>What gets deleted</h2>
      <ul>
        <li>All transactions, accounts, budgets, goals, groups and lent/borrowed records</li>
        <li>App Lock settings and any locally cached preferences</li>
        <li>Your encrypted backup in Google Drive, if one exists</li>
      </ul>
      <p>
        What is <b>not</b> affected: the original SMS messages on your device (ePurse
        never modifies or deletes your inbox), and your bank accounts themselves —
        ePurse never had access to move money in the first place.
      </p>

      <h2>Need help?</h2>
      <p>
        Email <a href="mailto:support@epurse.co.in">support@epurse.co.in</a> if
        deletion doesn&apos;t complete as expected.
      </p>
    </article>
  );
}
