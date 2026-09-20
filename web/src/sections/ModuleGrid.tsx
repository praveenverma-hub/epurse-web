"use client";

import { motion } from "framer-motion";
import { MODULE_GRID } from "@/data/modules";
import "./ModuleGrid.css";

export default function ModuleGrid() {
  return (
    <section className="module-grid">
      <div className="container">
        <p className="eyebrow module-grid__eyebrow">Everything in one place</p>
        <h2 className="section-heading">Six modules, one app.</h2>
        <div className="module-grid__grid">
          {MODULE_GRID.map((m, i) => (
            <motion.div
              key={m.name}
              className={`module-grid__tile module-grid__tile--${m.zone}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover="hover"
            >
              <div className="module-grid__tile-rings" aria-hidden>
                <span />
                <span />
              </div>
              <div className="module-grid__tile-body">
                <h3 className="module-grid__tile-name">{m.name}</h3>
                <motion.p
                  className="module-grid__tile-blurb"
                  variants={{ hover: { opacity: 1, height: "auto" } }}
                  initial={{ opacity: 0, height: 0 }}
                >
                  {m.blurb}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
