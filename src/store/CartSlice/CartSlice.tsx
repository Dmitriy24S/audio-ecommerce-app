import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { loadCart } from '../../utils/localStorage'

export interface CartItem {
  id: string
  shortName: string
  cartImage: string
  price: number
  qty: number
}

export interface CartSliceType {
  items: CartItem[]
  // isCartOpen: boolean
}

const savedLocalState = loadCart()
// console.log('savedLocalState', savedLocalState)
// items: Array(1)
// 0: {id: 'xx99-mark-ii', shortName: 'xx99 mk

const initialState: CartSliceType = {
  items: [],
  // isCartOpen: false,
}

export const CartSlice = createSlice({
  name: 'cart',
  // initialState,
  initialState: savedLocalState ? savedLocalState : initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const addedItem = action.payload
      const existingItem = state.items.find((item) => item.id === addedItem.id)
      if (!existingItem) {
        state.items.push(addedItem)
      } else {
        existingItem.qty += addedItem.qty
        // TODO ! overlap not match amoutn cart ++ in product page ++ number
      }
    },
    decrementItem: (state, action: PayloadAction<Partial<CartItem>>) => {
      const addedItem = action.payload
      const existingItem = state.items.find((item) => item.id === addedItem.id)
      if (existingItem) {
        if (existingItem.qty > 1) {
          console.log('decrement item from cart')
          existingItem.qty -= 1
        } else if (existingItem.qty === 1) {
          console.log('only 1 left? remove it from cart')
          state.items = state.items.filter((item) => item.id !== existingItem.id)
          // const updatedItems = state.items.filter((item) => item.id !== existingItem.id)
          // state.items = updatedItems
          // state.items = []
        }
      }
    },
    clearCart: (state) => {
      state.items = []
    },
    // toggleCart: (state) => {
    //   state.isCartOpen = !state.isCartOpen
    // },
  },
})

export const totalCartAmount = (state: RootState) => {
  const total = state.cart.items.reduce((cartTotal, currentItem) => {
    const { price, qty } = currentItem
    console.log('cartTotal before:', cartTotal)
    cartTotal += price * qty
    console.log('cartTotal after:', cartTotal)
    return cartTotal
  }, 0)
  // return parseFloat(total.toFixed(2))
  return total
}

export const totalCartQty = (state: RootState) => {
  const total = state.cart.items.reduce((total, currItem) => {
    total += currItem.qty
    return total
  }, 0)
  return total
}

// Action creators are generated for each case reducer function
export const { addToCart, decrementItem, clearCart } = CartSlice.actions

export default CartSlice.reducer
