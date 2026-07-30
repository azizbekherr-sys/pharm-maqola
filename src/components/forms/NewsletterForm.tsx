'use client';

import { useState, type FormEvent } from 'react';
import { UZ } from '@/lib/constants';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-[var(--space-2)]">
      <div className="flex flex-col sm:flex-row gap-[var(--space-2)]">
        <label htmlFor="newsletter-email" className="sr-only">Email</label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
          placeholder="email@example.com"
          className="flex-1 h-11 px-3 text-[var(--fs-body-sm)] text-[var(--color-text-primary)] bg-[var(--color-bg-main)] border border-[var(--color-border)] rounded-[var(--radius-md)] placeholder:text-[var(--color-text-muted)]"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="h-11 px-4 text-[var(--fs-body-sm)] font-[var(--fw-semibold)] bg-[var(--color-primary)] text-white rounded-[var(--radius-md)] hover:bg-[var(--color-primary-hover)] transition-colors disabled:opacity-40"
        >
          {status === 'loading' ? '...' : UZ.subscribe}
        </button>
      </div>
      <div aria-live="polite">
        {status === 'success' && (
          <p className="text-[var(--fs-caption)] text-[var(--color-success)]">{UZ.subscribeSuccess}</p>
        )}
        {status === 'error' && (
          <p className="text-[var(--fs-caption)] text-[var(--color-emergency)]">{UZ.emailError}</p>
        )}
      </div>
    </form>
  );
}
