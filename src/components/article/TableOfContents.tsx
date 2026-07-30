'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/icons/Icon';
import { UZ } from '@/lib/constants';
import type { ArticleSection } from '@/types';

interface TableOfContentsProps {
  sections: ArticleSection[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length < 4) return null;

  const navContent = (
    <ol className="space-y-[var(--space-1)]">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            onClick={() => setIsCollapsed(true)}
            className={`
              block py-[var(--space-1)] px-[var(--space-3)] text-[var(--fs-body-sm)] rounded-[var(--radius-sm)] transition-colors hover:no-underline
              ${
                activeId === section.id
                  ? 'font-[var(--fw-bold)] text-[var(--color-primary)] bg-[var(--color-primary-light)] border-l-2 border-[var(--color-primary)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-soft)]'
              }
            `.trim()}
            aria-current={activeId === section.id ? 'true' : undefined}
          >
            {section.title}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <nav
        aria-label={UZ.tableOfContents}
        className="hidden lg:block sticky top-24 w-[260px] flex-shrink-0"
      >
        <h2 className="text-[var(--fs-body)] font-[var(--fw-bold)] text-[var(--color-text-primary)] mb-[var(--space-3)]">
          {UZ.tableOfContents}
        </h2>
        {navContent}
      </nav>

      {/* Mobile: collapsible */}
      <div className="lg:hidden mb-[var(--space-4)]">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center justify-between w-full p-[var(--space-3)] bg-[var(--color-bg-soft)] rounded-[var(--radius-md)] text-[var(--fs-body-sm)] font-[var(--fw-semibold)]"
          aria-expanded={!isCollapsed}
        >
          {UZ.tableOfContents}
          <Icon name={isCollapsed ? 'chevron-down' : 'chevron-up'} size={20} />
        </button>
        {!isCollapsed && (
          <nav aria-label={UZ.tableOfContents} className="mt-[var(--space-2)] p-[var(--space-3)] bg-[var(--color-bg-soft)] rounded-[var(--radius-md)]">
            {navContent}
          </nav>
        )}
      </div>
    </>
  );
}
