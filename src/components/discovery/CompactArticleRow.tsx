import Link from 'next/link';
import Icon from '@/components/icons/Icon';
import type { Article } from '@/types';
import ArticleMeta from '@/components/discovery/ArticleMeta';
import { UZ } from '@/lib/constants';

interface CompactArticleRowProps {
  article: Article;
}

export default function CompactArticleRow({ article }: CompactArticleRowProps) {
  return (
    <Link
      href={`/maqola/${article.slug}`}
      className="group flex items-center gap-[var(--space-3)] py-[var(--space-3)] px-[var(--space-3)] rounded-[var(--radius-md)] hover:bg-[var(--color-bg-soft)] transition-colors hover:no-underline"
    >
      <div className="hidden sm:flex w-16 h-16 flex-shrink-0 bg-[var(--color-bg-soft)] border border-[var(--color-border)] rounded-[var(--radius-sm)] items-center justify-center">
        <span className="text-[var(--fs-micro)] text-[var(--color-text-muted)]">{UZ.image}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-[var(--fs-body)] font-[var(--fw-medium)] text-[var(--color-text-primary)] leading-[var(--lh-heading)] line-clamp-2">
          {article.title}
        </h4>
        <ArticleMeta
          readTime={article.readTime}
          updatedDate={article.updatedDate}
          className="mt-[var(--space-1)]"
        />
      </div>
      <Icon
        name="chevron-right"
        size={20}
        className="flex-shrink-0 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors"
      />
    </Link>
  );
}
