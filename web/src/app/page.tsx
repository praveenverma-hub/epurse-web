import Link from "next/link";
import CardCarousel from "@/components/features/CardCarousel";
import StickyFeatureSection from "@/components/features/StickyFeatureSection";
import ScreenshotGrid from "@/components/features/ScreenshotGrid";
import FeatureList from "@/components/features/FeatureList";
import FeatureMarquee from "@/components/features/FeatureMarquee";
import StackedFeatureCards from "@/components/features/StackedFeatureCards";
import AppPreview from "@/components/features/AppPreview";
import ProductDemo from "@/components/features/ProductDemo";
import { appScreens, carouselFeatures, storyFeatures, screenshotFeatures, featureGroups, marqueeRows, stackFeatures, faqs } from "@/data/featureShowcase";
import "@/components/features/features.css";
import "@/components/features/product.css";

export default function Home() {
  return (
    <main id="main-content">
      <section className="product-hero container">
        <div className="product-hero__copy">
          <p className="eyebrow"><span className="status-dot" /> Financial clarity pays off.</p>
          <h1>Know your money.<br /><span>Keep it yours.</span></h1>
          <p className="product-hero__lead">Financial clarity without giving away your financial data.</p>
          <p className="product-hero__description">Track spending, review transactions, plan budgets and keep lending, borrowing and goals in view — with your financial ledger stored on your device.</p>
          <div className="product-actions"><a className="showcase-button" href="#download">Get ePurse <span aria-hidden="true">↗</span></a><a className="product-secondary" href="#demo">Try the product tour <span aria-hidden="true">→</span></a></div>
          <p className="product-hero__note">Your own ledger. Private groups. Optional encrypted backup.</p>
        </div>
        <div className="product-hero__visual"><span className="product-hero__orbit" aria-hidden="true" /><AppPreview screenshot={appScreens.accounts} /><div className="product-hero__caption"><span aria-hidden="true">✓</span> A clearer picture starts with you.</div></div>
      </section>

      <CardCarousel id="explore" eyebrow="A little more understanding" title="More than a record of what you spent." description="Know where it went. Keep the details accurate. Decide what comes next." items={carouselFeatures} />
      <StickyFeatureSection id="walkthrough" eyebrow="Capture → Review → Understand" title="Good decisions start with good records." description="A useful financial picture starts with the details you trust." imageSide="right" visual={<AppPreview screenshot={appScreens.review} />} items={storyFeatures} />
      <ProductDemo />
      <ScreenshotGrid id="screens" eyebrow="Personal records, clearly explained" title="See the detail without losing the picture." description="Focused views for lending, private group costs and the categories behind each budget." items={screenshotFeatures} />
      <StackedFeatureCards id="journey" eyebrow="Understand → Plan → Act → Maintain" title="Turn clarity into your next step." items={stackFeatures} />
      <FeatureList id="features" eyebrow="The details that bring it together" title="One place for your financial picture." groups={featureGroups} />
      <FeatureMarquee id="possibilities" eyebrow="Built around everyday money" title="From this month’s bills to tomorrow’s plans." rows={marqueeRows} />

      <section className="product-privacy feature-section" aria-labelledby="privacy-title">
        <div className="container product-privacy__layout"><div><p className="eyebrow">Private by design</p><h2 id="privacy-title">Your money.<br />Your data.<br /><span>Your device.</span></h2><p>Your financial ledger belongs on your device. Backup is a separate choice, and your group records remain yours.</p><Link className="product-secondary" href="/privacy">Understand your privacy <span aria-hidden="true">→</span></Link></div><div className="product-privacy__points"><article><span>01</span><h3>Local financial records</h3><p>Transactions, accounts, budgets, goals and personal ledgers are stored on your device. There is no shared cloud ledger or automatic device-to-device financial sync.</p></article><article><span>02</span><h3>Private groups & balances</h3><p>Adding someone to a group or a Lent & Borrow record does not automatically notify them or give them access.</p></article><article><span>03</span><h3>Backup on your terms</h3><p>Choose when to make an encrypted backup to your own Google Drive. Restore with your password or recovery key when you need it.</p><Link href="/security">Security & backup →</Link></article></div></div>
      </section>

      <section id="faq" className="feature-section product-faq container" aria-labelledby="faq-title">
        <div className="feature-heading"><p className="eyebrow">A few things worth knowing</p><h2 id="faq-title">Clear answers, too.</h2></div>
        <div className="product-faq__list">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
        <p className="product-faq__contact">Still have a question? <a href="mailto:support@epurse.co.in">Talk to ePurse support ↗</a></p>
      </section>

      <section id="download" className="product-download feature-section" aria-labelledby="download-title"><div className="container"><p className="eyebrow">Coming soon to Android</p><h2 id="download-title">Financial clarity pays off.</h2><p>We’re getting ePurse ready for its public release.<br />Explore the sample tour while the store listing is being prepared.</p><div className="product-actions"><a className="showcase-button" href="#demo">Explore the app <span aria-hidden="true">↗</span></a><a className="product-secondary" href="mailto:support@epurse.co.in">Contact us</a></div><span className="preview-note">Screens show the current Android app with fictional demo data.</span></div></section>
    </main>
  );
}
