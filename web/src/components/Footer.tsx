import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">ePurse</div>
        <nav className="footer__links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/delete-account">Delete account</Link>
        </nav>
        <div className="footer__copy">© {new Date().getFullYear()} ePurse. All money stays on your device.</div>
      </div>
    </footer>
  );
}
