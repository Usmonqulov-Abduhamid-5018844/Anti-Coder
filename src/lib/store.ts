import { configureStore } from "@reduxjs/toolkit"
import likeReducer from "./features/likeSlice"
import cartReducer from "./features/cartSlice"

export const store = configureStore({
  reducer: {
    like: likeReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
