import Link from 'next/link';
import Container from '@/components/layout/Container';
import NewsletterForm from '@/components/forms/NewsletterForm';
import { SITE_NAME, UZ } from '@/lib/constants';
import { categories } from '@/data/mock';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-text-primary)] text-white mt-auto">
      <Container>
        <div className="py-[var(--space-8)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-6)]">
          {/* Brand */}
          <div>
            <Link href="/" className="text-[var(--fs-h3)] font-[var(--fw-extrabold)] text-white hover:no-underline">
              {SITE_NAME}
            </Link>
            <p className="mt-[var(--space-3)] text-[var(--fs-body-sm)] text-white/70 leading-[var(--lh-body)]">
              {UZ.heroTitle}
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[var(--fs-body)] font-[var(--fw-bold)] mb-[var(--space-3)]">
              {UZ.categories}
            </h3>
            <ul className="space-y-[var(--space-2)]">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/kategoriya/${cat.slug}`}
                    className="text-[var(--fs-body-sm)] text-white/70 hover:text-white transition-colors hover:no-underline"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[var(--fs-body)] font-[var(--fw-bold)] mb-[var(--space-3)]">
              {UZ.companyLinks}
            </h3>
            <ul className="space-y-[var(--space-2)]">
              <li>
                <Link href="/ishonch" className="text-[var(--fs-body-sm)] text-white/70 hover:text-white transition-colors hover:no-underline">
                  {UZ.trustAndEditorial}
                </Link>
              </li>
              <li>
                <Link href="/ishonch" className="text-[var(--fs-body-sm)] text-white/70 hover:text-white transition-colors hover:no-underline">
                  {UZ.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/ishonch" className="text-[var(--fs-body-sm)] text-white/70 hover:text-white transition-colors hover:no-underline">
                  {UZ.contactUs}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[var(--fs-body)] font-[var(--fw-bold)] mb-[var(--space-3)]">
              {UZ.subscribe}
            </h3>
            <NewsletterForm />
          </div>
        </div>

        {/* Disclaimer + Copyright */}
        <div className="py-[var(--space-4)] border-t border-white/20">
          <p className="text-[var(--fs-micro)] text-white/60 leading-[var(--lh-body)]">
            {UZ.disclaimer}
          </p>
          <p className="mt-[var(--space-2)] text-[var(--fs-micro)] text-white/40">
            &copy; {new Date().getFullYear()} {SITE_NAME}
          </p>
        </div>
      </Container>
    </footer>
  );
}
