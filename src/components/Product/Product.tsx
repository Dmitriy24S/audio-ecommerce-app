import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import shared from '../../styles/Button.module.css'
import styles from './Product.module.css'

export interface IProduct {
  id: string
  short: string
  productIMG: string
  feature: string
  name: string
  info: string
  price: number
  featureDesc1: string
  featureDesc2: string
  cartImg: string
  inTheBox: string[][]
  gallery: string[][]
  preference: {
    url: string
    alt: string
    name: string
    link: string
  }[]
}

// interface IProps extends IProduct {}
interface IProps {
  product: IProduct
}

const Product = ({ product }: IProps) => {
  const [amount, setAmount] = useState(0)
  const increaseAmount = () => setAmount((prev) => prev + 1)
  const decreaseAmount = () => amount > 0 && setAmount((prev) => prev - 1)

  const [screenSize, setScreenSize] = useState('SMALL')
  // TODO: SMALL / LARGE -> make const. var.
  const handleResizeImage = () => {
    if (window.innerWidth < 950) {
      setScreenSize('SMALL')
    }
    if (window.innerWidth > 650 && window.innerWidth < 950) {
      setScreenSize('MEDIUM')
    }
    if (window.innerWidth > 950) {
      setScreenSize('LARGE')
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResizeImage)
    handleResizeImage()
    return () => {
      window.removeEventListener('resize', handleResizeImage)
    }
  }, [])

  return (
    <section className={styles.container}>
      <div className={styles.product} key={product.name}>
        {screenSize === 'SMALL' && (
          <Image
            src={`/assets/${product.productIMG}/mobile/image-product.jpg`}
            alt={product.name}
            width={200}
            height={200}
            className={styles.image}
          />
        )}
        {screenSize === 'MEDIUM' && (
          <Image
            src={`/assets/${product.productIMG}/tablet/image-product.jpg`}
            alt={product.name}
            width={200}
            height={200}
            className={styles.image}
          />
        )}
        {screenSize === 'LARGE' && (
          <Image
            src={`/assets/${product.productIMG}/desktop/image-product.jpg`}
            alt={product.name}
            width={200}
            height={200}
            className={styles.image}
          />
        )}

        <div className={styles.detailsContainer}>
          <div className={styles.feature}>{product.feature}</div>
          <h2 className={styles.name}>{product.name}</h2>
          <p className={styles.detail}>{product.info}</p>
          <div className={styles.price}>$ {product.price}</div>
          {/* // TODO: price format */}
          <div className={styles.cartActionsContainer}>
            <div className={styles.amountContainer}>
              <button onClick={decreaseAmount}>-</button>
              <div className={styles.amount}>{amount}</div>
              <button onClick={increaseAmount}>+</button>
            </div>
            <button className={[shared.button, styles.addToCartBtn].join(' ')}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
