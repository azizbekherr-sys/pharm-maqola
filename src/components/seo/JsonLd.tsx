import type { Article, Doctor } from '@/types';
import { SITE_URL } from '@/lib/config';

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Maqola',
    url: SITE_URL,
    description: "Shifokorlar tomonidan tekshirilgan, o'zbek tilidagi tibbiy maqolalar",
  };
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Maqola',
    url: SITE_URL,
    inLanguage: 'uz-Latn',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/qidiruv?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function articleJsonLd(article: Article) {
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: article.title,
    description: article.excerpt,
    url: `${SITE_URL}/maqola/${article.slug}`,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    inLanguage: 'uz-Latn',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Maqola',
      url: SITE_URL,
    },
  };

  if (article.reviewer) {
    jsonLd.reviewedBy = {
      '@type': 'Person',
      name: article.reviewer.name,
      jobTitle: article.reviewer.specialty,
      url: `${SITE_URL}/shifokor/${article.reviewer.slug}`,
    };
  }

  return jsonLd;
}

export function doctorJsonLd(doctor: Doctor) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: doctor.name,
    url: `${SITE_URL}/shifokor/${doctor.slug}`,
    jobTitle: doctor.specialty,
    description: doctor.bio,
    worksFor: doctor.workplace
      ? { '@type': 'MedicalOrganization', name: doctor.workplace }
      : undefined,
  };
}

export function breadcrumbJsonLd(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}
