import { CartSliceType } from '../store/CartSlice/CartSlice'

export const loadCart = (): CartSliceType | undefined => {
  try {
    const serializedCart = localStorage.getItem('cart')
    // console.log('serializedCart', serializedCart)
    // {"items":[{"id":"xx99-mark-ii","shortName":"xx99 mk...
    if (serializedCart === null) {
      return undefined
    }
    return JSON.parse(serializedCart)
  } catch (err) {
    return undefined
  }
}

export const saveCart = (cart: CartSliceType): void => {
  try {
    const serializedCart = JSON.stringify(cart)
    localStorage.setItem('cart', serializedCart)
  } catch (err) {
    console.log('error while saving cart to local storage', err)
  }
}
