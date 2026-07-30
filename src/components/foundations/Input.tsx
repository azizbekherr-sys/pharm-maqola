'use client';

import { type InputHTMLAttributes, forwardRef, useId } from 'react';
import Icon from '@/components/icons/Icon';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  leadingIcon?: Parameters<typeof Icon>[0]['name'];
  hideLabel?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, helperText, leadingIcon, hideLabel, className = '', id: idProp, ...props },
  ref
) {
  const generatedId = useId();
  const id = idProp || generatedId;
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={`block text-[var(--fs-body-sm)] font-[var(--fw-medium)] text-[var(--color-text-primary)] mb-[var(--space-1)] ${
          hideLabel ? 'sr-only' : ''
        }`}
      >
        {label}
      </label>
      <div className="relative">
        {leadingIcon && (
          <Icon
            name={leadingIcon}
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] pointer-events-none"
          />
        )}
        <input
          ref={ref}
          id={id}
          className={`
            w-full h-11 px-3 ${leadingIcon ? 'pl-10' : ''}
            text-[var(--fs-body)] text-[var(--color-text-primary)]
            bg-[var(--color-bg-main)]
            border rounded-[var(--radius-md)]
            placeholder:text-[var(--color-text-muted)]
            transition-colors duration-150
            disabled:opacity-40 disabled:pointer-events-none
            ${
              error
                ? 'border-[var(--color-emergency)] focus:border-[var(--color-emergency)]'
                : 'border-[var(--color-border)] focus:border-[var(--color-primary)]'
            }
          `.trim()}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
      </div>
      {error && (
        <p id={errorId} className="mt-[var(--space-1)] text-[var(--fs-caption)] text-[var(--color-emergency)]" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-[var(--space-1)] text-[var(--fs-caption)] text-[var(--color-text-muted)]">
          {helperText}
        </p>
      )}
    </div>
  );
});

export default Input;
