import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "ePurse — financial clarity pays off.",
  description:
    "Financial clarity without giving away your financial data. Track spending, review transactions, plan budgets and manage private personal ledgers with ePurse.",
  icons: {
    icon: [{ url: "/epurse-icon.png", type: "image/png", sizes: "1024x1024" }],
    shortcut: "/epurse-icon.png",
    apple: [{ url: "/epurse-icon.png", sizes: "1024x1024", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-image-preview": "none",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
