import Head from 'next/head'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

// Главная страница без получения данных: Next.js отрисует её статически при сборке
export default function Home() {
  return (
    <>
      <Head>
        <title>SampleShop — цифровые товары</title>
        <meta name="description" content="Интернет-магазин цифровых товаров: UI-киты, шаблоны, шрифты, книги" />
      </Head>

      <section className="py-5 text-center">
        <h2 className="display-5 fw-bold">Цифровые товары для дизайнеров и разработчиков</h2>
        <p className="lead text-body-secondary mb-4">
          UI-киты, шаблоны, шрифты и книги. Скачивание сразу после оплаты.
        </p>
        <Button as={Link} href="/products" variant="primary" size="lg">
          Перейти в каталог
        </Button>
      </section>
    </>
  )
}
