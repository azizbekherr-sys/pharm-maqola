import Link from 'next/link';
import type { Doctor } from '@/types';
import { UZ } from '@/lib/constants';
import { getInitial } from '@/lib/utils';

interface DoctorProfileCardProps {
  doctor: Doctor;
}

export default function DoctorProfileCard({ doctor }: DoctorProfileCardProps) {
  return (
    <Link
      href={`/shifokor/${doctor.slug}`}
      className="group flex flex-col items-center p-[var(--space-4)] bg-[var(--color-bg-main)] border border-[var(--color-border)] rounded-[var(--radius-md)] hover:shadow-[var(--shadow-md)] transition-all duration-150 hover:no-underline min-w-[220px]"
    >
      <div
        className="w-16 h-16 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] font-[var(--fw-bold)] text-[var(--fs-h4)]"
        role="img"
        aria-label={doctor.name}
      >
        {getInitial(doctor.name)}
      </div>
      <h3 className="mt-[var(--space-2)] text-[var(--fs-body)] font-[var(--fw-semibold)] text-[var(--color-text-primary)] text-center">
        {doctor.name}
      </h3>
      <p className="text-[var(--fs-caption)] text-[var(--color-text-secondary)] text-center">
        {doctor.specialty}
      </p>
      <p className="text-[var(--fs-caption)] text-[var(--color-text-muted)]">
        {doctor.articleCount} {UZ.articles}
      </p>
      <span className="mt-[var(--space-2)] text-[var(--fs-caption)] font-[var(--fw-medium)] text-[var(--color-primary)] group-hover:underline">
        {UZ.viewProfile}
      </span>
    </Link>
  );
}
