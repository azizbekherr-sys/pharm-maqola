# Maqola

Tibbiy kontent sayti — o'zbek tilida ishonchli, shifokor tomonidan tekshirilgan sog'liq maqolalari.

Next.js 16 (App Router, Turbopack) + React 19 + Tailwind CSS 4 asosida qurilgan. Barcha sahifalar statik generatsiya (SSG) qilinadi.

## Ishga tushirish

```bash
npm install
cp .env.example .env.local
npm run dev
```

[http://localhost:3000](http://localhost:3000) manzilini oching.

## Skriptlar

| Buyruq | Vazifasi |
|--------|----------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Production build'ni lokal serverda ishga tushirish |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript tekshiruvi |
| `npm run check` | Lint + typecheck + build (CI) |

## Struktura

```
src/
├── app/              # Sahifalar (App Router)
│   ├── maqola/       # Maqola sahifasi
│   ├── kategoriya/   # Kategoriya sahifasi
│   ├── shifokor/     # Shifokor profili
│   ├── qidiruv/      # Qidiruv
│   ├── ishonch/      # Ishonch va tahririyat siyosati (E-E-A-T)
│   ├── sitemap.ts    # sitemap.xml
│   └── robots.ts     # robots.txt
├── components/       # UI komponentlar
├── data/mock.ts      # Kontent ma'lumotlari
├── lib/              # Yordamchi funksiyalar va konfiguratsiya
└── types/            # TypeScript tiplari
```

## Deploy

Batafsil ko'rsatma: [DEPLOYMENT.md](DEPLOYMENT.md)

Talablar: Node.js 18+ (22.14.0 da sinovdan o'tgan).
