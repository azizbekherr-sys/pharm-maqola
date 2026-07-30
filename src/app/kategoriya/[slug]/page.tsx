import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Container from '@/components/layout/Container';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import StandardArticleCard from '@/components/discovery/StandardArticleCard';
import EmptyState from '@/components/feedback/EmptyState';
import { JsonLd, breadcrumbJsonLd } from '@/components/seo/JsonLd';
import { UZ } from '@/lib/constants';
import { SITE_URL } from '@/lib/config';
import { getCategoryBySlug, getArticlesByCategory, categories } from '@/data/mock';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: 'Kategoriya topilmadi' };
  const url = `${SITE_URL}/kategoriya/${slug}`;
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: url },
    openGraph: {
      title: category.name,
      description: category.description,
      url,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryArticles = getArticlesByCategory(slug);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: UZ.home, url: SITE_URL },
          { name: category.name },
        ])}
      />
      <Container>
      <Breadcrumbs items={[{ label: category.name }]} />

      <div className="py-[var(--space-5)]">
        <h1 className="text-[var(--fs-h1)] font-[var(--fw-extrabold)] text-[var(--color-text-primary)] leading-[var(--lh-tight)]">
          {category.name}
        </h1>
        <p className="mt-[var(--space-2)] text-[var(--fs-body)] text-[var(--color-text-secondary)]">
          {category.description} &middot; {category.articleCount} {UZ.articles}
        </p>
      </div>

      {categoryArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-4)] pb-[var(--space-8)]">
          {categoryArticles.map((article) => (
            <StandardArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <EmptyState
          heading={UZ.noResults}
          description={UZ.noResultsDesc}
        />
      )}
    </Container>
    </>
  );
}
