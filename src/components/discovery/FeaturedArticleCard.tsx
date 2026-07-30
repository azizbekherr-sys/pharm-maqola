import Link from 'next/link';
import type { Article } from '@/types';
import ArticleMeta from '@/components/discovery/ArticleMeta';
import DoctorReviewedBadge from '@/components/trust/DoctorReviewedBadge';
import ImagePlaceholder from '@/components/discovery/ImagePlaceholder';
import TopicChip from '@/components/discovery/TopicChip';

interface FeaturedArticleCardProps {
  article: Article;
  variant?: 'hero' | 'secondary';
}

export default function FeaturedArticleCard({ article, variant = 'hero' }: FeaturedArticleCardProps) {
  const isHero = variant === 'hero';

  return (
    <Link
      href={`/maqola/${article.slug}`}
      className={`group block bg-[var(--color-bg-main)] border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden hover:shadow-[var(--shadow-md)] transition-all duration-150 hover:no-underline ${
        isHero ? 'md:grid md:grid-cols-2' : ''
      }`}
    >
      <div className="overflow-hidden">
        <ImagePlaceholder
          label={article.title}
          className="rounded-none group-hover:scale-[1.02] transition-transform duration-300"
          aspectRatio={isHero ? '16/10' : '16/9'}
        />
      </div>
      <div className="p-[var(--space-5)]">
        <TopicChip label={article.category.name} isStatic />
        <h3 className={`mt-[var(--space-2)] font-[var(--fw-bold)] text-[var(--color-text-primary)] leading-[var(--lh-heading)] ${
          isHero ? 'text-[var(--fs-h3)]' : 'text-[var(--fs-h4)]'
        }`}>
          {article.title}
        </h3>
        <p className="mt-[var(--space-2)] text-[var(--fs-body-sm)] text-[var(--color-text-secondary)] leading-[var(--lh-body)] line-clamp-2">
          {article.excerpt}
        </p>
        {article.isReviewed && (
          <DoctorReviewedBadge className="mt-[var(--space-3)]" />
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
