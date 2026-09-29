import type { Metadata } from "next";
import Link from "next/link";
import "../legal.css";

export const metadata: Metadata = {
  title: "Privacy Policy — ePurse",
  description: "How ePurse handles financial records, app permissions, Google Drive backups, diagnostics and your privacy choices.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="container legal">
      <p className="eyebrow">Private by design</p>
      <h1>Privacy Policy</h1>
      <span className="legal__updated">Draft for legal and product review · Prepared 29 September 2026.</span>

      <p>
        This Privacy Policy explains how ePurse (&quot;ePurse&quot;, &quot;we&quot;, &quot;us&quot; or
        &quot;our&quot;) handles personal data when you use the ePurse mobile application,
        website and related support services. ePurse is a personal finance record-keeping
        tool. It is designed to keep your financial ledger on your device unless you
        choose a feature that sends data to another service.
      </p>
      <p>
        This policy should be read together with our <Link href="/terms">Terms of Service</Link>,
        <Link href="/security"> Security &amp; backup information</Link> and
        <Link href="/delete-account"> deletion guide</Link>.
      </p>

      <h2>1. What ePurse is—and is not</h2>
      <p>
        ePurse helps you record and understand transactions, accounts, budgets, goals,
        reminders, Groups, and Lent &amp; Borrow entries. ePurse is not a bank, lender,
        payment system, investment adviser or credit bureau. It does not connect directly
        to your bank account or move money.
      </p>

      <h2>2. Data kept on your device</h2>
      <p>Depending on the features you use, the app may keep the following data locally:</p>
      <ul>
        <li>profile details you enter, including your name and phone numbers;</li>
        <li>accounts, masked account identifiers, transactions, merchants, categories, notes and refunds;</li>
        <li>budgets, goals, reminders, monthly summaries, reward progress and app preferences;</li>
        <li>Groups, split details, and Lent &amp; Borrow records, including names, contact references and phone numbers you choose to attach;</li>
        <li>coarse transaction location labels, such as city, district, region and country, if you grant location permission; and</li>
        <li>technical bookkeeping used to prevent duplicate SMS imports and restore app state.</li>
      </ul>
      <p>
        These records are not uploaded to an ePurse financial-data server. Other people
        named in your Groups, splits, or Lent &amp; Borrow records do not automatically see
        those records and are not automatically notified.
      </p>

      <h2>3. SMS transaction detection</h2>
      <p>
        On supported Android devices, ePurse can read financial SMS messages after you
        grant SMS permission. It uses message content and sender information on your
        device to identify possible transactions. You should review detected entries in
        the Review Queue because bank message formats vary and automated parsing can be wrong.
      </p>
      <p>
        The current app may retain the original SMS text and sender locally for up to
        three days to support review and diagnosis, after which those fields are removed.
        Parsed transaction details may remain under the retention periods below. Original
        SMS text and sender fields are excluded from Google Drive backup. ePurse does not
        alter or delete messages in your SMS inbox.
      </p>

      <h2>4. Contacts, location and notifications</h2>
      <ul>
        <li><strong>Contacts:</strong> if allowed, ePurse reads contact names and phone numbers so you can choose people for splits and lending records. Selected contact details may be saved in the local record you create.</li>
        <li><strong>Location:</strong> if allowed, ePurse may obtain a low-accuracy foreground location when a transaction is created, reverse-geocode it using the device platform, and keep only a coarse place label. Coordinates, street address and postal code are discarded.</li>
        <li><strong>Notifications and alarms:</strong> if allowed, ePurse schedules reminders and financial nudges on your device. Notification identifiers are device-specific and are not included in backup.</li>
        <li><strong>Biometrics:</strong> App Lock uses the device operating system’s biometric authentication. ePurse does not receive or store your fingerprint or face template.</li>
      </ul>
      <p>You can deny or withdraw optional permissions in your device settings. The related feature may then stop working.</p>

      <h2>5. Google sign-in and optional Drive backup</h2>
      <p>
        Google sign-in provides your app session and optional backup access. With your
        authorization, Google provides your email address, name and profile picture. A
        refresh credential is stored in secure device storage; short-lived access tokens
        are kept in memory. Signing in does not create an ePurse cloud ledger.
      </p>
      <p>
        If you start a backup, ePurse encrypts the supported payload on your device before
        uploading it to your own Google Drive. The limited Google Drive permission allows
        the app to access files it created, rather than the rest of your Drive. Backup may
        include parsed financial records, selected contact details, coarse location labels,
        reminders, settings and reward progress. Original SMS text and sender fields are excluded.
      </p>
      <p>
        Backup file metadata—creation time, app and store version, and a coarse label such
        as “Android device”—is not inside the encrypted payload. ePurse keeps up to five
        backup files and attempts to remove older copies after a successful upload. Google
        processes the files, account data and OAuth activity under its own terms and privacy policy.
      </p>

      <h2>6. Data sent to service providers</h2>
      <p>ePurse currently uses the following limited network services:</p>
      <ul>
        <li><strong>Google:</strong> authentication and user-initiated Drive backup and restore;</li>
        <li><strong>Sentry:</strong> crash and error reporting in distributed builds. Reports may contain a stack trace, app version, operating-system and device information, environment, timestamps and technical error context. Default personal-information collection, performance tracing and session replay are disabled; and</li>
        <li><strong>ePurse remote configuration:</strong> a public configuration file used for version checks and limited feature availability. The request contains no app-provided account or ledger data, although ordinary web infrastructure may receive an IP address, user agent and request time.</li>
      </ul>
      <p>
        We do not sell personal data or share your financial ledger for third-party advertising.
        Service providers may process data in India or other countries under their own
        infrastructure and contractual safeguards. We may also disclose information when
        required by applicable law, legal process, or to protect users and the service.
      </p>

      <h2>7. User-initiated sharing and exports</h2>
      <p>
        When you export a statement, create a monthly report, or share a repayment reminder,
        you choose the destination and recipient. A WhatsApp reminder opens WhatsApp with
        content you selected; WhatsApp then handles that content under its own privacy terms.
        Once you export or share information, the recipient or destination service controls
        its further use. Check the contents before sharing.
      </p>

      <h2>8. Website data</h2>
      <p>
        The ePurse marketing website does not currently use advertising cookies or behavioral
        analytics. Its hosting and security providers may process ordinary request data such
        as IP address, browser type, requested page, timestamps and security events to deliver
        and protect the site. If website analytics or optional cookies are added, this policy
        and any required consent controls will be updated first.
      </p>

      <h2>9. Why we process data</h2>
      <p>We process data only for the feature or purpose presented to you, including to:</p>
      <ul>
        <li>provide the local financial tracking features you request;</li>
        <li>detect and organize transactions with permissions you grant;</li>
        <li>authenticate you and perform a backup or restore you initiate;</li>
        <li>schedule reminders, create exports and enable sharing you request;</li>
        <li>maintain app security, diagnose crashes and deliver essential configuration; and</li>
        <li>respond to support, privacy and security requests.</li>
      </ul>

      <h2>10. Retention</h2>
      <ul>
        <li>Original SMS text and sender fields currently retained by ePurse are removed from local transaction records after up to three days.</li>
        <li>General transaction-level records are normally kept locally for up to 90 days, then compacted into monthly totals kept for up to 24 months.</li>
        <li>Outstanding Lent &amp; Borrow records may remain until you settle, reclassify or delete them. Settled lending and borrowing records may be kept for up to 24 months.</li>
        <li>Fully settled Groups may be removed after 180 days without activity.</li>
        <li>Google identity and OAuth credentials remain until you sign out, delete app data, revoke access, or the credential otherwise expires.</li>
        <li>Drive backups remain in your Google Drive until removed by backup rotation or deleted by you. Deleting local app data does not delete existing Drive files.</li>
        <li>Support messages and diagnostic reports are retained only as needed for support, security and reliability, subject to the applicable provider settings and legal requirements.</li>
      </ul>

      <h2>11. Your choices and rights</h2>
      <p>
        Subject to applicable law, you may ask for information about personal data we
        process, request correction or erasure, withdraw consent, raise a grievance, and
        nominate another person to exercise applicable rights in the event of death or incapacity.
        Most financial data is only on your device, so we cannot inspect, retrieve or delete
        it remotely. You can edit records in the app, revoke permissions in device settings,
        sign out of Google, delete local data, and separately delete Drive backups.
      </p>
      <p>
        Follow the <Link href="/delete-account">account and data deletion guide</Link>.
        We may need enough information to verify and respond to a privacy request, but you
        should never email us financial records, SMS contents, passwords or recovery keys.
      </p>

      <h2>12. Security</h2>
      <p>
        We use measures designed to reduce unauthorized access, including operating-system
        app isolation, optional App Lock, secure storage for long-lived Google credentials,
        limited OAuth scopes and encryption of backup contents before upload. No system is
        completely secure. You are responsible for protecting your device, Google account,
        backup password and recovery key. ePurse cannot recover a forgotten backup secret.
      </p>

      <h2>13. Children</h2>
      <p>
        ePurse is intended for people aged 18 or older. We do not knowingly offer the service
        to children or seek personal data from them. If you believe a child has provided data
        through a channel we control, contact us so we can review and take appropriate action.
      </p>

      <h2>14. Changes to this policy</h2>
      <p>
        We may update this policy as the app, vendors or law changes. We will post the revised
        version with a new date and provide any additional notice required for a material change.
        Where fresh consent is required, we will request it before the new processing begins.
      </p>

      <h2>15. Contact and grievance redressal</h2>
      <p>
        For privacy questions, rights requests or grievances, email
        <a href="mailto:support@epurse.co.in"> support@epurse.co.in</a> with “Privacy” in
        the subject. Please describe the request without including transaction records,
        SMS contents, passwords or recovery keys. The operator’s legal name, postal address
        and designated grievance contact will be added before this draft becomes effective.
      </p>
    </main>
  );
}
