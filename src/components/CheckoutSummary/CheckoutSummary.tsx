import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { totalCartAmount } from '../../store/CartSlice/CartSlice'
import shared from '../../styles/Button.module.css'
import styles from './CheckoutSummary.module.css'

const CheckoutSummary = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const cartTotal = useSelector(totalCartAmount)
  const SHIPPING = 100

  const [isRendered, setIsRendered] = useState(false)
  // temp. fixes? -> Error: Hydration failed because the initial UI does not match what was rendered on the server.
  // ! Warning: Text content did not match. Server: "0" Client: "2999" + etc
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsRendered(true)
    }
  }, [])

  return (
    <div className={styles.summaryContainer}>
      <h2 className={styles.title}>Summary</h2>

      <ul className={styles.list}>
        {isRendered &&
          cartItems.map((item) => (
            <li className={styles.product} key={item.id}>
              <Image
                //  src='/assets/cart/image-xx59-headphones.jpg'
                //  alt='placeholder'
                src={item.cartImage}
                alt={item.shortName}
                width='64'
                height='64'
                className={styles.productImage}
              />
              <div className={styles.productDetails}>
                <div className={styles.productNameQtyContainer}>
                  <p className={styles.productName}>{item.shortName}</p>
                  <p className={styles.productQty}>x {item.qty}</p>
                </div>
                <p className={styles.productPrice}>$ {item.price}</p>
              </div>
            </li>
          ))}
      </ul>

      <div className={styles.priceDetailsContainer}>
        <div className={styles.priceDetail}>
          <div className={styles.detailName}>Total</div>
          <div className={styles.price}>$ {isRendered && cartTotal}</div>
          {/* // ! Warning: Text content did not match. Server: "0" Client: "2999" */}
        </div>
        <div className={styles.priceDetail}>
          <div className={styles.detailName}>Shipping</div>
          <div className={styles.price}>
            $ {isRendered && cartItems.length > 0 ? SHIPPING : 0}
            {/* // TODO: fix isRendered? */}
          </div>
        </div>
        <div className={styles.priceDetail}>
          <div className={styles.detailName}>VAT (INCLUDED)</div>
          <div className={styles.price}>
            $ {isRendered && (cartTotal * 0.12).toFixed(2)}
          </div>
        </div>
        <div className={styles.priceDetail}>
          <div className={styles.detailName}>GRAND TOTAL</div>
          <div className={styles.price}>$ {isRendered && cartTotal + SHIPPING}</div>
        </div>
        {/* // TODO: format price calc. */}

        <button className={[shared.button, styles.orderButton].join(' ')} type='submit'>
          Continue & pay
        </button>
      </div>
    </div>
  )
}

export default CheckoutSummary
