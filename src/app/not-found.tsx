import Link from 'next/link';
import Container from '@/components/layout/Container';
import Icon from '@/components/icons/Icon';

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-[var(--space-10)] text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--color-bg-soft)] flex items-center justify-center mb-[var(--space-4)]">
          <Icon name="search" size={32} className="text-[var(--color-text-muted)]" />
        </div>
        <h1 className="text-[var(--fs-h1)] font-[var(--fw-extrabold)] text-[var(--color-text-primary)] mb-[var(--space-2)]">
          Sahifa topilmadi
        </h1>
        <p className="text-[var(--fs-body)] text-[var(--color-text-secondary)] mb-[var(--space-5)] max-w-md">
          Siz qidirayotgan sahifa mavjud emas yoki ko&apos;chirilgan bo&apos;lishi mumkin.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-[var(--space-2)] h-11 px-[var(--space-5)] bg-[var(--color-primary)] text-white rounded-[var(--radius-md)] font-[var(--fw-semibold)] text-[var(--fs-body)] hover:bg-[var(--color-primary-hover)] hover:no-underline transition-colors"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </Container>
  );
}
