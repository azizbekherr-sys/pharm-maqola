import type { Metadata } from 'next';
import Container from '@/components/layout/Container';
import FeaturedArticleCard from '@/components/discovery/FeaturedArticleCard';
import StandardArticleCard from '@/components/discovery/StandardArticleCard';
import CategoryCard from '@/components/discovery/CategoryCard';
import DoctorProfileCard from '@/components/trust/DoctorProfileCard';
import DoctorReviewedBadge from '@/components/trust/DoctorReviewedBadge';
import SearchField from '@/components/forms/SearchField';
import Icon from '@/components/icons/Icon';
import { UZ } from '@/lib/constants';
import { articles, categories, doctors, getFeaturedArticles } from '@/data/mock';

export const metadata: Metadata = {
  title: "Maqola — Sog'ligingiz haqida ishonchli ma'lumot",
};

export default function HomePage() {
  const featured = getFeaturedArticles();
  const hero = featured[0];
  const secondary = featured.slice(1, 3);
  const recent = articles.filter((a) => !a.isFeatured).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-bg-soft)] py-[var(--space-8)] md:py-[var(--space-10)]">
        <Container>
          <div className="text-center max-w-[640px] mx-auto mb-[var(--space-5)]">
            <h1 className="text-[var(--fs-h1)] md:text-[var(--fs-display)] font-[var(--fw-extrabold)] text-[var(--color-text-primary)] leading-[var(--lh-tight)]">
              {UZ.heroTitle}
            </h1>
            <p className="mt-[var(--space-3)] text-[var(--fs-body-lg)] text-[var(--color-text-secondary)] leading-[var(--lh-body)]">
              {UZ.heroSubtitle}
            </p>
          </div>

          <div className="max-w-[560px] mx-auto mb-[var(--space-6)]">
            <SearchField variant="full" />
          </div>

          <div className="flex items-center justify-center mb-[var(--space-6)]">
            <DoctorReviewedBadge variant="full" />
          </div>

          {hero && (
            <div className="space-y-[var(--space-4)]">
              <FeaturedArticleCard article={hero} variant="hero" />
              {secondary.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-4)]">
                  {secondary.map((a) => (
                    <FeaturedArticleCard key={a.slug} article={a} variant="secondary" />
                  ))}
                </div>
              )}
            </div>
          )}
        </Container>
      </section>

      {/* Categories */}
      <section className="py-[var(--space-8)]">
        <Container>
          <h2 className="text-[var(--fs-h2)] font-[var(--fw-bold)] text-[var(--color-text-primary)] mb-[var(--space-5)]">
            {UZ.categories}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-4)]">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </Container>
      </section>

      {/* Trust Steps */}
      <section className="bg-[var(--color-bg-soft)] py-[var(--space-8)]">
        <Container>
          <h2 className="text-[var(--fs-h2)] font-[var(--fw-bold)] text-[var(--color-text-primary)] mb-[var(--space-5)] text-center">
            {UZ.trustAndEditorial}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-5)]">
            {[
              { icon: 'check-shield' as const, title: UZ.doctorReviewed, desc: "Har bir maqola malakali shifokor tomonidan tekshiriladi va tasdiqlanadi." },
              { icon: 'book-open' as const, title: UZ.sources, desc: "Barcha tibbiy ma'lumotlar ilmiy manbalarga asoslanadi va havolalar ko'rsatiladi." },
              { icon: 'calendar' as const, title: UZ.lastUpdated, desc: "Maqolalar muntazam yangilanadi va eng so'nggi tibbiy ma'lumotlarga moslashtiriladi." },
            ].map((step) => (
              <div key={step.title} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)]">
                  <Icon name={step.icon} size={24} />
                </div>
                <h3 className="mt-[var(--space-3)] text-[var(--fs-body)] font-[var(--fw-bold)] text-[var(--color-text-primary)]">
                  {step.title}
                </h3>
                <p className="mt-[var(--space-1)] text-[var(--fs-body-sm)] text-[var(--color-text-secondary)] leading-[var(--lh-body)]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Recent Articles */}
      <section className="py-[var(--space-8)]">
        <Container>
          <h2 className="text-[var(--fs-h2)] font-[var(--fw-bold)] text-[var(--color-text-primary)] mb-[var(--space-5)]">
            {UZ.recentArticles}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-4)]">
            {recent.map((a) => (
              <StandardArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      </section>

      {/* Doctors */}
      <section className="py-[var(--space-8)] bg-[var(--color-bg-soft)]">
        <Container>
          <h2 className="text-[var(--fs-h2)] font-[var(--fw-bold)] text-[var(--color-text-primary)] mb-[var(--space-5)]">
            {UZ.ourDoctors}
          </h2>
          <div className="flex gap-[var(--space-4)] overflow-x-auto pb-[var(--space-2)] -mx-[var(--space-4)] px-[var(--space-4)] snap-x">
            {doctors.map((doc) => (
              <div key={doc.slug} className="snap-start flex-shrink-0">
                <DoctorProfileCard doctor={doc} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
