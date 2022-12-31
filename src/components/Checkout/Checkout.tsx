import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import CheckoutSummary from '../CheckoutSummary/CheckoutSummary'
import styles from './Checkout.module.css'

export interface IFormInputs {
  name: string
  email: string
  phone: string
  address: string
  zip: string
  city: string
  country: string
  payment: string
  eMoney: string
  eMoneyPin: string
}

export const schema = yup
  .object({
    name: yup.string().min(2).required(),
    email: yup.string().email().required(),
    phone: yup.string().min(8).required(),
    address: yup.string().min(4).required(),
    zip: yup.string().min(2).required(),
    city: yup.string().required(),
    country: yup.string().required(),
    payment: yup.string().required(),
    eMoney: yup.string().min(8).required(),
    eMoneyPin: yup.string().min(4).required(),
  })
  .required()

const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      payment: '', // prevent null from radio select?
    },
  })

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log('data:', data)
  }

  const watchAllFields = watch() // when pass nothing as argument, you are watching everything
  console.log(watchAllFields)

  return (
    <form className={styles.checkoutForm} onSubmit={handleSubmit(onSubmit)}>
      <h2>Checkout</h2>
      <CheckoutForm register={register} errors={errors} />
      <CheckoutSummary />
    </form>
  )
}

export default Checkout
