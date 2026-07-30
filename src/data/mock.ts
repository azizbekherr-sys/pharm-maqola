import type { Article, Category, Doctor } from '@/types';

export const doctors: Doctor[] = [
  {
    slug: 'aziza-karimova',
    name: 'Dr. Aziza Karimova',
    specialty: 'Kardiolog',
    avatarUrl: '',
    experience: '15 yillik tajriba',
    articleCount: 24,
    bio: "Dr. Aziza Karimova — Toshkent tibbiyot akademiyasini tugatgan, 15 yildan ortiq klinik tajribaga ega kardiolog. Yurak-qon tomir kasalliklari bo'yicha ko'plab ilmiy maqolalar muallifi.",
    education: ["Toshkent tibbiyot akademiyasi (2008)", "Kardiologiya bo'yicha rezidentura (2011)"],
    specializations: ['Yurak-qon tomir kasalliklari', 'Gipertoniya', 'Yurak yetishmovchiligi'],
    workplace: 'Toshkent shahar kardiologiya markazi',
  },
  {
    slug: 'bobur-rahimov',
    name: 'Dr. Bobur Rahimov',
    specialty: 'Bolalar shifokori',
    avatarUrl: '',
    experience: '12 yillik tajriba',
    articleCount: 18,
    bio: "Dr. Bobur Rahimov — bolalar salomatligi bo'yicha mutaxassis. 12 yildan ortiq tajribaga ega pediatr.",
    education: ["Samarqand tibbiyot instituti (2010)", "Pediatriya bo'yicha rezidentura (2013)"],
    specializations: ['Bolalar kasalliklari', 'Immunologiya', 'Bolalar ovqatlanishi'],
    workplace: "Toshkent bolalar shifoxonasi",
  },
  {
    slug: 'dilnoza-sultanova',
    name: 'Dr. Dilnoza Sultanova',
    specialty: 'Endokrinolog',
    avatarUrl: '',
    experience: '10 yillik tajriba',
    articleCount: 15,
    bio: "Dr. Dilnoza Sultanova — endokrin tizim kasalliklari bo'yicha malakali mutaxassis.",
    education: ["Toshkent tibbiyot akademiyasi (2012)"],
    specializations: ['Qandli diabet', 'Qalqonsimon bez', 'Metabolik sindrom'],
    workplace: 'Respublika endokrinologiya markazi',
  },
  {
    slug: 'jasur-toshmatov',
    name: 'Dr. Jasur Toshmatov',
    specialty: 'Nevropatolog',
    avatarUrl: '',
    experience: '18 yillik tajriba',
    articleCount: 21,
    bio: "Dr. Jasur Toshmatov — asab tizimi kasalliklari bo'yicha yetakchi mutaxassis.",
    education: ["Toshkent tibbiyot akademiyasi (2005)", "Nevrologiya bo'yicha doktorantura (2010)"],
    specializations: ['Bosh og\'rig\'i', 'Epilepsiya', 'Insult'],
    workplace: 'Respublika nevrologiya markazi',
  },
];

export const categories: Category[] = [
  { slug: 'yurak-qon-tomir', name: 'Yurak-qon tomir', description: 'Yurak va qon tomir kasalliklari haqida', icon: 'heart', articleCount: 24 },
  { slug: 'bolalar-salomatligi', name: 'Bolalar salomatligi', description: "Bolalar salomatligi va rivojlanishi", icon: 'user', articleCount: 18 },
  { slug: 'diabet', name: 'Qandli diabet', description: 'Qandli diabet turlari va davolash usullari', icon: 'medical-cross', articleCount: 15 },
  { slug: 'ovqatlanish', name: "Sog'lom ovqatlanish", description: "To'g'ri ovqatlanish va parhez", icon: 'book-open', articleCount: 12 },
  { slug: 'asab-tizimi', name: 'Asab tizimi', description: 'Asab tizimi kasalliklari va davolash', icon: 'stethoscope', articleCount: 21 },
  { slug: 'yuqumli-kasalliklar', name: 'Yuqumli kasalliklar', description: 'Yuqumli kasalliklar va profilaktika', icon: 'shield', articleCount: 16 },
  { slug: 'ayollar-salomatligi', name: 'Ayollar salomatligi', description: "Ayollar salomatligi masalalari", icon: 'heart', articleCount: 14 },
  { slug: 'allergiya', name: 'Allergiya', description: 'Allergik reaksiyalar va davolash', icon: 'alert-circle', articleCount: 9 },
];

export const articles: Article[] = [
  {
    slug: 'yurak-kasalliklari-belgilari',
    title: "Yurak kasalliklarining dastlabki belgilari va oldini olish yo'llari",
    excerpt: "Yurak kasalliklari ko'pincha dastlabki bosqichlarda simptomsiz kechadi. Ushbu maqolada kasallikning erta belgilarini tanib olish va oldini olish choralari haqida ma'lumot beriladi.",
    category: categories[0],
    imageUrl: '',
    readTime: 8,
    updatedDate: '2024-03-15',
    publishedDate: '2024-01-10',
    isReviewed: true,
    reviewer: doctors[0],
    isFeatured: true,
    sections: [
      {
        id: 'belgilari',
        title: 'Asosiy belgilari',
        content: "<p>Yurak kasalliklarining eng ko'p uchraydigan belgilariga ko'krak qafasida og'riq, nafas qisilishi, tez charchash va yurak urishi tezlashishi kiradi. Bu belgilar odatda jismoniy faoliyat paytida kuchayadi.</p><p>Tana harorati 37.5°C dan yuqori bo'lsa va ko'krak og'rig'i kuzatilsa, darhol shifokorga murojaat qiling.</p>",
      },
      {
        id: 'xavf-omillari',
        title: 'Xavf omillari',
        content: "<p>Yurak kasalliklari xavf omillariga yuqori qon bosimi, qandli diabet, semizlik, chekish va kam harakatchanlik kiradi. Oilaviy tarixda yurak kasalliklari mavjud bo'lsa, xavf yanada oshadi.</p>",
      },
      {
        id: 'oldini-olish',
        title: 'Oldini olish choralari',
        content: "<p>Muntazam jismoniy mashqlar, sog'lom ovqatlanish, stressni boshqarish va yetarli uyqu — yurak salomatligini saqlashning asosiy usullari. Kuniga kamida 30 daqiqa yurish tavsiya etiladi.</p>",
      },
      {
        id: 'qachon-murojaat',
        title: "Shifokorga qachon murojaat qilish kerak",
        content: "<p>Ko'krak qafasida og'riq, nafas qisilishi, bosh aylanishi yoki hushdan ketish kuzatilsa — tezkor tibbiy yordam chaqiring. Bu belgilar yurak infarktining dastlabki alomatlari bo'lishi mumkin.</p>",
      },
    ],
    sources: [
      { id: 1, name: "Jahon sog'liqni saqlash tashkiloti", publisher: 'WHO', url: 'https://www.who.int', year: 2023 },
      { id: 2, name: "O'zbekiston kardiologiya jurnali", publisher: "Toshkent tibbiyot akademiyasi", url: '#', year: 2024 },
      { id: 3, name: 'European Heart Journal', publisher: 'Oxford Academic', url: '#', year: 2023 },
    ],
  },
  {
    slug: 'bolalarda-isitma',
    title: "Bolalarda isitma: sabablar, davolash va shifokorga qachon murojaat qilish",
    excerpt: "Bolalarda isitma — eng ko'p uchraydigan muammolardan biri. Bu maqolada isitmaning sabablari va uyda parvarish qilish yo'llari haqida.",
    category: categories[1],
    imageUrl: '',
    readTime: 6,
    updatedDate: '2024-02-20',
    publishedDate: '2024-01-15',
    isReviewed: true,
    reviewer: doctors[1],
    isFeatured: true,
  },
  {
    slug: 'qandli-diabet-turlari',
    title: "Qandli diabetning turlari: farqlari, belgilari va davolash usullari",
    excerpt: "Qandli diabetning 1-tur va 2-tur orasidagi asosiy farqlar, belgilari va zamonaviy davolash usullari haqida batafsil.",
    category: categories[2],
    imageUrl: '',
    readTime: 10,
    updatedDate: '2024-03-01',
    publishedDate: '2024-02-01',
    isReviewed: true,
    reviewer: doctors[2],
  },
  {
    slug: 'gipertoniya-davolash',
    title: "Gipertoniya: yuqori qon bosimini nazorat qilish yo'llari",
    excerpt: "Gipertoniya — yurak-qon tomir kasalliklarining asosiy xavf omili. Qon bosimini nazorat qilish usullari va hayot tarzi o'zgarishlari.",
    category: categories[0],
    imageUrl: '',
    readTime: 7,
    updatedDate: '2024-02-28',
    publishedDate: '2024-01-20',
    isReviewed: true,
    reviewer: doctors[0],
  },
  {
    slug: 'bolalar-emlash',
    title: "Bolalar emlash jadvali: qaysi emlashlar va qachon kerak",
    excerpt: "O'zbekistondagi bolalar emlash jadvali, har bir emlashning ahamiyati va ota-onalar uchun muhim ma'lumotlar.",
    category: categories[1],
    imageUrl: '',
    readTime: 9,
    updatedDate: '2024-03-10',
    publishedDate: '2024-02-15',
    isReviewed: true,
    reviewer: doctors[1],
  },
  {
    slug: 'bosh-ogriq-turlari',
    title: "Bosh og'riq turlari: migren, zo'riqish va klaster bosh og'rig'i",
    excerpt: "Bosh og'riqning turli sabablari, ularni farqlash va uyda davolash usullari haqida batafsil ma'lumot.",
    category: categories[4],
    imageUrl: '',
    readTime: 8,
    updatedDate: '2024-03-05',
    publishedDate: '2024-02-10',
    isReviewed: true,
    reviewer: doctors[3],
  },
  {
    slug: 'soglom-ovqatlanish-asoslari',
    title: "Sog'lom ovqatlanish asoslari: kundalik ratsion uchun qo'llanma",
    excerpt: "Muvozanatli ovqatlanishning asosiy tamoyillari, vitaminlar va minerallar, kundalik kaloriya me'yori.",
    category: categories[3],
    imageUrl: '',
    readTime: 6,
    updatedDate: '2024-02-25',
    publishedDate: '2024-02-05',
    isReviewed: true,
    reviewer: doctors[2],
  },
  {
    slug: 'allergiya-belgilari',
    title: "Allergiya belgilari va davolash: kerakli ma'lumotlar",
    excerpt: "Allergik reaksiyalarning turlari, ularni aniqlash usullari va zamonaviy davolash yondashuvlari.",
    category: categories[7],
    imageUrl: '',
    readTime: 7,
    updatedDate: '2024-03-12',
    publishedDate: '2024-02-20',
    isReviewed: true,
    reviewer: doctors[1],
  },
  {
    slug: 'insult-belgilari',
    title: "Insultning dastlabki belgilari: vaqtni boy bermang",
    excerpt: "Insultning erta belgilarini tanib olish hayot saqlab qolishi mumkin. FAST usuli va shoshilinch harakatlar.",
    category: categories[4],
    imageUrl: '',
    readTime: 5,
    updatedDate: '2024-03-08',
    publishedDate: '2024-02-18',
    isReviewed: true,
    reviewer: doctors[3],
  },
];

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter(a => a.category.slug === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find(d => d.slug === slug);
}

export function getArticlesByDoctor(doctorSlug: string): Article[] {
  return articles.filter(a => a.reviewer?.slug === doctorSlug);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    a => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.name.toLowerCase().includes(q)
  );
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(a => a.isFeatured);
}
