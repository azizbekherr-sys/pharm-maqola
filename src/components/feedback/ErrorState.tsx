'use client';

import Icon from '@/components/icons/Icon';
import Button from '@/components/foundations/Button';
import { UZ } from '@/lib/constants';

interface ErrorStateProps {
  onRetry?: () => void;
  fullPage?: boolean;
}

export default function ErrorState({ onRetry, fullPage }: ErrorStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center px-[var(--space-4)] text-center ${
        fullPage ? 'min-h-[60vh]' : 'py-[var(--space-8)]'
      }`}
      role="alert"
      aria-live="assertive"
    >
      <div className="w-16 h-16 rounded-full bg-[var(--color-emergency-bg)] flex items-center justify-center mb-[var(--space-4)]">
        <Icon name="alert-circle" size={32} className="text-[var(--color-emergency)]" />
      </div>
      <h2 className="text-[var(--fs-h4)] font-[var(--fw-bold)] text-[var(--color-text-primary)]">
        {UZ.errorTitle}
      </h2>
      <p className="mt-[var(--space-2)] text-[var(--fs-body)] text-[var(--color-text-secondary)] max-w-[400px]">
        {UZ.errorDescription}
      </p>
      {onRetry && (
        <Button variant="primary" size="md" onClick={onRetry} className="mt-[var(--space-4)]">
          {UZ.retry}
        </Button>
      )}
    </div>
  );
}
