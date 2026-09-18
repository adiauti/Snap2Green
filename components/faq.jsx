"use client";

import { useState } from "react";

export function FaqItem({ question, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button className="faq-q" type="button" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span className="plus"></span>
      </button>
      <div className="faq-a" style={{ maxHeight: open ? "200px" : undefined }}>
        <p>{children}</p>
      </div>
    </div>
  );
}
