import { createSlice } from '@reduxjs/toolkit'

// Начальное состояние среза: массив позиций корзины
const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // payload: { product, quantity } — собирается в prepare, чтобы вызывать addToCart(product, quantity)
    addToCart: {
      reducer(state, action) {
        const { product, quantity } = action.payload
        const existing = state.items.find((item) => item.id === product.id)
        if (existing) {
          existing.quantity += quantity
        } else {
          state.items.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity,
          })
        }
      },
      prepare(product, quantity = 1) {
        return { payload: { product, quantity } }
      },
    },
    // action.payload — идентификатор удаляемой позиции
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer

// Селекторы: производные данные вычисляются из items, а не хранятся отдельно
export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
