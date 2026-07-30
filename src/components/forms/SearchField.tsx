'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/icons/Icon';
import { UZ } from '@/lib/constants';
import { useAccessibleOverlay } from '@/lib/useAccessibleOverlay';

interface SearchFieldProps {
  variant: 'header' | 'full';
  defaultValue?: string;
}

function MobileSearchOverlay({
  isOpen,
  onClose,
  triggerRef,
}: {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const overlayRef = useAccessibleOverlay({
    isOpen,
    onClose,
    triggerRef,
    autoFocusRef: inputRef,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      router.push(`/qidiruv?q=${encodeURIComponent(value.trim())}`);
      onClose();
    }
  };

  const handleClear = () => {
    setValue('');
    inputRef.current?.focus();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={UZ.search}
      className="fixed inset-0 z-50 bg-[var(--color-bg-main)] p-[var(--space-4)]"
    >
      <form onSubmit={handleSubmit} role="search" className="flex items-center gap-[var(--space-2)]">
        <label htmlFor="mobile-search" className="sr-only">{UZ.search}</label>
        <div className="relative flex-1">
          <Icon
            name="search"
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] pointer-events-none"
          />
          <input
            ref={inputRef}
            id="mobile-search"
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={UZ.searchPlaceholder}
            className="w-full h-11 pl-10 pr-10 text-[var(--fs-body)] border border-[var(--color-border)] rounded-[var(--radius-pill)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)]"
          />
          {value && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
              aria-label={UZ.clearSearch}
            >
              <Icon name="x" size={16} />
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex items-center justify-center w-11 h-11 rounded-[var(--radius-md)] hover:bg-[var(--color-bg-soft)]"
          aria-label={UZ.closeSearch}
        >
          <Icon name="x" size={24} />
        </button>
      </form>
    </div>
  );
}

export default function SearchField({ variant, defaultValue = '' }: SearchFieldProps) {
  const [value, setValue] = useState(defaultValue);
  const [mobileOpen, setMobileOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchTriggerRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      router.push(`/qidiruv?q=${encodeURIComponent(value.trim())}`);
    }
  };

  const handleClear = () => {
    setValue('');
    inputRef.current?.focus();
  };

  if (variant === 'header') {
    return (
      <>
        <form
          onSubmit={handleSubmit}
          role="search"
          className="hidden md:flex items-center relative"
        >
          <label htmlFor="header-search" className="sr-only">{UZ.search}</label>
          <Icon
            name="search"
            size={20}
            className="absolute left-3 text-[var(--color-text-muted)] pointer-events-none"
          />
          <input
            ref={inputRef}
            id="header-search"
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={UZ.searchPlaceholder}
            className="h-11 w-[320px] pl-10 pr-3 text-[var(--fs-body-sm)] bg-[var(--color-bg-soft)] border border-[var(--color-border)] rounded-[var(--radius-pill)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:bg-[var(--color-bg-main)] transition-colors"
          />
          {value && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              aria-label={UZ.clearSearch}
            >
              <Icon name="x" size={16} />
            </button>
          )}
        </form>

        <div className="md:hidden">
          <button
            ref={searchTriggerRef}
            onClick={() => setMobileOpen(true)}
            className="flex items-center justify-center w-11 h-11 rounded-[var(--radius-md)] hover:bg-[var(--color-bg-soft)] transition-colors"
            aria-label={UZ.search}
          >
            <Icon name="search" size={24} />
          </button>
          <MobileSearchOverlay
            isOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
            triggerRef={searchTriggerRef}
          />
        </div>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="relative w-full">
      <label htmlFor="full-search" className="sr-only">{UZ.search}</label>
      <Icon
        name="search"
        size={24}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] pointer-events-none"
      />
      <input
        ref={inputRef}
        id="full-search"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={UZ.searchPlaceholder}
        className="w-full h-14 pl-12 pr-12 text-[var(--fs-h4)] bg-[var(--color-bg-main)] border border-[var(--color-border)] rounded-[var(--radius-pill)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] transition-colors"
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
          aria-label={UZ.clearSearch}
        >
          <Icon name="x" size={20} />
        </button>
      )}
    </form>
  );
}
