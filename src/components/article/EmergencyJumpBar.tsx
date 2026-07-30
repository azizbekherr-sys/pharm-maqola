import Icon from '@/components/icons/Icon';
import { UZ } from '@/lib/constants';

interface EmergencyJumpBarProps {
  targetId: string;
}

export default function EmergencyJumpBar({ targetId }: EmergencyJumpBarProps) {
  return (
    <div
      className="rounded-[var(--radius-md)] p-[var(--space-3)] my-[var(--space-3)]"
      style={{
        backgroundColor: 'var(--color-emergency-bg)',
        borderLeft: '4px solid var(--color-emergency)',
      }}
    >
      <a
        href={`#${targetId}`}
        className="flex items-center gap-[var(--space-2)] text-[var(--fs-body-sm)] font-[var(--fw-semibold)] hover:no-underline"
        style={{ color: 'var(--color-emergency)' }}
      >
        <Icon name="alert-circle" size={20} aria-hidden="true" />
        <span>{UZ.emergencyHeading}</span>
        <Icon name="chevron-down" size={16} className="ml-auto" aria-hidden="true" />
      </a>
    </div>
  );
}
