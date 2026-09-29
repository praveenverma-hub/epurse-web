import type { Metadata } from "next";
import Link from "next/link";
import "../legal.css";

export const metadata: Metadata = {
  title: "Terms of Service — ePurse",
  description: "Draft terms governing use of the ePurse app and website.",
};

export default function TermsPage() {
  return (
    <article id="main-content" className="container legal">
      <p className="eyebrow">Terms for using ePurse</p>
      <h1>Terms of Service</h1>
      <span className="legal__updated">Draft for legal and product review · Prepared 29 September 2026.</span>

      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the ePurse mobile
        application, website and related services (together, the &quot;Service&quot;). They form
        an electronic agreement between you and the operator of ePurse. By accessing or
        using the Service, you agree to these Terms and acknowledge the
        <Link href="/privacy"> Privacy Policy</Link>. If you do not agree, do not use the Service.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old and legally capable of entering into this agreement.
        You may use the Service only where permitted by applicable law. If you use ePurse on
        behalf of an organization, you represent that you are authorized to bind it to these Terms.
      </p>

      <h2>2. The Service</h2>
      <p>
        ePurse is a personal record-keeping and budgeting tool. It can help you record and
        categorize transactions, review accounts, plan budgets and goals, keep private Group
        and Lent &amp; Borrow ledgers, create reminders, and export summaries.
      </p>
      <p>
        ePurse is not a bank, non-banking financial company, lender, payment service,
        money transmitter, credit bureau, financial adviser, tax adviser or investment adviser.
        It does not hold funds, connect directly to your bank account, initiate payments,
        settle debts or verify that a payment occurred. Information in ePurse is for your
        personal organization and is not professional financial, legal, tax or investment advice.
      </p>

      <h2>3. Your account and device</h2>
      <p>
        You are responsible for access to your device, Google account, App Lock, backup
        password and recovery key. You must provide accurate information and promptly update
        it where needed. Notify us if you believe the Service or an account authorization has
        been compromised. ePurse cannot recover a forgotten backup password or recovery key.
      </p>

      <h2>4. Permissions and third-party services</h2>
      <p>
        Some features require permissions, including SMS, contacts, approximate location,
        notifications or device biometrics. You may decline optional permissions, but the
        related feature may not work. Google authentication, Google Drive backup, WhatsApp
        sharing, operating-system services and other third-party services are governed by
        their own terms and policies. We are not responsible for a third party’s availability,
        security, content or handling of information after you direct it to that service.
      </p>

      <h2>5. Accuracy and your records</h2>
      <ul>
        <li>You are responsible for reviewing and correcting transactions, categories, account details, balances, splits, reminders and exports.</li>
        <li>SMS detection depends on message availability, sender practices, bank formats and device behavior. It may miss, duplicate or misclassify a transaction.</li>
        <li>Budgets, goals, insights, summaries and projections are calculated from the records available in the app and may be incomplete or inaccurate.</li>
        <li>You should use bank statements and official records for financial decisions, reporting, disputes and tax or legal purposes.</li>
      </ul>

      <h2>6. Groups, splits, lending and reminders</h2>
      <p>
        Groups, splits, IOUs, lending entries, repayments and balances in ePurse are your
        private, informal records. They do not create, amend, prove or enforce a legal debt,
        contract or payment obligation. Adding someone’s name or contact information does
        not create an ePurse account for that person, invite them to a shared ledger, or
        automatically notify them.
      </p>
      <p>
        If you choose to share a reminder or export, you are responsible for the content,
        recipient and lawful use of the other person’s contact information. Do not use the
        Service to harass, threaten, deceive or pressure another person.
      </p>

      <h2>7. Local storage, backup and data loss</h2>
      <p>
        Financial records are stored locally by default. Uninstalling the app, clearing app
        storage, losing or damaging your device, or restoring the device may permanently remove
        records that were not successfully backed up. Optional backup is user initiated and
        depends on Google Drive, your authorization, connectivity, a valid backup file and the
        correct password or recovery key. You are responsible for checking that a backup completed
        and for retaining the secret needed to restore it.
      </p>
      <p>
        Restoring a backup can replace current local records. Review the confirmation carefully.
        See <Link href="/security">Security &amp; backup</Link> for the current backup design.
      </p>

      <h2>8. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the Service for fraud, money laundering, unlawful surveillance, harassment or any illegal purpose;</li>
        <li>enter, export or share information you do not have the right to use;</li>
        <li>misrepresent your identity or impersonate another person;</li>
        <li>interfere with, probe, overload, bypass or compromise the Service or its security controls;</li>
        <li>introduce malware or use automated means to scrape or abuse the website or Service;</li>
        <li>reverse engineer or attempt to extract source code except to the limited extent such restriction is prohibited by law; or</li>
        <li>copy, sell, sublicense or use ePurse assets to build or promote a competing product without written permission.</li>
      </ul>

      <h2>9. Your content and responsibilities</h2>
      <p>
        You retain your rights in information you enter or create. You grant ePurse only the
        limited permission needed to process that information on your device and through a
        feature you request, such as creating an encrypted Drive backup or export. You represent
        that you have the rights and permissions needed for content and contact details you use.
      </p>

      <h2>10. ePurse intellectual property</h2>
      <p>
        ePurse grants you a limited, revocable, non-exclusive, non-transferable license to use
        the app for personal, lawful purposes under these Terms. The ePurse™ name, logo,
        software, interface designs, illustrations, website copy and product screenshots are
        owned by ePurse or its licensors and are protected by applicable intellectual-property laws.
      </p>
      <p>
        You may view the website and use the app as intended. You may not copy, republish, sell,
        modify, distribute, remove ownership notices from, or commercially exploit ePurse assets
        without prior written permission. Public screenshots may contain fictional or sanitized
        demonstration data and do not represent a live user account.
      </p>

      <h2>11. Feedback</h2>
      <p>
        If you send ideas or feedback, you allow us to use them to improve ePurse without payment
        or obligation to you. This does not give us ownership of your financial records or other
        personal data.
      </p>

      <h2>12. Changes, availability and termination</h2>
      <p>
        We may improve, change, suspend or discontinue part of the Service, including features
        that depend on third parties. We will provide notice where required by law and will not
        use a Terms update to obtain consent for a new data-processing purpose where separate
        consent is required.
      </p>
      <p>
        You may stop using ePurse at any time. You can delete local data and revoke Google access
        by following the <Link href="/delete-account">deletion guide</Link>. We may restrict access
        to network-supported features if you materially breach these Terms, misuse the Service,
        or create a security or legal risk.
      </p>

      <h2>13. Disclaimers</h2>
      <p>
        To the maximum extent permitted by law, the Service is provided “as is” and “as available.”
        We do not promise that it will always be available, uninterrupted, secure, error-free,
        complete or suitable for a particular purpose, or that detected transactions and calculations
        will always be accurate. Nothing in these Terms limits a warranty or consumer right that
        cannot lawfully be excluded.
      </p>

      <h2>14. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, ePurse and its operator will not be liable for
        indirect, incidental, special, punitive or consequential loss, loss of profits, loss of
        opportunity, or loss or corruption of data arising from use of the Service. Nothing in
        these Terms excludes or limits liability that cannot legally be excluded or limited,
        including liability for fraud, wilful misconduct or other mandatory rights.
      </p>

      <h2>15. Indemnity</h2>
      <p>
        To the extent permitted by law, you agree to be responsible for third-party claims and
        reasonable costs caused by your unlawful use of the Service, infringement of another
        person’s rights, or material breach of these Terms. This obligation does not apply to the
        extent a claim was caused by ePurse’s own breach, negligence or misconduct.
      </p>

      <h2>16. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of India. Before filing a formal claim, you and
        ePurse agree to make a reasonable attempt to resolve the issue through the contact below.
        The operator’s state, exclusive court jurisdiction and any agreed arbitration procedure
        will be inserted after the operator’s legal entity and registered office are confirmed.
        Nothing in this section prevents a consumer from using a forum or remedy available under
        mandatory law.
      </p>

      <h2>17. General terms</h2>
      <p>
        If a provision is held invalid or unenforceable, the remaining provisions continue in effect.
        A delay in enforcing a right is not a waiver. You may not assign these Terms without our
        written consent; we may assign them as part of a lawful reorganization, financing or transfer
        of the Service. These Terms, the Privacy Policy and policies expressly referenced here form
        the agreement concerning the Service.
      </p>

      <h2>18. Changes to these Terms</h2>
      <p>
        We may revise these Terms as the Service or law changes. The updated version will show a
        new date. If a change materially affects your rights, we will provide any additional notice
        required by law. Continued use after the effective date means you accept the revised Terms.
      </p>

      <h2>19. Contact</h2>
      <p>
        Questions or complaints about these Terms may be sent to
        <a href="mailto:support@epurse.co.in"> support@epurse.co.in</a>. The operator’s legal name,
        postal address and dispute jurisdiction will be added before this draft becomes effective.
      </p>
    </article>
  );
}
