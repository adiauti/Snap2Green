"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ScanLine,
  FileCheck2,
  Leaf,
  MapPin,
} from "lucide-react";

const cards = [
  {
    label: "01 / Capture",
    title: "One photo replaces repetitive logging.",
    text: "Start with an electricity bill, fuel receipt or travel record. The experience is designed around the documents people already have.",
    icon: ScanLine,
    className: "parallax-card--one",
  },
  {
    label: "02 / Verify",
    title: "Keep the number explainable.",
    text: "Extracted activity data stays visible so a user can review what was read before it becomes an emissions result.",
    icon: FileCheck2,
    className: "parallax-card--two",
  },
  {
    label: "03 / Understand",
    title: "See where the footprint comes from.",
    text: "Regional grid factors and transparent calculations turn raw activity into a result you can trace back to its source.",
    icon: MapPin,
    className: "parallax-card--three",
  },
  {
    label: "04 / Act",
    title: "Move from a number to a next step.",
    text: "Surface hotspots and practical recommendations without burying the user under a wall of climate jargon.",
    icon: Leaf,
    className: "parallax-card--four",
  },
];

export function ParallaxStory() {
  return (
    <section
      id="parallax-story"
      className="parallax-story"
      aria-labelledby="story-title"
    >
      <div className="parallax-sticky">
        <div className="parallax-heading">
          <p className="eyebrow">From evidence to action</p>
          <h2 id="story-title">Carbon intelligence that moves with you.</h2>
          <p className="lede">
            Scroll through the workflow: capture the evidence, verify the data,
            understand the calculation, then decide what to change.
          </p>
          <Link href="/features" className="parallax-link">
            See the full workflow <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="parallax-stage" aria-label="Snap2Green workflow cards">
          {cards.map(({ label, title, text, icon: Icon, className }, index) => (
            <article
              key={label}
              tabIndex={0}
              className={`parallax-card ${className}`}
              style={{ "--card-index": index } as CSSProperties}
            >
              <div className="parallax-card-top">
                <span>{label}</span>
                <Icon size={18} aria-hidden="true" />
              </div>
              <div className="parallax-card-content">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <div className="parallax-check">
                <Check size={13} aria-hidden="true" /> Traceable by design
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
