import { Button, Card, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, selectCartItems, selectCartTotal } from '../store/cartSlice'

export default function ShoppingCart() {
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const dispatch = useDispatch()

  return (
    <Card as="aside" className="shadow-sm">
      <Card.Body>
        <Card.Title as="h2" className="h4 mb-3">
          Корзина
        </Card.Title>

        {items.length === 0 ? (
          <p className="text-body-secondary mb-0">Корзина пуста</p>
        ) : (
          <>
            <ListGroup variant="flush">
              {items.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex justify-content-between align-items-center gap-2 px-0"
                >
                  <div>
                    <div className="fw-semibold">{item.name}</div>
                    <small className="text-body-secondary">
                      {item.quantity} × ${item.price.toFixed(2)}
                    </small>
                  </div>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    aria-label={`Удалить ${item.name}`}
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    ×
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>

            <div className="d-flex justify-content-between fs-5 mt-3">
              <span>Итого</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  )
}
