import Image from 'next/image'
import React from 'react'
import shared from '../../styles/Button.module.css'
import styles from './CheckoutSummary.module.css'

const CheckoutSummary = () => {
  return (
    <div className={styles.summaryContainer}>
      <h2 className={styles.title}>Summary</h2>

      <ul className={styles.list}>
        <li className={styles.product}>
          <Image
            src='/assets/cart/image-xx59-headphones.jpg'
            alt='placeholder'
            width='64'
            height='64'
            className={styles.productImage}
          />
          <div className={styles.productDetails}>
            <div className={styles.productNameQtyContainer}>
              <p className={styles.productName}>Product name</p>
              <p className={styles.productQty}>x1</p>
            </div>
            <p className={styles.productPrice}>$ 129.99</p>
          </div>
        </li>
      </ul>

      <div className={styles.priceDetailsContainer}>
        <div className={styles.priceDetail}>
          <div className={styles.detailName}>Total</div>
          <div className={styles.price}>$ 100</div>
        </div>
        <div className={styles.priceDetail}>
          <div className={styles.detailName}>Shipping</div>
          <div className={styles.price}>$ 100</div>
        </div>
        <div className={styles.priceDetail}>
          <div className={styles.detailName}>VAT (INCLUDED)</div>
          <div className={styles.price}>$ 100</div>
        </div>
        <div className={styles.priceDetail}>
          <div className={styles.detailName}>GRAND TOTAL</div>
          <div className={styles.price}>$ 100</div>
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
