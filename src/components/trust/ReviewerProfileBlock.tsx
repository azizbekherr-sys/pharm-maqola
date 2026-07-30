import Link from 'next/link';
import type { Doctor } from '@/types';
import { UZ } from '@/lib/constants';
import { formatDate } from '@/components/discovery/ArticleMeta';
import { getInitial } from '@/lib/utils';

interface ReviewerProfileBlockProps {
  doctor: Doctor;
  updatedDate: string;
  variant?: 'inline' | 'block';
  className?: string;
}

export default function ReviewerProfileBlock({ doctor, updatedDate, variant = 'block', className = '' }: ReviewerProfileBlockProps) {
  const avatarSize = variant === 'inline' ? 'w-10 h-10' : 'w-14 h-14';

  return (
    <div className={`flex items-center gap-[var(--space-3)] ${variant === 'block' ? 'p-[var(--space-4)] bg-[var(--color-bg-soft)] rounded-[var(--radius-md)]' : ''} ${className}`}>
      <Link
        href={`/shifokor/${doctor.slug}`}
        className="flex-shrink-0"
      >
        <div
          className={`${avatarSize} rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] font-[var(--fw-bold)] text-[var(--fs-body)]`}
          role="img"
          aria-label={doctor.name}
        >
          {getInitial(doctor.name)}
        </div>
      </Link>
      <div>
        <Link
          href={`/shifokor/${doctor.slug}`}
          className="text-[var(--fs-body)] font-[var(--fw-semibold)] text-[var(--color-text-primary)] hover:text-[var(--color-primary)] hover:no-underline"
        >
          {doctor.name}
        </Link>
        <p className="text-[var(--fs-caption)] text-[var(--color-text-secondary)]">
          {doctor.specialty}
        </p>
        <p className="text-[var(--fs-caption)] text-[var(--color-text-muted)]">
          {UZ.lastUpdated}: {formatDate(updatedDate)}
        </p>
      </div>
    </div>
  );
}
