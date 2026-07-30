import Link from 'next/link';
import Icon from '@/components/icons/Icon';
import { UZ } from '@/lib/constants';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const showMobileTruncation = items.length > 2;

  return (
    <nav aria-label={UZ.breadcrumbLabel} className="py-[var(--space-3)]">
      <ol className="flex items-center flex-wrap gap-[var(--space-1)] text-[var(--fs-caption)] min-h-8">
        <li className={showMobileTruncation ? 'hidden sm:flex items-center' : undefined}>
          <Link
            href="/"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors hover:no-underline"
          >
            {UZ.home}
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          const hideOnMobile = showMobileTruncation && !isLast && i < items.length - 1;

          return (
            <li
              key={i}
              className={`flex items-center gap-[var(--space-1)] ${hideOnMobile ? 'hidden sm:flex' : ''}`}
            >
              <Icon name="chevron-right" size={14} className="text-[var(--color-text-muted)]" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors hover:no-underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[var(--color-text-primary)] font-[var(--fw-medium)] line-clamp-1" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
