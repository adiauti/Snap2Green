"use client";

import { useState } from "react";
import { Shell } from "@/components/site-shell";

import { Reveal } from "@/components/reveal";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };
  return (
    <Shell current="contact">
      <main>
        <section className="page-hero">
          <Reveal>
            <div className="wrap">
              <p className="eyebrow">Get in touch</p>
              <h1 style={{ marginTop: 10 }}>Let's get your number.</h1>
              <p className="lede">
                Tell us a bit about how you'd use Snap2Green, and we'll follow
                up directly.
              </p>
            </div>
          </Reveal>
        </section>
        <section style={{ paddingTop: 40 }}>
          <Reveal>
            <div className="wrap contact-grid">
              <form onSubmit={submit} noValidate>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="field">
                  <label htmlFor="interest">I'm interested as</label>
                  <select id="interest" name="interest">
                    <option>Personal</option>
                    <option>Campus / institution</option>
                    <option>Enterprise</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us a little about your use case"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Send message
                </button>
                <div
                  className={`form-success ${sent ? "is-visible" : ""}`}
                  tabIndex={sent ? -1 : undefined}
                >
                  Thanks &mdash; that's in. We'll get back to you shortly.
                </div>
              </form>
            </div>
          </Reveal>
        </section>
      </main>
    </Shell>
  );
}
