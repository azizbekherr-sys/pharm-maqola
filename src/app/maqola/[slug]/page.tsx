import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Container from '@/components/layout/Container';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import TableOfContents from '@/components/article/TableOfContents';
import ReadingProgressBar from '@/components/article/ReadingProgressBar';
import ArticleFeedback from '@/components/article/ArticleFeedback';
import EmergencyJumpBar from '@/components/article/EmergencyJumpBar';
import DoctorReviewedBadge from '@/components/trust/DoctorReviewedBadge';
import ReviewerProfileBlock from '@/components/trust/ReviewerProfileBlock';
import SourceList from '@/components/trust/SourceList';
import Callout from '@/components/trust/Callout';
import TopicChip from '@/components/discovery/TopicChip';
import StandardArticleCard from '@/components/discovery/StandardArticleCard';
import ArticleMeta from '@/components/discovery/ArticleMeta';
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from '@/components/seo/JsonLd';
import { UZ } from '@/lib/constants';
import { SITE_URL } from '@/lib/config';
import { getArticleBySlug, articles } from '@/data/mock';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Maqola topilmadi' };
  const url = `${SITE_URL}/maqola/${slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const sections = article.sections || [];
  const hasToc = sections.length >= 4;
  const hasEmergencyContent = slug === 'yurak-kasalliklari-belgilari';

  const relatedArticles = articles
    .filter((a) => a.slug !== slug && a.category.slug === article.category.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={articleJsonLd(article)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: UZ.home, url: SITE_URL },
          { name: article.category.name, url: `${SITE_URL}/kategoriya/${article.category.slug}` },
          { name: article.title },
        ])}
      />
      <ReadingProgressBar />
      <Container>
        <Breadcrumbs
          items={[
            { label: article.category.name, href: `/kategoriya/${article.category.slug}` },
            { label: article.title },
          ]}
        />

        <article className="py-[var(--space-5)]">
          {/* Header */}
          <div className="max-w-[var(--article-max-width)]">
            <TopicChip label={article.category.name} isStatic />

            <h1 className="mt-[var(--space-3)] text-[var(--fs-h1)] md:text-[var(--fs-display)] font-[var(--fw-extrabold)] text-[var(--color-text-primary)] leading-[var(--lh-tight)]">
              {article.title}
            </h1>

            {article.isReviewed && article.reviewer && (
              <div className="mt-[var(--space-3)]">
                <DoctorReviewedBadge variant="full" reviewerName={article.reviewer.name} />
              </div>
            )}

            <ArticleMeta
              readTime={article.readTime}
              updatedDate={article.updatedDate}
              className="mt-[var(--space-2)]"
            />

            {/* Emergency Jump Bar */}
            {hasEmergencyContent && (
              <EmergencyJumpBar targetId="emergency-callout" />
            )}

            {/* Excerpt / Brief Summary */}
            <div className="mt-[var(--space-4)] p-[var(--space-4)] bg-[var(--color-bg-soft)] rounded-[var(--radius-md)] border-l-4 border-[var(--color-primary)]">
              <p className="text-[var(--fs-caption)] font-[var(--fw-bold)] text-[var(--color-primary)] uppercase tracking-wide mb-[var(--space-1)]">
                {UZ.briefSummary}
              </p>
              <p className="text-[var(--fs-body)] text-[var(--color-text-secondary)] leading-[var(--lh-body)]">
                {article.excerpt}
              </p>
            </div>

            {article.reviewer && (
              <ReviewerProfileBlock
                doctor={article.reviewer}
                updatedDate={article.updatedDate}
                variant="inline"
                className="mt-[var(--space-4)]"
              />
            )}
          </div>

          {/* Body with optional TOC sidebar */}
          <div className={`mt-[var(--space-6)] ${hasToc ? 'lg:flex lg:gap-[var(--space-6)]' : ''}`}>
            {hasToc && (
              <div className="lg:order-2 flex-shrink-0">
                <TableOfContents sections={sections} />
              </div>
            )}

            <div className={`${hasToc ? 'lg:order-1 lg:flex-1' : ''} max-w-[var(--article-max-width)]`}>

              {/* Disclaimer */}
              <Callout variant="info" heading={UZ.medicalWarning}>
                {UZ.disclaimer}
              </Callout>

              {/* Sections */}
              <div className="prose-maqola">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="mt-[var(--space-6)]">
                    <h2 className="text-[var(--fs-h3)] font-[var(--fw-bold)] text-[var(--color-text-primary)] leading-[var(--lh-heading)] mb-[var(--space-3)]">
                      {section.title}
                    </h2>
                    <div
                      className="text-[var(--fs-article-desktop)] max-sm:text-[var(--fs-article-mobile)] leading-[var(--lh-article)] text-[var(--color-text-primary)] font-[family-name:var(--font-serif)] space-y-[var(--space-3)]"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </section>
                ))}
              </div>

              {/* Example callouts for the first article */}
              {hasEmergencyContent && (
                <>
                  <Callout variant="warning">
                    Ko&apos;krak qafasida og&apos;riq, terlash va nafas qisilishi birga kuzatilsa, bu yurak infarktining belgilari bo&apos;lishi mumkin.
                  </Callout>
                  <div id="emergency-callout">
                    <Callout
                      variant="emergency"
                      actionLabel={UZ.emergencyCall}
                      actionHref="tel:103"
                    >
                      Agar tana harorati 40°C dan yuqori bo&apos;lsa yoki bemorning hushi yo&apos;qolsa — darhol 103 raqamiga qo&apos;ng&apos;iroq qiling.
                    </Callout>
                  </div>
                </>
              )}

              {/* Sources */}
              {article.sources && <SourceList sources={article.sources} />}

              {/* Feedback */}
              <div className="mt-[var(--space-6)]">
                <ArticleFeedback />
              </div>

              {/* Reviewer block (footer) */}
              {article.reviewer && (
                <div className="mt-[var(--space-6)]">
                  <h2 className="text-[var(--fs-h4)] font-[var(--fw-bold)] text-[var(--color-text-primary)] mb-[var(--space-3)]">
                    {UZ.authorAndReviewer}
                  </h2>
                  <ReviewerProfileBlock
                    doctor={article.reviewer}
                    updatedDate={article.updatedDate}
                    variant="block"
                  />
                </div>
              )}
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-[var(--space-6)] border-t border-[var(--color-border)]">
            <h2 className="text-[var(--fs-h3)] font-[var(--fw-bold)] text-[var(--color-text-primary)] mb-[var(--space-4)]">
              {UZ.relatedArticles}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-4)]">
              {relatedArticles.map((a) => (
                <StandardArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </>
  );
}
