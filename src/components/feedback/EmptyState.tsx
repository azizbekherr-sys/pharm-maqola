import Icon from '@/components/icons/Icon';
import Button from '@/components/foundations/Button';

interface EmptyStateProps {
  icon?: Parameters<typeof Icon>[0]['name'];
  heading: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({ icon = 'search', heading, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-[var(--space-9)] px-[var(--space-4)] text-center min-h-[240px]">
      <div className="w-16 h-16 rounded-full bg-[var(--color-bg-soft)] flex items-center justify-center mb-[var(--space-4)]">
        <Icon name={icon} size={32} className="text-[var(--color-text-muted)]" />
      </div>
      <h2 className="text-[var(--fs-h4)] font-[var(--fw-bold)] text-[var(--color-text-primary)]">
        {heading}
      </h2>
      <p className="mt-[var(--space-2)] text-[var(--fs-body)] text-[var(--color-text-secondary)] max-w-[400px]">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button variant="secondary" size="md" onClick={onAction} className="mt-[var(--space-4)]">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
