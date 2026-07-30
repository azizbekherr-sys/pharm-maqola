'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/icons/Icon';
import Container from '@/components/layout/Container';
import SearchField from '@/components/forms/SearchField';
import MobileNavigation from '@/components/navigation/MobileNavigation';
import { SITE_NAME, NAV_ITEMS } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 bg-[var(--color-bg-main)] border-b border-[var(--color-border)] transition-shadow duration-150"
      style={{ boxShadow: scrolled ? 'var(--shadow-sm)' : 'none' }}
    >
      <Container>
        <div className="flex items-center justify-between h-[76px] md:max-lg:h-[64px] max-sm:h-[56px]">
          <Link
            href="/"
            className="text-[var(--fs-h3)] font-[var(--fw-extrabold)] text-[var(--color-primary)] hover:no-underline"
          >
            {SITE_NAME}
          </Link>

          <nav className="hidden md:flex items-center gap-[var(--space-5)]" aria-label="Asosiy navigatsiya">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-[var(--fs-body)] font-[var(--fw-medium)] transition-colors duration-150
                    hover:text-[var(--color-primary)] hover:no-underline
                    ${isActive ? 'text-[var(--color-primary)] font-[var(--fw-bold)] border-b-2 border-[var(--color-primary)] pb-1' : 'text-[var(--color-text-primary)]'}
                  `.trim()}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-[var(--space-3)]">
            <SearchField variant="header" />
          </div>

          <div className="flex md:hidden items-center gap-[var(--space-2)]">
            <SearchField variant="header" />
            <button
              ref={menuButtonRef}
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center justify-center w-11 h-11 rounded-[var(--radius-md)] hover:bg-[var(--color-bg-soft)] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label="Menyu"
            >
              <Icon name="menu" size={24} />
            </button>
          </div>
        </div>
      </Container>

      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        triggerRef={menuButtonRef}
      />
    </header>
  );
}
