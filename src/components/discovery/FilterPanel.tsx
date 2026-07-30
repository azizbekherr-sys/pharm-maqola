'use client';

import { useState, useRef } from 'react';
import Icon from '@/components/icons/Icon';
import { UZ } from '@/lib/constants';
import { categories } from '@/data/mock';
import { useAccessibleOverlay } from '@/lib/useAccessibleOverlay';

export interface FilterState {
  categories: string[];
  dateRange: string;
}

interface FilterPanelProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  resultCount: number;
  variant: 'search' | 'category';
}

const DATE_RANGES = [
  { value: '', label: 'Barchasi' },
  { value: '7', label: "So'nggi 7 kun" },
  { value: '30', label: "So'nggi 30 kun" },
  { value: '90', label: "So'nggi 3 oy" },
] as const;

function FilterContent({ filters, onChange, resultCount, variant }: FilterPanelProps) {
  const handleCategoryToggle = (slug: string) => {
    const next = filters.categories.includes(slug)
      ? filters.categories.filter((s) => s !== slug)
      : [...filters.categories, slug];
    onChange({ ...filters, categories: next });
  };

  const handleDateChange = (value: string) => {
    onChange({ ...filters, dateRange: value });
  };

  const handleClear = () => {
    onChange({ categories: [], dateRange: '' });
  };

  const hasFilters = filters.categories.length > 0 || filters.dateRange !== '';

  return (
    <div className="space-y-[var(--space-5)]">
      <div className="flex items-center justify-between">
        <h2 className="text-[var(--fs-h4)] font-[var(--fw-bold)] text-[var(--color-text-primary)]">
          {UZ.filters}
        </h2>
        {hasFilters && (
          <button
            onClick={handleClear}
            className="text-[var(--fs-body-sm)] text-[var(--color-primary)] hover:underline"
          >
            {UZ.clearFilters}
          </button>
        )}
      </div>

      {variant === 'search' && (
        <fieldset>
          <legend className="text-[var(--fs-body-sm)] font-[var(--fw-semibold)] text-[var(--color-text-secondary)] mb-[var(--space-2)]">
            {UZ.categories}
          </legend>
          <div className="space-y-[var(--space-1)]">
            {categories.map((cat) => (
              <label
                key={cat.slug}
                className="flex items-center gap-[var(--space-2)] min-h-[44px] px-[var(--space-2)] rounded-[var(--radius-sm)] hover:bg-[var(--color-bg-soft)] cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat.slug)}
                  onChange={() => handleCategoryToggle(cat.slug)}
                  className="w-[18px] h-[18px] rounded accent-[var(--color-primary)]"
                />
                <span className="text-[var(--fs-body-sm)] text-[var(--color-text-primary)]">
                  {cat.name}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <fieldset>
        <legend className="text-[var(--fs-body-sm)] font-[var(--fw-semibold)] text-[var(--color-text-secondary)] mb-[var(--space-2)]">
          Yangilangan sana
        </legend>
        <div className="space-y-[var(--space-1)]">
          {DATE_RANGES.map((range) => (
            <label
              key={range.value}
              className="flex items-center gap-[var(--space-2)] min-h-[44px] px-[var(--space-2)] rounded-[var(--radius-sm)] hover:bg-[var(--color-bg-soft)] cursor-pointer"
            >
              <input
                type="radio"
                name="dateRange"
                value={range.value}
                checked={filters.dateRange === range.value}
                onChange={() => handleDateChange(range.value)}
                className="w-[18px] h-[18px] accent-[var(--color-primary)]"
              />
              <span className="text-[var(--fs-body-sm)] text-[var(--color-text-primary)]">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <p className="text-[var(--fs-caption)] text-[var(--color-text-muted)]" aria-live="polite">
        {resultCount} {UZ.results}
      </p>
    </div>
  );
}

function FilterSheet({
  isOpen,
  onClose,
  triggerRef,
  ...filterProps
}: FilterPanelProps & {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useAccessibleOverlay({
    isOpen,
    onClose,
    triggerRef,
    autoFocusRef: closeRef,
  });

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={UZ.filters}
      className="fixed inset-x-0 bottom-0 z-50 bg-[var(--color-bg-main)] rounded-t-[var(--radius-lg)] shadow-lg max-h-[85dvh] flex flex-col"
    >
      <div className="flex items-center justify-between p-[var(--space-4)] border-b border-[var(--color-border)]">
        <h2 className="text-[var(--fs-h4)] font-[var(--fw-bold)]">{UZ.filters}</h2>
        <button
          ref={closeRef}
          onClick={onClose}
          className="flex items-center justify-center w-11 h-11 rounded-[var(--radius-md)] hover:bg-[var(--color-bg-soft)]"
          aria-label={UZ.closeSearch}
        >
          <Icon name="x" size={24} />
        </button>
      </div>
      <div className="overflow-y-auto p-[var(--space-4)] flex-1">
        <FilterContent {...filterProps} />
      </div>
      <div className="p-[var(--space-4)] border-t border-[var(--color-border)]">
        <button
          onClick={onClose}
          className="w-full h-11 bg-[var(--color-primary)] text-white rounded-[var(--radius-md)] font-[var(--fw-semibold)] text-[var(--fs-body)] hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          {UZ.applyFilters} ({filterProps.resultCount})
        </button>
      </div>
    </div>
  );
}

export default function FilterPanel(props: FilterPanelProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const hasFilters = props.filters.categories.length > 0 || props.filters.dateRange !== '';

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-[260px] flex-shrink-0">
        <div className="sticky top-[92px] p-[var(--space-4)] border border-[var(--color-border)] rounded-[var(--radius-md)]">
          <FilterContent {...props} />
        </div>
      </aside>

      {/* Mobile trigger */}
      <div className="md:hidden mb-[var(--space-4)]">
        <button
          ref={triggerRef}
          onClick={() => setSheetOpen(true)}
          className="inline-flex items-center gap-[var(--space-2)] h-11 px-[var(--space-4)] border border-[var(--color-border)] rounded-[var(--radius-pill)] text-[var(--fs-body-sm)] font-[var(--fw-medium)] hover:bg-[var(--color-bg-soft)] transition-colors"
        >
          <Icon name="sliders" size={18} />
          {UZ.filters}
          {hasFilters && (
            <span className="flex items-center justify-center w-5 h-5 bg-[var(--color-primary)] text-white text-[var(--fs-micro)] rounded-full">
              {props.filters.categories.length + (props.filters.dateRange ? 1 : 0)}
            </span>
          )}
        </button>
      </div>

      <FilterSheet
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        triggerRef={triggerRef}
        {...props}
      />
    </>
  );
}
