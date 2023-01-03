import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
  addToCart,
  clearCart,
  decrementItem,
  totalCartAmount,
  totalCartQty,
} from '../../store/CartSlice/CartSlice'
import styles from './Cart.module.css'

const Cart = () => {
  const dispatch = useDispatch()
  const cartTotal = useSelector(totalCartAmount)
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const cartQty = useSelector(totalCartQty)

  const handleClearCart = () => dispatch(clearCart())

  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <div className={styles.title}>CART ({cartQty})</div>
        <button className={styles.clearCartBtn} onClick={handleClearCart}>
          Clear all
        </button>
      </div>
      <div className={styles.cartList}>
        {cartItems.length === 0 && 'Cart is Empty'}
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <Image
              src={item.cartImage}
              alt={item.shortName}
              width={64}
              height={64}
              className={styles.cartItemImage}
            />
            <div className={styles.cartItemDetails}>
              <p className={styles.cartItemName}>{item.shortName}</p>
              <p className={styles.cartItemPrice}>$ {item.price}</p>
            </div>
            <div className={styles.amountContainer}>
              <button
                onClick={() =>
                  dispatch(
                    decrementItem({
                      id: item.id,
                    })
                  )
                }
              >
                -
              </button>
              <div className={styles.cartItemQty}>{item.qty}</div>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: item.id,
                      shortName: item.shortName,
                      cartImage: item.cartImage,
                      price: item.price,
                      qty: 1,
                    })
                  )
                }
              >
                +
              </button>
            </div>
            {/* <p className={styles.cartItemQty}>{item.qty}</p> */}
          </div>
        ))}
      </div>
      <div className={styles.cartFooter}>
        <div className={styles.totalTitle}>TOTAL</div>
        {/* <div className={styles.totalPrice}>$ {totalCartAmount()}</div> */}
        <div className={styles.totalPrice}>$ {cartTotal}</div>
      </div>
    </div>
  )
}

export default Cart
