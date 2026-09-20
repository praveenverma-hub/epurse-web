import Link from "next/link";
import Mark from "./Mark";
import "./Nav.css";

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" className="nav__brand">
          <span className="nav__mark-chip">
            <Mark size={20} />
          </span>
          <span className="nav__brand-text">ePurse</span>
        </Link>
        <a href="#download" className="nav__cta">Get notified</a>
      </div>
    </header>
  );
}
