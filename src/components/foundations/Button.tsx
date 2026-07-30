'use client';

import { type ButtonHTMLAttributes } from 'react';
import Icon from '@/components/icons/Icon';
import type { ButtonVariant, ButtonSize } from '@/types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  icon?: Parameters<typeof Icon>[0]['name'];
  iconPosition?: 'left' | 'right';
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] border border-transparent',
  secondary:
    'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-strong)] hover:bg-[var(--color-bg-soft)]',
  ghost:
    'bg-transparent text-[var(--color-primary)] border border-transparent hover:bg-[var(--color-primary-light)]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-[var(--fs-body-sm)]',
  md: 'h-11 px-4 text-[var(--fs-body)]',
  lg: 'h-[52px] px-6 text-[var(--fs-body-lg)]',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  children,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        font-[var(--fw-semibold)]
        rounded-[var(--radius-md)]
        transition-colors duration-150 ease-in-out
        cursor-pointer
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${isDisabled ? 'opacity-40 pointer-events-none' : 'active:scale-[0.98]'}
        ${className}
      `.trim()}
      disabled={isDisabled}
      aria-disabled={isDisabled || undefined}
      {...props}
    >
      {isLoading ? (
        <Icon name="loader" size={size === 'sm' ? 16 : 20} className="animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <Icon name={icon} size={size === 'sm' ? 16 : 20} />}
          {children}
          {icon && iconPosition === 'right' && <Icon name={icon} size={size === 'sm' ? 16 : 20} />}
        </>
      )}
    </button>
  );
}
