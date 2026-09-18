"use client";

import { useEffect, useState } from "react";

export function CountUp({ end, decimals = 0, suffix = "" }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setValue(end);
      return;
    }
    let frame;
    const started = performance.now();
    const step = (now) => {
      const progress = Math.min((now - started) / 1200, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end]);
  return (
    <>
      {value.toFixed(decimals)}
      {suffix}
    </>
  );
}
