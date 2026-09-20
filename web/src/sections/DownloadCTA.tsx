"use client";

import { useState, type FormEvent } from "react";
import Mark from "@/components/Mark";
import "./DownloadCTA.css";

export default function DownloadCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="download" id="download">
      <div className="container download__inner">
        <div className="download__qr" aria-hidden>
          <Mark size={40} glow />
        </div>
        <p className="eyebrow download__eyebrow">Coming soon to Android</p>
        <h2 className="section-heading download__heading">Get notified the day it ships.</h2>
        <p className="section-sub download__sub">
          ePurse is finishing its Play Store listing. Leave your email and we&apos;ll
          send the download link the moment it&apos;s live — nothing else.
        </p>

        {submitted ? (
          <p className="download__confirm">You&apos;re on the list. Talk soon.</p>
        ) : (
          <form className="download__form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="download__input"
            />
            <button type="submit" className="download__submit">Notify me</button>
          </form>
        )}
      </div>
    </section>
  );
}
