import Icon from '@/components/icons/Icon';
import { UZ } from '@/lib/constants';

interface DoctorReviewedBadgeProps {
  variant?: 'compact' | 'full';
  reviewerName?: string;
  className?: string;
}

export default function DoctorReviewedBadge({ variant = 'compact', reviewerName, className = '' }: DoctorReviewedBadgeProps) {
  return (
    <div className={`flex items-center gap-[var(--space-1)] ${className}`}>
      <Icon
        name="check-shield"
        size={variant === 'compact' ? 20 : 24}
        className="text-[var(--color-success)]"
        label={UZ.doctorReviewed}
      />
      <span className={`${variant === 'compact' ? 'text-[var(--fs-micro)]' : 'text-[var(--fs-caption)]'} font-[var(--fw-medium)] text-[var(--color-success)]`}>
        {UZ.doctorReviewed}
      </span>
      {variant === 'full' && reviewerName && (
        <span className="text-[var(--fs-caption)] text-[var(--color-text-secondary)]">
          &middot; {reviewerName}
        </span>
      )}
    </div>
  );
}
