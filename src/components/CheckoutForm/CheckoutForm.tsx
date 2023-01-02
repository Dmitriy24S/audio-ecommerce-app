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
    <div className={styles.fieldsContainer}>
      <fieldset className={styles.field}>
        <legend> Billing Details</legend>
        <div className={styles.billing}>
          <div className={styles.inputContainer}>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              {...register('name')}
              placeholder='John Doe'
              className={errors.name ? styles.inputError : ''}
            />
            <p role='alert' className={styles.inputErrorMsg}>
              {errors.name?.message}
            </p>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='email'>Email Address</label>
            <input
              type='text'
              id='email'
              {...register('email')}
              placeholder='john@doe.com'
              className={errors.email ? styles.inputError : ''}
            />
            <p role='alert' className={styles.inputErrorMsg}>
              {errors.email?.message}
            </p>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='number'
              id='phone'
              {...register('phone')}
              placeholder='+1 202-555-0136'
              className={errors.phone ? styles.inputError : ''}
            />
            <p role='alert' className={styles.inputErrorMsg}>
              {errors.phone?.message}
            </p>
          </div>
        </div>
      </fieldset>
      <fieldset className={styles.field}>
        <legend>Shipping Info</legend>
        <div className={styles.shipping}>
          <div className={styles.inputContainer}>
            <label htmlFor='address'>Your Address</label>
            <input
              type='text'
              id='address'
              {...register('address')}
              placeholder='1137 Williams Avenue'
              className={errors.address ? styles.inputError : ''}
            />
            <p role='alert' className={styles.inputErrorMsg}>
              {errors.address?.message}
            </p>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='zip'>Zip Code</label>
            <input
              type='text'
              id='zip'
              {...register('zip')}
              placeholder='10001'
              className={errors.zip ? styles.inputError : ''}
            />
            <p role='alert' className={styles.inputErrorMsg}>
              {errors.zip?.message}
            </p>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              id='city'
              {...register('city')}
              placeholder='New York'
              className={errors.city ? styles.inputError : ''}
            />
            <p role='alert' className={styles.inputErrorMsg}>
              {errors.city?.message}
            </p>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='country'>Country</label>
            <input
              type='text'
              id='country'
              {...register('country')}
              placeholder='United States'
              className={errors.country ? styles.inputError : ''}
            />
            <p role='alert' className={styles.inputErrorMsg}>
              {errors.country?.message}
            </p>
          </div>
        </div>
      </fieldset>
      <fieldset className={styles.field}>
        <legend>Payment Details</legend>
        <label htmlFor='payment1'>Payment Methods</label>
        <div className={styles.radioInputContainer}>
          <label htmlFor='payment1' tabIndex={0}>
            <input
              type='radio'
              id='payment1'
              value='e-Money'
              title='e-Money'
              {...register('payment')}
            />
            <div className={styles.radioInput}></div>
            e-Money
          </label>
        </div>
        {/* // TODO: focus aria? */}
        <div className={styles.radioInputContainer}>
          <label htmlFor='payment2' tabIndex={0}>
            <input
              type='radio'
              {...register('payment')}
              id='payment2'
              value='Cash on Delivery'
              title='Cash on Delivery'
            />
            <div className={styles.radioInput}></div>
            Cash on Delivery
          </label>
          <p role='alert' className={styles.inputErrorMsg}>
            {errors.payment?.message}
          </p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='eMoney'>e-Money Number</label>
          <input
            type='number'
            id='eMoney'
            {...register('eMoney')}
            placeholder='238521993'
            className={errors.eMoney ? styles.inputError : ''}
          />
          <p role='alert' className={styles.inputErrorMsg}>
            {errors.eMoney?.message}
          </p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='eMoneyPin'>e-Money PIN</label>
          <input
            type='number'
            id='eMoneyPin'
            {...register('eMoneyPin')}
            placeholder='6891'
            className={errors.eMoneyPin ? styles.inputError : ''}
          />
          <p role='alert' className={styles.inputErrorMsg}>
            {errors.eMoneyPin?.message}
          </p>
        </div>
      </fieldset>
    </div>
  )
}

export default CheckoutForm
