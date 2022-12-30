import React from 'react'
import shared from '../../styles/Button.module.css'
import styles from './CheckoutSummary.module.css'

const CheckoutSummary = () => {
  return (
    <div className={styles.summary}>
      <h2>Summary</h2>

      <ul className={styles.list}>
        <li className={styles.product}></li>
      </ul>

      <div className={styles.totalPricesContainer}>
        <div className={styles.total}>
          <div>Total</div>
          <div>$100</div>
        </div>
        <div className={styles.shipping}>
          <div>Shipping</div>
          <div>$100</div>
        </div>
        <div className={styles.vat}>
          <div>VAT (INCLUDED)</div>
          <div>$100</div>
        </div>
        <div className={styles.grandTotal}>
          <div>GRAND TOTAL</div>
          <div>$100</div>
        </div>

        <button className={shared.button} type='submit'>
          Continue & pay
        </button>
      </div>
    </div>
  )
}

export default CheckoutSummary
