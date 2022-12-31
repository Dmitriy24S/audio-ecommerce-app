import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { IFormInputs } from '../Checkout/Checkout'
import styles from './CheckoutForm.module.css'

interface IProps {
  register: UseFormRegister<IFormInputs>
  errors: Partial<FieldErrors<IFormInputs>>
}

const CheckoutForm = ({ register, errors }: IProps) => {
  //   {
  //     "name": "fddfdf",
  //     "email": "",
  //     "phone": "",
  //     "address": "",
  //     "zip": "",
  //     "city": "",
  //     "country": "",
  //     "payment": "e-Money",
  //     "eMoney": "322342",
  //     "eMoneyPin": "234234234"
  // }

  return (
    <div className={styles.formFields}>
      <fieldset className={styles.billing}>
        <legend> Billing Details</legend>
        <div className={styles.inputContainer}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' {...register('name')} />
          <p role='alert' className={styles.inputErrorMsg}>
            {errors.name?.message}
          </p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='email'>Email Address</label>
          <input type='text' id='email' {...register('email')} />
          <p role='alert' className={styles.inputErrorMsg}>
            {errors.email?.message}
          </p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='phone'>Phone Number</label>
          <input type='number' id='phone' {...register('phone')} />
          <p role='alert' className={styles.inputErrorMsg}>
            {errors.phone?.message}
          </p>
        </div>
      </fieldset>
      <fieldset className={styles.shipping}>
        <legend>Shipping Info</legend>
        <div className={styles.inputContainer}>
          <label htmlFor='address'>Your Address</label>
          <input type='text' id='address' {...register('address')} />
          <p role='alert' className={styles.inputErrorMsg}>
            {errors.address?.message}
          </p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='zip'>Zip Code</label>
          <input type='text' id='zip' {...register('zip')} />
          <p role='alert' className={styles.inputErrorMsg}>
            {errors.zip?.message}
          </p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' {...register('city')} />
          <p role='alert' className={styles.inputErrorMsg}>
            {errors.city?.message}
          </p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='country'>Country</label>
          <input type='text' id='country' {...register('country')} />
          <p role='alert' className={styles.inputErrorMsg}>
            {errors.country?.message}
          </p>
        </div>
      </fieldset>
      <fieldset className={styles.payment}>
        <legend>Payment Details</legend>
        <div className={styles.radioInputContainer}>
          <input
            type='radio'
            id='payment1'
            value='e-Money'
            title='e-Money'
            {...register('payment')}
          />
          <label htmlFor='payment1'>e-Money</label>
        </div>
        <div className={styles.radioInputContainer}>
          <input
            type='radio'
            {...register('payment')}
            id='payment2'
            value='Cash on Delivery'
            title='Cash on Delivery'
          />
          <label htmlFor='payment2'>Cash on Delivery</label>
          <p role='alert' className={styles.inputErrorMsg}>
            {errors.payment?.message}
          </p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='eMoney'>e-Money Number</label>
          <input type='number' id='eMoney' {...register('eMoney')} />
          <p role='alert' className={styles.inputErrorMsg}>
            {errors.eMoney?.message}
          </p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='eMoneyPin'>e-Money PIN</label>
          <input type='number' id='eMoneyPin' {...register('eMoneyPin')} />
          <p role='alert' className={styles.inputErrorMsg}>
            {errors.eMoneyPin?.message}
          </p>
        </div>
      </fieldset>
    </div>
  )
}

export default CheckoutForm
