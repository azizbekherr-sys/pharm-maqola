'use client';

interface TopicChipProps {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
  isStatic?: boolean;
}

export default function TopicChip({ label, isSelected = false, onClick, isStatic }: TopicChipProps) {
  if (isStatic) {
    return (
      <span className="inline-flex items-center h-8 px-[var(--space-3)] text-[var(--fs-caption)] font-[var(--fw-medium)] bg-[var(--color-bg-soft)] text-[var(--color-text-secondary)] rounded-[var(--radius-pill)] border border-[var(--color-border)]">
        {label}
      </span>
    );
  }

  return (
    <button
      onClick={onClick}
      aria-pressed={isSelected}
      className={`
        inline-flex items-center h-8 px-[var(--space-3)]
        text-[var(--fs-caption)] font-[var(--fw-medium)]
        rounded-[var(--radius-pill)] border transition-colors duration-150
        ${
          isSelected
            ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
            : 'bg-[var(--color-bg-main)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:bg-[var(--color-bg-soft)]'
        }
      `.trim()}
    >
      {label}
    </button>
  );
}
