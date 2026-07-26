'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitcher from '@/components/theme-switcher';

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
];

const EXPANDED_HEIGHT = 72;
const COLLAPSED_HEIGHT = 28;
const SCROLL_THRESHOLD = 80;

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const collapsed = scrolled && !hovered;
  const currentLabel = NAV_LINKS.find((link) => link.href === pathname)?.label ?? 'flourishers';

  return (
    <>
      <header
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: collapsed ? `${COLLAPSED_HEIGHT}px` : `${EXPANDED_HEIGHT}px`,
          background: collapsed ? 'var(--accent)' : 'var(--surface)',
          borderBottom: collapsed ? 'none' : 'var(--border-width) solid var(--border-color)',
          boxShadow: scrolled && !collapsed ? 'var(--shadow)' : 'none',
          cursor: collapsed ? 'pointer' : 'default',
          transition: 'height 0.28s ease, background-color 0.28s ease, box-shadow 0.28s ease',
        }}
      >
        {/* thin-bar state: still shows which page you're on */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: collapsed ? 1 : 0,
            pointerEvents: 'none',
            transition: 'opacity 0.2s ease',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--accent-text)',
          }}
        >
          {currentLabel}
        </div>

        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 1.5rem',
            height: `${EXPANDED_HEIGHT}px`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            opacity: collapsed ? 0 : 1,
            pointerEvents: collapsed ? 'none' : 'auto',
            transition: 'opacity 0.2s ease',
          }}
        >
          <Link
            href="/"
            className="brand-display"
            style={{ fontSize: '1.1rem', fontWeight: 700, textDecoration: 'none' }}
          >
            flourishers
          </Link>

          <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    padding: '0.45rem 0.9rem',
                    borderRadius: '999px',
                    background: isActive ? 'var(--accent)' : 'transparent',
                    color: isActive ? 'var(--accent-text)' : 'var(--text-muted)',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '0.95rem',
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <ThemeSwitcher />
        </div>
      </header>

      {/* reserves the header's expanded height in normal flow so page content starts below it */}
      <div style={{ height: `${EXPANDED_HEIGHT}px` }} />
    </>
  );
}
