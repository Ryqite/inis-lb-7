import Head from 'next/head'
import Link from 'next/link'
import { Alert, Badge, Breadcrumb, Col, Row } from 'react-bootstrap'
import AddToCartForm from '../../components/AddToCartForm'
import Rating from '../../components/Rating'
import { getAllProducts, getProductById } from '../../lib/products'

// SSG: список страниц, которые нужно сгенерировать при сборке (по одной на каждый товар).
// fallback: false — любой другой id вернёт 404.
export async function getStaticPaths() {
  const products = await getAllProducts()

  return {
    paths: products.map((product) => ({ params: { id: String(product.id) } })),
    fallback: false,
  }
}

// SSG: выполняется один раз на каждую страницу во время `npm run build`.
export async function getStaticProps({ params }) {
  const product = await getProductById(params.id)

  if (!product) {
    return { notFound: true }
  }

  return {
    props: {
      product,
      builtAt: new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Minsk' }),
    },
  }
}

export default function ProductPage({ product, builtAt }) {
  return (
    <>
      <Head>
        <title>{`${product.name} — SampleShop`}</title>
        <meta name="description" content={product.description} />
      </Head>

      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} href="/products">
          Каталог
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>

      <Alert variant="secondary" className="py-2">
        SSG: страница сгенерирована при сборке <strong>{builtAt}</strong>
      </Alert>

      <Row className="g-4">
        <Col md={6}>
          <img src={product.image} alt={product.name} className="img-fluid rounded shadow-sm" />
        </Col>
        <Col md={6}>
          <Badge bg="secondary" className="mb-2">
            {product.category}
          </Badge>
          <h2 className="h3">{product.name}</h2>
          <Rating value={product.rating} className="mb-2" />
          <p>{product.description}</p>
          <p className="fs-3 fw-bold">${product.price.toFixed(2)}</p>
          <AddToCartForm product={product} />
        </Col>
      </Row>
    </>
  )
}
