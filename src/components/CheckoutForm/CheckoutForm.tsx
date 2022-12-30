import React from 'react'
import styles from './CheckoutForm.module.css'

const CheckoutForm = () => {
  return (
    <div className={styles.formFields}>
      <fieldset className={styles.billing}>
        <legend> Billing Details</legend>
        <div className={styles.inputContainer}>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='email'>Email Address</label>
          <input type='text' name='email' id='email' />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='phone'>Phone number</label>
          <input type='text' name='phone' id='phone' />
        </div>
      </fieldset>
      <fieldset className={styles.shipping}>
        <legend>Shipping Info</legend>
        <div className={styles.inputContainer}>
          <label htmlFor='address'>Your Address</label>
          <input type='text' name='address' id='address' />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='zip'>Zip Code</label>
          <input type='text' name='zip' id='zip' />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='city'>City</label>
          <input type='text' name='city' id='city' />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='country'>Country</label>
          <input type='text' name='country' id='country' />
        </div>
      </fieldset>
      <fieldset className={styles.payment}>
        <legend>Payment Details</legend>
        <div className={styles.radioInputContainer}>
          <input
            type='radio'
            name='payment'
            id='payment1'
            value='e-Money'
            title='e-Money'
          />
          <label htmlFor='payment1'>e-Money</label>
        </div>
        <div className={styles.radioInputContainer}>
          <input
            type='radio'
            name='payment'
            id='payment2'
            value='Cash on Delivery'
            title='Cash on Delivery'
          />
          <label htmlFor='payment2'>Cash on Delivery</label>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='eMoneyNumber'>e-Money Number</label>
          <input type='number' name='eMoneyNumber' id='eMoneyNumber' />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='eMoneyPin'>e-Money PIN</label>
          <input type='number' name='eMoneyPin' id='eMoneyPin' />
        </div>
      </fieldset>
    </div>
  )
}

export default CheckoutForm
