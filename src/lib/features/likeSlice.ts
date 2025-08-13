import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface ProductDetailType {
  id: number
  title: string
  desc: string
  price: number
  oldPrice?: number
  thumbnail: string
  details: {
    id: number
    title: string
    desc: string
  }[]
}

interface LikeState {
  value: ProductDetailType[]
}

const initialState: LikeState = {
  value: [
    {
      id: 1,
      title: "Встраиваемый светильник Novotech",
      desc: "Элегантный встраиваемый светильник",
      price: 6399,
      oldPrice: 7000,
      thumbnail: "/placeholder.svg?height=300&width=300",
      details: [],
    },
    {
      id: 2,
      title: "Встраиваемый светильник Novotech",
      desc: "Элегантный встраиваемый светильник",
      price: 6399,
      oldPrice: 7000,
      thumbnail: "/placeholder.svg?height=300&width=300",
      details: [],
    },
  ],
}

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<ProductDetailType>) => {
      const exist = state.value.some((item) => item.id === action.payload.id)
      if (exist) {
        state.value = state.value.filter((item) => item.id !== action.payload.id)
      } else {
        state.value.push(action.payload)
      }
    },
  },
})

export const { toggleLike } = likeSlice.actions
export default likeSlice.reducer
