'use client';

import { useEffect, useRef, useCallback } from 'react';

interface UseAccessibleOverlayOptions {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
  autoFocusRef?: React.RefObject<HTMLElement | null>;
}

export function useAccessibleOverlay({
  isOpen,
  onClose,
  triggerRef,
  autoFocusRef,
}: UseAccessibleOverlayOptions) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }

      if (e.key !== 'Tab') return;
      const overlay = overlayRef.current;
      if (!overlay) return;

      const focusable = overlay.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';

    const mainContent = document.querySelector('main');
    const footer = document.querySelector('footer');
    if (mainContent) mainContent.setAttribute('inert', '');
    if (footer) footer.setAttribute('inert', '');

    const focusTarget = autoFocusRef?.current || overlayRef.current;
    requestAnimationFrame(() => focusTarget?.focus());

    document.addEventListener('keydown', handleKeyDown);

    const triggerEl = triggerRef?.current;

    return () => {
      document.body.style.overflow = '';
      if (mainContent) mainContent.removeAttribute('inert');
      if (footer) footer.removeAttribute('inert');
      document.removeEventListener('keydown', handleKeyDown);

      const returnTarget = triggerEl || previousFocusRef.current;
      returnTarget?.focus();
    };
  }, [isOpen, handleKeyDown, triggerRef, autoFocusRef]);

  return overlayRef;
}
