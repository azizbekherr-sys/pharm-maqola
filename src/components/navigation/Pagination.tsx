'use client';

import Icon from '@/components/icons/Icon';
import { UZ } from '@/lib/constants';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  loadedItems?: number;
}

export default function Pagination({ currentPage, totalPages, onPageChange, totalItems, loadedItems }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | 'ellipsis')[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== 'ellipsis') {
      pages.push('ellipsis');
    }
  }

  const canLoadMore = currentPage < totalPages;

  return (
    <nav aria-label={UZ.pagination}>
      {/* Desktop: numbered pagination */}
      <div className="hidden sm:flex items-center justify-center gap-[var(--space-1)]">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-11 h-11 rounded-[var(--radius-md)] border border-[var(--color-border)] hover:bg-[var(--color-bg-soft)] transition-colors disabled:opacity-40 disabled:pointer-events-none"
          aria-label={UZ.previousPage}
        >
          <Icon name="chevron-left" size={20} />
        </button>

        {pages.map((page, i) =>
          page === 'ellipsis' ? (
            <span key={`e-${i}`} className="w-11 h-11 flex items-center justify-center text-[var(--color-text-muted)]">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`
                w-11 h-11 rounded-[var(--radius-md)] text-[var(--fs-body-sm)] font-[var(--fw-medium)] transition-colors
                ${
                  page === currentPage
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'border border-[var(--color-border)] hover:bg-[var(--color-bg-soft)]'
                }
              `.trim()}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-11 h-11 rounded-[var(--radius-md)] border border-[var(--color-border)] hover:bg-[var(--color-bg-soft)] transition-colors disabled:opacity-40 disabled:pointer-events-none"
          aria-label={UZ.nextPage}
        >
          <Icon name="chevron-right" size={20} />
        </button>
      </div>

      {/* Mobile: load more button */}
      <div className="sm:hidden flex flex-col items-center gap-[var(--space-2)]">
        {canLoadMore && (
          <button
            onClick={() => onPageChange(currentPage + 1)}
            className="w-full h-11 border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--fs-body-sm)] font-[var(--fw-semibold)] text-[var(--color-primary)] hover:bg-[var(--color-bg-soft)] transition-colors"
          >
            {UZ.loadMore}
          </button>
        )}
        {totalItems !== undefined && loadedItems !== undefined && (
          <p className="text-[var(--fs-caption)] text-[var(--color-text-muted)]" aria-live="polite">
            {loadedItems} / {totalItems} {UZ.articles}
          </p>
        )}
      </div>
    </nav>
  );
}
