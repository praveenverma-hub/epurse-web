"use client";

import { motion } from "framer-motion";
import { CHECKLIST } from "@/data/breadth";
import "./Checklist.css";

export default function Checklist() {
  return (
    <section className="checklist">
      <div className="container">
        <p className="eyebrow checklist__eyebrow">No paid tier</p>
        <h2 className="section-heading">Everything, free.</h2>
        <p className="section-sub">No premium unlock, no feature behind a paywall.</p>
        <ul className="checklist__list">
          {CHECKLIST.map((item, i) => (
            <motion.li
              key={item}
              className="checklist__item"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
            >
              <span className="checklist__glyph" aria-hidden />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
