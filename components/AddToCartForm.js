import { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

const MAX_QUANTITY = 99
const clamp = (value) => Math.min(MAX_QUANTITY, Math.max(1, value))

// Селектор количества и кнопка «Добавить в корзину»: общий для карточки и страницы товара
export default function AddToCartForm({ product }) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const inStock = product.stock > 0

  const handleAdd = () => {
    dispatch(addToCart(product, quantity))
    setQuantity(1)
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <Button
          variant="outline-secondary"
          aria-label="Уменьшить количество"
          disabled={!inStock || quantity <= 1}
          onClick={() => setQuantity(clamp(quantity - 1))}
        >
          −
        </Button>
        <Form.Control
          type="number"
          min={1}
          max={MAX_QUANTITY}
          value={quantity}
          disabled={!inStock}
          aria-label="Количество"
          className="text-center"
          onChange={(event) => setQuantity(clamp(Number(event.target.value) || 1))}
        />
        <Button
          variant="outline-secondary"
          aria-label="Увеличить количество"
          disabled={!inStock || quantity >= MAX_QUANTITY}
          onClick={() => setQuantity(clamp(quantity + 1))}
        >
          +
        </Button>
      </InputGroup>

      <Button variant="primary" className="w-100" disabled={!inStock} onClick={handleAdd}>
        {inStock ? 'Добавить в корзину' : 'Нет в наличии'}
      </Button>
    </div>
  )
}
