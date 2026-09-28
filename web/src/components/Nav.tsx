import Link from "next/link";
import Mark from "./Mark";
import Wordmark from "./Wordmark";
import "./Nav.css";

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" className="nav__brand">
          <span className="nav__mark-chip">
            <Mark size={38} />
          </span>
          <Wordmark className="nav__brand-text" />
        </Link>
        <nav className="nav__links" aria-label="Main navigation"><Link href="/#screens">App screens</Link><Link href="/#features">Features</Link><Link href="/privacy">Privacy</Link></nav>
        <Link href="/#download" className="nav__cta"><span className="nav__cta-label">Get <Wordmark trademark={false} /></span></Link>
      </div>
    </header>
  );
}
