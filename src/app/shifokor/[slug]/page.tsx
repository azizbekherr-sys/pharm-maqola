import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Container from '@/components/layout/Container';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import CompactArticleRow from '@/components/discovery/CompactArticleRow';
import Icon from '@/components/icons/Icon';
import { JsonLd, doctorJsonLd, breadcrumbJsonLd } from '@/components/seo/JsonLd';
import { UZ } from '@/lib/constants';
import { getInitial } from '@/lib/utils';
import { SITE_URL } from '@/lib/config';
import { getDoctorBySlug, getArticlesByDoctor, doctors } from '@/data/mock';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return { title: 'Shifokor topilmadi' };
  const url = `${SITE_URL}/shifokor/${slug}`;
  return {
    title: `${doctor.name} — ${doctor.specialty}`,
    description: doctor.bio,
    alternates: { canonical: url },
    openGraph: {
      title: `${doctor.name} — ${doctor.specialty}`,
      description: doctor.bio || '',
      url,
      type: 'profile',
    },
  };
}

export default async function DoctorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const doctorArticles = getArticlesByDoctor(slug);

  return (
    <>
      <JsonLd data={doctorJsonLd(doctor)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: UZ.home, url: SITE_URL },
          { name: doctor.name },
        ])}
      />
      <Container>
      <Breadcrumbs items={[{ label: doctor.name }]} />

      {/* Profile Header */}
      <div className="py-[var(--space-6)] flex flex-col sm:flex-row items-start gap-[var(--space-5)]">
        <div
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] font-[var(--fw-bold)] text-[var(--fs-h2)] flex-shrink-0"
          role="img"
          aria-label={doctor.name}
        >
          {getInitial(doctor.name)}
        </div>
        <div>
          <h1 className="text-[var(--fs-h1)] font-[var(--fw-extrabold)] text-[var(--color-text-primary)] leading-[var(--lh-tight)]">
            {doctor.name}
          </h1>
          <p className="text-[var(--fs-h4)] text-[var(--color-primary)] font-[var(--fw-medium)] mt-[var(--space-1)]">
            {doctor.specialty}
          </p>
          <p className="text-[var(--fs-body)] text-[var(--color-text-secondary)] mt-[var(--space-1)]">
            {doctor.experience}
          </p>
          {doctor.workplace && (
            <p className="text-[var(--fs-body-sm)] text-[var(--color-text-muted)] mt-[var(--space-1)]">
              {doctor.workplace}
            </p>
          )}
        </div>
      </div>

      {/* Bio */}
      {doctor.bio && (
        <section className="pb-[var(--space-5)]">
          <p className="text-[var(--fs-body)] text-[var(--color-text-secondary)] leading-[var(--lh-body)] max-w-[var(--article-max-width)]">
            {doctor.bio}
          </p>
        </section>
      )}

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-4)] pb-[var(--space-6)]">
        {doctor.specializations && doctor.specializations.length > 0 && (
          <div className="p-[var(--space-4)] bg-[var(--color-bg-soft)] rounded-[var(--radius-md)]">
            <h2 className="text-[var(--fs-body)] font-[var(--fw-bold)] text-[var(--color-text-primary)] mb-[var(--space-2)] flex items-center gap-[var(--space-2)]">
              <Icon name="stethoscope" size={20} className="text-[var(--color-primary)]" />
              {UZ.specializations}
            </h2>
            <ul className="space-y-[var(--space-1)]">
              {doctor.specializations.map((s) => (
                <li key={s} className="text-[var(--fs-body-sm)] text-[var(--color-text-secondary)]">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        {doctor.education && doctor.education.length > 0 && (
          <div className="p-[var(--space-4)] bg-[var(--color-bg-soft)] rounded-[var(--radius-md)]">
            <h2 className="text-[var(--fs-body)] font-[var(--fw-bold)] text-[var(--color-text-primary)] mb-[var(--space-2)] flex items-center gap-[var(--space-2)]">
              <Icon name="book-open" size={20} className="text-[var(--color-primary)]" />
              {UZ.education}
            </h2>
            <ul className="space-y-[var(--space-1)]">
              {doctor.education.map((e) => (
                <li key={e} className="text-[var(--fs-body-sm)] text-[var(--color-text-secondary)]">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Articles by this doctor */}
      <section className="pb-[var(--space-8)]">
        <h2 className="text-[var(--fs-h3)] font-[var(--fw-bold)] text-[var(--color-text-primary)] mb-[var(--space-4)]">
          {UZ.reviewedBy}: {doctor.name} ({doctorArticles.length} {UZ.articles})
        </h2>
        <div className="divide-y divide-[var(--color-border)]">
          {doctorArticles.map((article) => (
            <CompactArticleRow key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </Container>
    </>
  );
}
