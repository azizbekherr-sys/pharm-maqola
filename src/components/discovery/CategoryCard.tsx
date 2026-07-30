import Link from 'next/link';
import Icon from '@/components/icons/Icon';
import type { Category } from '@/types';
import { UZ } from '@/lib/constants';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/kategoriya/${category.slug}`}
      className="group block p-[var(--space-5)] bg-[var(--color-bg-main)] border border-[var(--color-border)] rounded-[var(--radius-lg)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition-all duration-150 hover:no-underline min-h-[160px]"
    >
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)]"
          aria-hidden="true"
        >
          <Icon name={category.icon as Parameters<typeof Icon>[0]['name']} size={20} />
        </div>
        <Icon
          name="chevron-right"
          size={20}
          className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors"
        />
      </div>
      <h3 className="mt-[var(--space-3)] text-[var(--fs-body)] font-[var(--fw-semibold)] text-[var(--color-text-primary)]">
        {category.name}
      </h3>
      <p className="mt-[var(--space-1)] text-[var(--fs-caption)] text-[var(--color-text-muted)]">
        {category.articleCount} {UZ.articles}
      </p>
    </Link>
  );
}
