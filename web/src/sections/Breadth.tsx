"use client";

import { motion } from "framer-motion";
import { BANKS, CATEGORIES } from "@/data/breadth";
import "./Breadth.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};

const chip = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
};

function ChipRow({ items, tone }: { items: string[]; tone: "bank" | "category" }) {
  return (
    <motion.div
      className={`breadth__row breadth__row--${tone}`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {items.map((item) => (
        <motion.span key={item} className="breadth__chip" variants={chip}>
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default function Breadth() {
  return (
    <section className="breadth">
      <div className="container">
        <p className="eyebrow breadth__eyebrow">Coverage</p>
        <h2 className="section-heading">Reads the bank you already use.</h2>
        <p className="section-sub">Every SMS parsed on-device, sorted straight into the category it belongs to.</p>
        <div className="breadth__grid">
          <ChipRow items={BANKS} tone="bank" />
          <ChipRow items={CATEGORIES} tone="category" />
        </div>
      </div>
    </section>
  );
}
