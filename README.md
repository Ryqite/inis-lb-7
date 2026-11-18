# SampleShop — Next.js (ЛР №25, вариант 3)

Интернет-магазин цифровых товаров, перенесённый на Next.js (Pages Router).

| Маршрут | Файл | Стратегия | Функция |
|---|---|---|---|
| `/` | `pages/index.js` | статическая (автоматически) | — |
| `/products` | `pages/products/index.js` | **SSR** | `getServerSideProps` |
| `/products/[id]` | `pages/products/[id].js` | **SSG** | `getStaticProps` + `getStaticPaths` |

## Запуск

Требуется Node.js 18.18+.

```bash
npm install
npm run dev          # разработка
npm run build        # production-сборка
npm run start        # запуск production-сервера, http://localhost:3000
```

## Проверка рендеринга

Откройте страницу, нажмите Ctrl+U (View Page Source) — HTML товаров уже есть в исходном коде.
На `/products` время «сгенерирована на сервере» меняется при каждом обновлении страницы,
на `/products/1` время «сгенерирована при сборке» остаётся тем же до следующего `npm run build`.
