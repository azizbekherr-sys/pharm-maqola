import Icon from '@/components/icons/Icon';
import { UZ } from '@/lib/constants';

interface ArticleMetaProps {
  readTime: number;
  updatedDate: string;
  className?: string;
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

export default function ArticleMeta({ readTime, updatedDate, className = '' }: ArticleMetaProps) {
  return (
    <div className={`flex items-center gap-[var(--space-2)] text-[var(--fs-caption)] text-[var(--color-text-muted)] ${className}`}>
      <span className="flex items-center gap-1">
        <Icon name="clock" size={14} />
        {UZ.readTime}: {readTime} {UZ.minutes}
      </span>
      <span aria-hidden="true">&middot;</span>
      <span>{UZ.lastUpdated}: {formatDate(updatedDate)}</span>
    </div>
  );
}

export { formatDate };
