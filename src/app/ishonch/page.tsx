import type { Metadata } from 'next';
import Container from '@/components/layout/Container';
import Icon from '@/components/icons/Icon';
import { UZ } from '@/lib/constants';

export const metadata: Metadata = {
  title: UZ.trustAndEditorial,
  description: "Maqola platformasining ishonch va tahririyat standartlari haqida batafsil ma'lumot.",
};

const steps = [
  {
    icon: 'book-open' as const,
    title: "1. Mavzu tanlash va tadqiqot",
    description: "Har bir maqola mavzusi tibbiy ahamiyati, o'quvchilar ehtiyoji va dolzarbligi asosida tanlanadi. Muallif ilmiy manbalar va klinik qo'llanmalarni chuqur o'rganadi.",
  },
  {
    icon: 'user' as const,
    title: "2. Professional yozish",
    description: "Maqolalar tibbiyot sohasida tajribaga ega yozuvchilar tomonidan yoziladi. Tili sodda, tushunarli va aniq bo'lishi ta'minlanadi.",
  },
  {
    icon: 'check-shield' as const,
    title: "3. Shifokor tomonidan tekshirish",
    description: "Har bir maqola tegishli soha bo'yicha malakali shifokor tomonidan tekshiriladi. Tibbiy aniqlik, to'g'rilik va xavfsizlik baholanadi.",
  },
  {
    icon: 'shield' as const,
    title: "4. Tahririyat nazorati",
    description: "Tahrir jamoasi maqolaning sifatini, til to'g'riligini va platformaning standartlariga mosligini tekshiradi.",
  },
  {
    icon: 'calendar' as const,
    title: "5. Muntazam yangilash",
    description: "Chop etilgan maqolalar muntazam ravishda ko'rib chiqiladi va yangi tibbiy ma'lumotlarga moslashtiriladi.",
  },
];

const principles = [
  {
    title: "Ilmiy asoslanganlik",
    description: "Barcha tibbiy da'volar ishonchli ilmiy manbalarga — klinik tadqiqotlar, tibbiy qo'llanmalar va xalqaro tashkilotlar yo'riqnomalariga — asoslanadi.",
  },
  {
    title: "Shaffoflik",
    description: "Har bir maqolada tekshiruvchi shifokor ismi, mutaxassisligi va oxirgi yangilanish sanasi ko'rsatiladi. Foydalanilgan manbalar ro'yxati doimo mavjud.",
  },
  {
    title: "Mustaqillik",
    description: "Tahririyat qarorlari tijorat manfaatlaridan mustaqil. Reklama va homiylik kontent bilan aralashtirilmaydi.",
  },
  {
    title: "Tushunarlilik",
    description: "Tibbiy ma'lumotlar oddiy va tushunarli tilda taqdim etiladi. Murakkab atamalar izoh bilan beriladi.",
  },
];

export default function TrustPage() {
  return (
    <Container>
      <div className="py-[var(--space-6)] max-w-[var(--article-max-width)] mx-auto">
        <h1 className="text-[var(--fs-h1)] md:text-[var(--fs-display)] font-[var(--fw-extrabold)] text-[var(--color-text-primary)] leading-[var(--lh-tight)]">
          {UZ.trustAndEditorial}
        </h1>
        <p className="mt-[var(--space-3)] text-[var(--fs-body-lg)] text-[var(--color-text-secondary)] leading-[var(--lh-body)]">
          Maqola platformasi sog&apos;liq haqida ishonchli va tushunarli ma&apos;lumot taqdim etishga intiladi.
          Quyida bizning tahririyat jarayonimiz va sifat standartlarimiz batafsil keltirilgan.
        </p>

        {/* Editorial Process */}
        <section className="mt-[var(--space-8)]">
          <h2 className="text-[var(--fs-h2)] font-[var(--fw-bold)] text-[var(--color-text-primary)] mb-[var(--space-5)]">
            Tahririyat jarayoni
          </h2>
          <div className="space-y-[var(--space-5)]">
            {steps.map((step) => (
              <div key={step.title} className="flex gap-[var(--space-4)]">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] flex-shrink-0">
                  <Icon name={step.icon} size={24} />
                </div>
                <div>
                  <h3 className="text-[var(--fs-h4)] font-[var(--fw-bold)] text-[var(--color-text-primary)]">
                    {step.title}
                  </h3>
                  <p className="mt-[var(--space-1)] text-[var(--fs-body)] text-[var(--color-text-secondary)] leading-[var(--lh-body)]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section className="mt-[var(--space-8)]">
          <h2 className="text-[var(--fs-h2)] font-[var(--fw-bold)] text-[var(--color-text-primary)] mb-[var(--space-5)]">
            Asosiy tamoyillar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-4)]">
            {principles.map((p) => (
              <div key={p.title} className="p-[var(--space-4)] bg-[var(--color-bg-soft)] rounded-[var(--radius-md)]">
                <h3 className="text-[var(--fs-body)] font-[var(--fw-bold)] text-[var(--color-text-primary)]">
                  {p.title}
                </h3>
                <p className="mt-[var(--space-2)] text-[var(--fs-body-sm)] text-[var(--color-text-secondary)] leading-[var(--lh-body)]">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-[var(--space-8)] p-[var(--space-5)] bg-[var(--color-bg-soft)] rounded-[var(--radius-md)] border border-[var(--color-border)]">
          <div className="flex gap-[var(--space-3)]">
            <Icon name="info" size={24} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-[var(--fs-h4)] font-[var(--fw-bold)] text-[var(--color-text-primary)]">
                {UZ.medicalWarning}
              </h2>
              <p className="mt-[var(--space-2)] text-[var(--fs-body)] text-[var(--color-text-secondary)] leading-[var(--lh-body)]">
                {UZ.disclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* Report Error */}
        <section className="mt-[var(--space-6)] pb-[var(--space-8)]">
          <h2 className="text-[var(--fs-h3)] font-[var(--fw-bold)] text-[var(--color-text-primary)] mb-[var(--space-3)]">
            {UZ.reportError}
          </h2>
          <p className="text-[var(--fs-body)] text-[var(--color-text-secondary)] leading-[var(--lh-body)]">
            Agar maqolalarda xato yoki eskirgan ma&apos;lumot topsangiz, iltimos bizga xabar bering.
            Har bir xabar tahrir jamoasi tomonidan ko&apos;rib chiqiladi va kerakli tuzatishlar kiritiladi.
          </p>
        </section>
      </div>
    </Container>
  );
}
