interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: string;
}

export default function ImagePlaceholder({ label = 'Rasm', className = '', aspectRatio = '16/9' }: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-[#EDF1F0] border border-[var(--color-border)] flex items-center justify-center ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-1 text-[var(--color-text-muted)]">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span className="text-[var(--fs-micro)] font-[var(--fw-medium)]">{label}</span>
      </div>
    </div>
  );
}
