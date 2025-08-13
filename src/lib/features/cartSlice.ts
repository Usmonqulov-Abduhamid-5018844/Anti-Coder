import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface ProductDetailType {
  id: number
  title: string
  desc: string
  price: number
  thumbnail: string
  amount?: number
  details: {
    id: number
    title: string
    desc: string
  }[]
}

interface CartState {
  value: ProductDetailType[]
}

const initialState: CartState = {
  value: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductDetailType>) => {
      const existingItem = state.value.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.amount = (existingItem.amount || 1) + 1
      } else {
        state.value.push({ ...action.payload, amount: 1 })
      }
    },
    increaseAmount: (state, action: PayloadAction<number>) => {
      const item = state.value.find(item => item.id === action.payload)
      if (item) {
        item.amount = (item.amount || 1) + 1
      }
    },
    decreaseAmount: (state, action: PayloadAction<number>) => {
      const item = state.value.find(item => item.id === action.payload)
      if (item && item.amount && item.amount > 1) {
        item.amount -= 1
      } else if (item) {
        state.value = state.value.filter(cartItem => cartItem.id !== action.payload)
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter(item => item.id !== action.payload)
    },
  },
})

export const { addToCart, increaseAmount, decreaseAmount, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
