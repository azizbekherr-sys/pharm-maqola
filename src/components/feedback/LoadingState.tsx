interface LoadingStateProps {
  variant?: 'card' | 'row' | 'text';
  count?: number;
}

function SkeletonCard() {
  return (
    <div className="bg-[var(--color-bg-main)] border border-[var(--color-border)] rounded-[var(--radius-md)] overflow-hidden" aria-busy="true">
      <div className="skeleton w-full" style={{ aspectRatio: '16/9' }} />
      <div className="p-[var(--space-4)] space-y-[var(--space-2)]">
        <div className="skeleton h-4 w-20 rounded" />
        <div className="skeleton h-5 w-full rounded" />
        <div className="skeleton h-5 w-3/4 rounded" />
        <div className="skeleton h-3 w-1/2 rounded" />
      </div>
    </div>
  );
}

function SkeletonRow() {
  return (
    <div className="flex items-center gap-[var(--space-3)] py-[var(--space-3)]" aria-busy="true">
      <div className="skeleton w-16 h-16 rounded-[var(--radius-sm)] flex-shrink-0" />
      <div className="flex-1 space-y-[var(--space-2)]">
        <div className="skeleton h-4 w-full rounded" />
        <div className="skeleton h-3 w-1/2 rounded" />
      </div>
    </div>
  );
}

function SkeletonText() {
  return (
    <div className="space-y-[var(--space-2)]" aria-busy="true">
      <div className="skeleton h-4 w-full rounded" />
      <div className="skeleton h-4 w-5/6 rounded" />
      <div className="skeleton h-4 w-4/6 rounded" />
    </div>
  );
}

export default function LoadingState({ variant = 'card', count = 3 }: LoadingStateProps) {
  const Component = variant === 'card' ? SkeletonCard : variant === 'row' ? SkeletonRow : SkeletonText;

  return (
    <div
      className={variant === 'card' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-4)]' : 'space-y-[var(--space-2)]'}
      aria-busy="true"
      aria-label="Yuklanmoqda..."
    >
      {Array.from({ length: count }, (_, i) => (
        <Component key={i} />
      ))}
    </div>
  );
}
