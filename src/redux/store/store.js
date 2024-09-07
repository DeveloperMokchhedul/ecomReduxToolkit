import { configureStore } from '@reduxjs/toolkit'
import product from "../slice/todoSlice"
import cart from "../slice/cartSlice"

export const store = configureStore({
  reducer: {
    product,
    cart
  },
})