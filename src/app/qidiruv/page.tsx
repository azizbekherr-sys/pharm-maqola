'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Container from '@/components/layout/Container';
import SearchField from '@/components/forms/SearchField';
import StandardArticleCard from '@/components/discovery/StandardArticleCard';
import DoctorReviewedBadge from '@/components/trust/DoctorReviewedBadge';
import FilterPanel, { type FilterState } from '@/components/discovery/FilterPanel';
import EmptyState from '@/components/feedback/EmptyState';
import { UZ } from '@/lib/constants';
import { searchArticles } from '@/data/mock';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [filters, setFilters] = useState<FilterState>({ categories: [], dateRange: '' });

  const filteredResults = useMemo(() => {
    let results = query ? searchArticles(query) : [];

    if (filters.categories.length > 0) {
      results = results.filter((a) => filters.categories.includes(a.category.slug));
    }

    if (filters.dateRange) {
      const days = parseInt(filters.dateRange, 10);
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - days);
      results = results.filter((a) => new Date(a.updatedDate) >= cutoff);
    }

    return results;
  }, [query, filters]);

  return (
    <Container>
      <div className="py-[var(--space-6)]">
        <h1 className="text-[var(--fs-h1)] font-[var(--fw-extrabold)] text-[var(--color-text-primary)] mb-[var(--space-4)]">
          {UZ.search}
        </h1>
        <SearchField variant="full" defaultValue={query} />

        {query && (
          <div className="mt-[var(--space-4)] flex flex-wrap items-center gap-[var(--space-3)]">
            <p className="text-[var(--fs-body)] text-[var(--color-text-secondary)]">
              &ldquo;{query}&rdquo; — {filteredResults.length} {UZ.results}
            </p>
            <DoctorReviewedBadge />
          </div>
        )}
      </div>

      {query && (
        <div className="md:flex md:gap-[var(--space-6)] pb-[var(--space-8)]">
          <FilterPanel
            filters={filters}
            onChange={setFilters}
            resultCount={filteredResults.length}
            variant="search"
          />

          <div className="flex-1">
            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-4)]" aria-live="polite">
                {filteredResults.map((article) => (
                  <StandardArticleCard key={article.slug} article={article} showExcerpt />
                ))}
              </div>
            ) : (
              <EmptyState
                heading={UZ.noResults}
                description={UZ.noResultsDesc}
              />
            )}
          </div>
        </div>
      )}
    </Container>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<Container><div className="py-[var(--space-8)]" aria-busy="true">{UZ.loading}</div></Container>}>
      <SearchResults />
    </Suspense>
  );
}
