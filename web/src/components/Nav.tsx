import Link from "next/link";
import Mark from "./Mark";
import "./Nav.css";

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" className="nav__brand">
          <span className="nav__mark-chip">
            <Mark size={32} />
          </span>
          <span className="nav__brand-text">ePurse</span>
        </Link>
        <nav className="nav__links" aria-label="Main navigation"><Link href="/#screens">App screens</Link><Link href="/#features">Features</Link><Link href="/privacy">Privacy</Link></nav>
        <Link href="/#download" className="nav__cta">Get ePurse <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
