import React from 'react'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import CheckoutSummary from '../CheckoutSummary/CheckoutSummary'
import styles from './Checkout.module.css'

const Checkout = () => {
  return (
    <form className={styles.checkoutForm}>
      <h2>Checkout</h2>
      <CheckoutForm />
      <CheckoutSummary />
    </form>
  )
}

export default Checkout
