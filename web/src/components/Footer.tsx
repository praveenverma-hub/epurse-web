import Link from "next/link";
import "./Footer.css";

const FOOTER_GROUPS = [
  {
    title: "Legal & privacy",
    links: [
      { label: "Terms & conditions", href: "/terms" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Security & backup", href: "/security" },
      { label: "Delete account", href: "/delete-account" },
    ],
  },
  {
    title: "Explore ePurse",
    links: [
      { label: "Home", href: "/" },
      { label: "How it works", href: "/#walkthrough" },
      { label: "Product tour", href: "/#demo" },
      { label: "Features", href: "/#features" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact us", href: "mailto:support@epurse.co.in" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__identity">
          <Link href="/" className="footer__brand" aria-label="ePurse home">
            ePurse<span aria-hidden="true">.</span>
          </Link>
          <p className="footer__tagline">Financial clarity pays off.</p>
        </div>

        <nav className="footer__navigation" aria-label="Footer navigation">
          {FOOTER_GROUPS.map((group) => (
            <div className="footer__group" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="footer__details">
          <p>Financial clarity without giving away your financial data.<br className="footer__desktop-break" /> Your spending, plans and personal ledgers, together.</p>
          <small>© {new Date().getFullYear()} ePurse. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
