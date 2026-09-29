# ePurse privacy and terms review

Prepared 29 September 2026. This file is an internal launch checklist, not a public policy and not legal advice.

## Reference review

The public drafts use the coverage of the following official policies as a benchmark without copying their product-specific language:

- [Splitwise Privacy Statement](https://www.splitwise.com/privacy): scope, categories of information, user-generated content, device information, vendors, international processing, retention, account closure, user choices, children, changes and contact.
- [Splitwise Terms of Service](https://www.splitwise.com/terms): eligibility, informal records, acceptable use, user responsibility, third-party services, warranty, liability, termination, intellectual property and general contract clauses.
- [Axio Privacy Policy](https://www.axio.co.in/privacy-policy): itemized collection and purposes, consent, security, service providers, retention, access and correction, India-specific grievance contact, governing law and dispute language.
- [Axio Terms and Conditions](https://www.axio.co.in/terms-conditions): electronic-contract language, user representations, third-party dependencies, security suspension and India-specific legal framing.
- [Digital Personal Data Protection Act, 2023](https://www.meity.gov.in/static/uploads/2024/02/Digital-Personal-Data-Protection-Act-2023.pdf) and [Digital Personal Data Protection Rules, 2025](https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf): clear standalone notice, itemized data and purposes, consent withdrawal, access/correction/erasure, grievance contact, security, breach response, children and nomination rights.

Axio is an NBFC/lending product and Splitwise operates a cloud-based shared ledger and payment integrations. Their KYC, Aadhaar, underwriting, credit bureau, advertising, payment, loan, co-lender, subscription and shared-user editing clauses do not belong in ePurse unless the product later adds those activities.

## Facts verified against the current mobile code

- Financial state is stored in AsyncStorage on the device.
- Android requests SMS read/receive, contacts, coarse location, notifications, exact scheduling, screen-capture detection and biometric permissions. Fine location is blocked.
- SMS parsing happens on-device. The current app may retain raw message text and sender locally for three days; the backup payload excludes `smsText`, `rawSms` and `rawSender`.
- General raw transaction rows compact after 90 days. Monthly aggregates are retained for 24 months. Outstanding Lent & Borrow entries can remain; settled entries are retained up to 24 months. Fully settled inactive Groups may be pruned after 180 days.
- Location is reduced to city/district/region/country and capture time. Coordinates, street, postcode and place name are not persisted.
- Contact selection reads names and phone numbers. A selected contact reference or phone number can be stored in a split or lending record.
- Google OAuth requests `openid`, `email`, `profile` and `drive.file`. Refresh credentials use secure device storage; access tokens are held in memory.
- Backup is encrypted on-device, uploaded to the user’s Drive, and limited to files ePurse created. Up to five backups are retained. Coarse device label, timestamps, and app/store version are unencrypted file metadata.
- Distributed builds initialize Sentry for crash/error reporting with default PII disabled and performance tracing disabled.
- The app fetches a public remote configuration file without an app-created identifier or request body.
- WhatsApp sharing and file exports happen only after user action.
- Delete Account revokes Google authorization on a best-effort basis, clears all local AsyncStorage, and leaves existing Drive backup files for separate deletion.

## Decisions required before publication

- [ ] Insert the operator’s full legal name and legal form in both policies.
- [ ] Insert the registered or principal postal address.
- [ ] Name the privacy/grievance contact or state their official title, business contact details and response process.
- [ ] Confirm `support@epurse.co.in` is monitored and set an internal response target.
- [ ] Choose the governing-law state, courts and whether disputes use court, arbitration, or a staged process. Have Indian counsel review consumer-law enforceability.
- [ ] Confirm the minimum user age. The draft recommends 18 because the product handles financial records and currently has no parental-consent flow.
- [ ] Decide whether raw SMS text and sender fields will be removed before production. If removed, delete the three-day disclosure; if retained, keep it and ensure the in-app permission notice says so.
- [ ] Verify Sentry data region, configured event retention, data-processing terms, subprocessors and deletion workflow. Replace the generic retention sentence with the confirmed period if required.
- [ ] Confirm whether the production website host stores access/security logs, their retention period, location and subprocessors.
- [ ] Confirm that no analytics, advertising SDK, marketing pixel, cookie banner-triggering technology, Firebase service or additional backend is present at launch.
- [ ] Verify that Google Cloud’s consent screen and app-store disclosures list the same identity and Drive scopes described in the policy.
- [ ] Confirm whether `drive.file` backup rotation reliably deletes files beyond the newest five and whether Drive Trash behavior needs to be explained.
- [ ] Confirm exact retention/product behavior for transaction compaction, lending records and Group pruning. Product copy and code must remain aligned.
- [ ] Review contact and phone-number processing for Groups, splits and lending. Provide an in-app notice before the contact picker is opened.
- [ ] Review the location onboarding screen. The permission notice should say that location may be attached to transactions, reduced to a coarse label and included in encrypted backup.
- [ ] Ensure every optional permission has a just-in-time notice stating the data item, purpose, storage location and withdrawal method. A general policy link alone is not a substitute for this notice.
- [ ] Confirm security incident assessment and notification procedures before launch.
- [ ] Align Google Play Data Safety, Apple privacy labels, in-app disclosures, website claims and these policies.
- [ ] Decide whether exports or reports contain private/group transactions by default and ensure the UI provides a clear review step before sharing.
- [ ] Add any paid-plan, renewal, cancellation, refund and tax terms before introducing subscriptions or purchases.
- [ ] Replace “Draft” labels with an effective date only after legal and product approval.

## Recommended release gate

Do not publish these drafts as final until the identity, address, grievance, jurisdiction, Sentry retention and raw-SMS decisions above are resolved. After those decisions, run one final code-to-policy audit against the release build and capture the approved policy versions in the app release record.
