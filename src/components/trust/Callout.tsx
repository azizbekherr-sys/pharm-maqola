import Icon from '@/components/icons/Icon';
import { UZ } from '@/lib/constants';
import type { CalloutVariant } from '@/types';

interface CalloutProps {
  variant: CalloutVariant;
  heading?: string;
  children: React.ReactNode;
  actionLabel?: string;
  actionHref?: string;
}

const config: Record<CalloutVariant, {
  icon: Parameters<typeof Icon>[0]['name'];
  borderColor: string;
  bgColor: string;
  iconColor: string;
  defaultHeading?: string;
}> = {
  info: {
    icon: 'info',
    borderColor: 'var(--color-primary)',
    bgColor: 'var(--color-bg-soft)',
    iconColor: 'var(--color-primary)',
  },
  medical: {
    icon: 'medical-cross',
    borderColor: 'var(--color-primary)',
    bgColor: 'var(--color-primary-light)',
    iconColor: 'var(--color-primary)',
    defaultHeading: UZ.medicalWarning,
  },
  warning: {
    icon: 'alert-triangle',
    borderColor: 'var(--color-warning)',
    bgColor: 'var(--color-warning-bg)',
    iconColor: 'var(--color-warning)',
    defaultHeading: UZ.warningHeading,
  },
  emergency: {
    icon: 'alert-circle',
    borderColor: 'var(--color-emergency)',
    bgColor: 'var(--color-emergency-bg)',
    iconColor: 'var(--color-emergency)',
    defaultHeading: UZ.emergencyHeading,
  },
};

export default function Callout({ variant, heading, children, actionLabel, actionHref }: CalloutProps) {
  const c = config[variant];
  const displayHeading = heading || c.defaultHeading;

  return (
    <div
      className="rounded-[var(--radius-md)] p-[var(--space-4)] my-[var(--space-4)]"
      style={{
        backgroundColor: c.bgColor,
        borderLeft: `4px solid ${c.borderColor}`,
      }}
    >
      <div className="flex gap-[var(--space-3)]">
        <Icon
          name={c.icon}
          size={24}
          className="flex-shrink-0 mt-0.5"
          style={{ color: c.iconColor }}
          aria-hidden="true"
        />
        <div>
          {displayHeading && (
            <p className="font-[var(--fw-bold)] text-[var(--fs-body)] text-[var(--color-text-primary)] mb-[var(--space-1)]">
              {displayHeading}
            </p>
          )}
          <div className="text-[var(--fs-body-sm)] text-[var(--color-text-primary)] leading-[var(--lh-body)]">
            {children}
          </div>
          {actionLabel && actionHref && (
            <a
              href={actionHref}
              className="inline-flex items-center gap-[var(--space-1)] mt-[var(--space-2)] font-[var(--fw-semibold)] text-[var(--fs-body-sm)]"
              style={{ color: c.iconColor }}
            >
              <Icon name="phone" size={16} />
              {actionLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
