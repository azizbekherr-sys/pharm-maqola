'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/icons/Icon';
import { SITE_NAME, NAV_ITEMS, UZ } from '@/lib/constants';
import { categories } from '@/data/mock';
import { useAccessibleOverlay } from '@/lib/useAccessibleOverlay';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}

export default function MobileNavigation({ isOpen, onClose, triggerRef }: MobileNavigationProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const overlayRef = useAccessibleOverlay({
    isOpen,
    onClose,
    triggerRef,
    autoFocusRef: closeButtonRef,
  });

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <div
        ref={overlayRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigatsiya"
        className={`
          fixed top-0 left-0 z-50 w-[85vw] max-w-[360px] h-full
          bg-[var(--color-bg-main)] shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `.trim()}
      >
        <div className="flex items-center justify-between p-[var(--space-4)] border-b border-[var(--color-border)]">
          <span className="text-[var(--fs-h4)] font-[var(--fw-extrabold)] text-[var(--color-primary)]">
            {SITE_NAME}
          </span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex items-center justify-center w-11 h-11 rounded-[var(--radius-md)] hover:bg-[var(--color-bg-soft)] transition-colors"
            aria-label="Menyuni yopish"
          >
            <Icon name="x" size={24} />
          </button>
        </div>

        <nav className="p-[var(--space-4)] overflow-y-auto max-h-[calc(100dvh-72px)]" aria-label="Asosiy navigatsiya">
          <ul className="space-y-[var(--space-1)]">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`
                      flex items-center h-11 px-[var(--space-3)] rounded-[var(--radius-md)]
                      text-[var(--fs-body)] font-[var(--fw-medium)]
                      transition-colors hover:no-underline
                      ${isActive ? 'bg-[var(--color-primary-light)] text-[var(--color-primary)] font-[var(--fw-bold)]' : 'text-[var(--color-text-primary)] hover:bg-[var(--color-bg-soft)]'}
                    `.trim()}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-[var(--space-5)] pt-[var(--space-4)] border-t border-[var(--color-border)]">
            <p className="text-[var(--fs-caption)] font-[var(--fw-semibold)] text-[var(--color-text-muted)] uppercase tracking-wide mb-[var(--space-2)]">
              {UZ.categories}
            </p>
            <ul className="space-y-[var(--space-1)]">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/kategoriya/${cat.slug}`}
                    onClick={onClose}
                    className="flex items-center h-11 px-[var(--space-3)] rounded-[var(--radius-md)] text-[var(--fs-body-sm)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-soft)] hover:no-underline transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
