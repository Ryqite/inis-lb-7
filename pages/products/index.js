import Head from 'next/head'
import { Alert, Col, Row } from 'react-bootstrap'
import ProductList from '../../components/ProductList'
import ShoppingCart from '../../components/ShoppingCart'
import { getAllProducts } from '../../lib/products'

// SSR: функция выполняется на сервере при КАЖДОМ запросе страницы.
// Поэтому цены и наличие всегда актуальны, а generatedAt меняется при каждом обновлении.
export async function getServerSideProps() {
  const products = await getAllProducts()

  return {
    props: {
      products,
      generatedAt: new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Minsk' }),
    },
  }
}

export default function ProductsPage({ products, generatedAt }) {
  return (
    <>
      <Head>
        <title>Каталог — SampleShop</title>
        <meta name="description" content="Каталог цифровых товаров с актуальными ценами и наличием" />
      </Head>

      <Alert variant="info" className="py-2">
        SSR: страница сгенерирована на сервере <strong>{generatedAt}</strong>
      </Alert>

      <Row className="g-4">
        <Col lg={8} xl={9}>
          <ProductList products={products} />
        </Col>
        <Col lg={4} xl={3}>
          <ShoppingCart />
        </Col>
      </Row>
    </>
  )
}
