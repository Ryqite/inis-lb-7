import { useState } from 'react'
import { Alert, Col, Form, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'

export default function ProductList({ products }) {
  const [searchQuery, setSearchQuery] = useState('')

  const query = searchQuery.trim().toLowerCase()
  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(query))

  return (
    <section>
      <h2 className="h4 mb-3">Каталог</h2>

      <Form.Control
        type="search"
        className="mb-4"
        placeholder="Поиск по названию"
        aria-label="Поиск по названию"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />

      {filteredProducts.length > 0 ? (
        <Row xs={1} sm={2} xl={3} className="g-4">
          {filteredProducts.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        <Alert variant="secondary">Ничего не найдено</Alert>
      )}
    </section>
  )
}
