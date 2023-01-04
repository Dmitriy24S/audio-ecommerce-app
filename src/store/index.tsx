import { configureStore } from '@reduxjs/toolkit'
import { saveCart } from '../utils/localStorage'
import CartReducer from './CartSlice/CartSlice'

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
})

store.subscribe(() => {
  saveCart(store.getState().cart)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
