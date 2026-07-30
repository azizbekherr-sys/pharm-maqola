'use client';

import { useState } from 'react';
import Icon from '@/components/icons/Icon';
import { UZ } from '@/lib/constants';

export default function ArticleFeedback() {
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null);

  if (feedback) {
    return (
      <div className="py-[var(--space-5)] px-[var(--space-4)] bg-[var(--color-bg-soft)] rounded-[var(--radius-md)] text-center">
        <p className="text-[var(--fs-body)] font-[var(--fw-medium)] text-[var(--color-text-primary)]">
          {UZ.thankYouFeedback}
        </p>
      </div>
    );
  }

  return (
    <div className="py-[var(--space-5)] px-[var(--space-4)] bg-[var(--color-bg-soft)] rounded-[var(--radius-md)] text-center">
      <p className="text-[var(--fs-body)] font-[var(--fw-semibold)] text-[var(--color-text-primary)] mb-[var(--space-3)]">
        {UZ.wasArticleHelpful}
      </p>
      <div className="flex items-center justify-center gap-[var(--space-3)]">
        <button
          onClick={() => setFeedback('yes')}
          className="inline-flex items-center gap-[var(--space-2)] h-11 px-[var(--space-5)] rounded-[var(--radius-md)] border border-[var(--color-border)] text-[var(--fs-body)] font-[var(--fw-medium)] text-[var(--color-text-primary)] hover:bg-[var(--color-success-bg)] hover:border-[var(--color-success)] transition-colors"
        >
          <Icon name="check" size={18} className="text-[var(--color-success)]" />
          {UZ.yes}
        </button>
        <button
          onClick={() => setFeedback('no')}
          className="inline-flex items-center gap-[var(--space-2)] h-11 px-[var(--space-5)] rounded-[var(--radius-md)] border border-[var(--color-border)] text-[var(--fs-body)] font-[var(--fw-medium)] text-[var(--color-text-primary)] hover:bg-[var(--color-emergency-bg)] hover:border-[var(--color-emergency)] transition-colors"
        >
          <Icon name="x" size={18} className="text-[var(--color-emergency)]" />
          {UZ.no}
        </button>
      </div>
    </div>
  );
}
