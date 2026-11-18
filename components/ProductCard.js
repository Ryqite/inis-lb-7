import Link from 'next/link'
import { Card } from 'react-bootstrap'
import AddToCartForm from './AddToCartForm'
import Rating from './Rating'

export default function ProductCard({ product }) {
  const href = `/products/${product.id}`

  return (
    <Card className="h-100 shadow-sm">
      <Link href={href}>
        <Card.Img variant="top" src={product.image} alt={product.name} />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3" className="h6">
          <Link href={href} className="text-reset text-decoration-none">
            {product.name}
          </Link>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-body-secondary">{product.category}</Card.Subtitle>

        <Rating value={product.rating} className="mb-2" />

        <p className="fs-4 fw-bold mb-1">${product.price.toFixed(2)}</p>
        <p className={`small mb-3 ${product.stock > 0 ? 'text-success' : 'text-danger'}`}>
          {product.stock > 0 ? `В наличии: ${product.stock}` : 'Нет в наличии'}
        </p>

        <div className="mt-auto">
          <AddToCartForm product={product} />
        </div>
      </Card.Body>
    </Card>
  )
}
