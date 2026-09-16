'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  ['Home', '/'],
  ['Features', '/features'],
  ['Pricing', '/pricing'],
  ['Dashboard', '/dashboard'],
  ['Contact', '/contact'],
];

function Logo() {
  return <Link className="logo" href="/"><svg viewBox="0 0 32 32" fill="none"><path d="M16 4C10 8 6 14 6 19a10 10 0 0020 0c0-5-4-11-10-15z" fill="#16A34A"/><path d="M16 10c-3 3-5 6.5-5 9.5a5 5 0 0010 0c0-3-2-6.5-5-9.5z" fill="#4ADE80"/></svg>Snap2Green</Link>;
}

export function Header({ current }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return <header className={scrolled ? 'is-scrolled' : ''}>
    <nav className="nav">
      <Logo />
      <button className={`menu-toggle ${open ? 'is-open' : ''}`} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><span></span><span></span><span></span></button>
      <div className={`nav-links ${open ? 'is-open' : ''}`}>
        {links.map(([label, href]) => <Link key={href} href={href} aria-current={current === label.toLowerCase() ? 'page' : undefined} onClick={closeMenu}>{label}</Link>)}
        <Link className="btn-primary nav-cta-mobile" href="/contact" onClick={closeMenu}>Get early access</Link>
      </div>
      <div className="nav-right"><Link className="btn-primary" href="/contact">Get early access</Link></div>
    </nav>
  </header>;
}

export function Footer() {
  return <footer><div className="wrap">
    <div className="footer-top"><Logo /><div className="footer-cols"><div className="footer-col"><h4>Product</h4><Link href="/features">Features</Link><Link href="/pricing">Pricing</Link><Link href="/dashboard">Dashboard</Link></div><div className="footer-col"><h4>Company</h4><Link href="/contact">Contact</Link></div></div></div>
    <div className="footer-bottom"><span>&copy; 2026 Snap2Green &mdash; built at AISSMS Institute of Information Technology, Pune.</span><span>Emission factors sourced from CEA (2023), IEA, and MarketsandMarkets.</span></div>
  </div></footer>;
}

export function Shell({ current, children }) {
  return <><Header current={current} />{children}<Footer /></>;
}
