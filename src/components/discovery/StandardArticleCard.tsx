import Link from 'next/link';
import type { Article } from '@/types';
import ArticleMeta from '@/components/discovery/ArticleMeta';
import DoctorReviewedBadge from '@/components/trust/DoctorReviewedBadge';
import ImagePlaceholder from '@/components/discovery/ImagePlaceholder';
import TopicChip from '@/components/discovery/TopicChip';

interface StandardArticleCardProps {
  article: Article;
  showExcerpt?: boolean;
}

export default function StandardArticleCard({ article, showExcerpt }: StandardArticleCardProps) {
  return (
    <Link
      href={`/maqola/${article.slug}`}
      className="group block bg-[var(--color-bg-main)] border border-[var(--color-border)] rounded-[var(--radius-md)] overflow-hidden hover:shadow-[var(--shadow-md)] transition-all duration-150 hover:no-underline"
    >
      <ImagePlaceholder
        label={article.title}
        className="rounded-none"
        aspectRatio="16/9"
      />
      <div className="p-[var(--space-4)]">
        <TopicChip label={article.category.name} isStatic />
        <h3 className="mt-[var(--space-2)] text-[var(--fs-body)] font-[var(--fw-semibold)] text-[var(--color-text-primary)] leading-[var(--lh-heading)] line-clamp-2">
          {article.title}
        </h3>
        {showExcerpt && (
          <p className="mt-[var(--space-1)] text-[var(--fs-body-sm)] text-[var(--color-text-secondary)] line-clamp-1">
            {article.excerpt}
          </p>
        )}
        {article.isReviewed && (
          <DoctorReviewedBadge className="mt-[var(--space-2)]" />
        )}
        <ArticleMeta
          readTime={article.readTime}
          updatedDate={article.updatedDate}
          className="mt-[var(--space-2)]"
        />
      </div>
    </Link>
  );
}
