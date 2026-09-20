"use client";

import { motion } from "framer-motion";
import "./mocks.css";

const RANGES = ["1M", "6M", "1Y", "3Y", "All"];

export default function GoalCardMock() {
  const funded = 62;
  return (
    <div className="mock mock--goal">
      <div className="mock__goal-head">
        <div className="mock__goal-icon">🏝️</div>
        <div>
          <div className="mock__goal-name">Goa trip</div>
          <div className="mock__goal-sub">Auto-funded from Travel category</div>
        </div>
      </div>
      <div className="mock__goal-figure">
        {funded}<span>%</span>
        <span className="mock__goal-figure-sub">funded</span>
      </div>
      <div className="mock__goal-bar">
        <motion.div
          className="mock__goal-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${funded}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <div className="mock__goal-ranges">
        {RANGES.map((r) => (
          <span key={r} className={`mock__pill ${r === "6M" ? "is-active" : ""}`}>{r}</span>
        ))}
      </div>
      <div className="mock__goal-ctas">
        <button className="mock__cta mock__cta--ghost">Edit goal</button>
        <button className="mock__cta mock__cta--filled">Fund now</button>
      </div>
    </div>
  );
}
