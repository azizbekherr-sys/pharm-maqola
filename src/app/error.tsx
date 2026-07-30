'use client';

import Container from '@/components/layout/Container';
import Icon from '@/components/icons/Icon';
import { UZ } from '@/lib/constants';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-[var(--space-10)] text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--color-emergency-bg)] flex items-center justify-center mb-[var(--space-4)]">
          <Icon name="alert-circle" size={32} className="text-[var(--color-emergency)]" />
        </div>
        <h1 className="text-[var(--fs-h1)] font-[var(--fw-extrabold)] text-[var(--color-text-primary)] mb-[var(--space-2)]">
          {UZ.errorTitle}
        </h1>
        <p className="text-[var(--fs-body)] text-[var(--color-text-secondary)] mb-[var(--space-5)] max-w-md">
          {UZ.errorDescription}
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-[var(--space-2)] h-11 px-[var(--space-5)] bg-[var(--color-primary)] text-white rounded-[var(--radius-md)] font-[var(--fw-semibold)] text-[var(--fs-body)] hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          {UZ.retry}
        </button>
      </div>
    </Container>
  );
}
