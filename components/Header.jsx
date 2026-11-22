'use client';

import Link from 'next/link';
import { useState } from 'react';
import { contact } from '@/data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const goTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        <Link className="brand" href="/" prefetch={false} onClick={goTop}>
          <img
            className="brand__logo"
            src="/assets/brand/volpe-logo.png"
            width="60"
            height="60"
            alt=""
          />
          <span className="brand__text">
            <strong>VOLPE</strong>
            <small>Renovations &amp; Co.</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
        <nav className={`nav${open ? ' is-open' : ''}`} id="main-nav" aria-label="Main navigation">
          <Link href="/" prefetch={false} onClick={goTop}>Home</Link>
          <Link href="/services/" prefetch={false} onClick={goTop}>Services</Link>
          <Link href="/about/" prefetch={false} onClick={goTop}>About Us</Link>
          <Link href="/contact/" prefetch={false} onClick={goTop}>Contact</Link>
          <Link href="/#faq" prefetch={false} onClick={close}>FAQ</Link>
          <a className="button button--small" href={contact.smsHref} onClick={close}>Get a free quote</a>
        </nav>
      </div>
    </header>
  );
}
