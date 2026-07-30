import Icon from '@/components/icons/Icon';
import { UZ } from '@/lib/constants';
import type { Source } from '@/types';

interface SourceListProps {
  sources: Source[];
}

export default function SourceList({ sources }: SourceListProps) {
  if (!sources.length) return null;

  return (
    <section className="mt-[var(--space-6)]">
      <h2 className="text-[var(--fs-h4)] font-[var(--fw-bold)] text-[var(--color-text-primary)] mb-[var(--space-3)]">
        {UZ.sources}
      </h2>
      <ol className="space-y-[var(--space-2)] list-decimal list-inside">
        {sources.map((source) => (
          <li key={source.id} className="text-[var(--fs-body-sm)] text-[var(--color-text-secondary)] leading-[var(--lh-body)]">
            {source.name}. <span className="text-[var(--color-text-muted)]">{source.publisher}, {source.year}.</span>
            {source.url !== '#' && (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 ml-1 text-[var(--color-link)] hover:text-[var(--color-link-hover)]"
                aria-label={`${source.name} — tashqi havola`}
              >
                <Icon name="external-link" size={14} />
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
