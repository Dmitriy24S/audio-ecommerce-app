import React from 'react'
import { IProduct } from '../Product/Product'
import styles from './ProductFeatures.module.css'

interface IProps {
  product: IProduct
}

const ProductFeatures = ({ product }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.features}>
        <h2 className={styles.title}>Features</h2>
        <p className={styles.detail}>{product.featureDesc1}</p>
        <p className={styles.detail}>{product.featureDesc2}</p>
      </div>
      {/* Box Info */}
      <div className={styles.boxInfo}>
        <h2 className={styles.title}>In the box</h2>
        <ul>
          {product.inTheBox.map((item) => {
            return (
              <li key={item[1]} className={styles.boxItem}>
                <div className={styles.boxItemAmount}>{item[0]}</div>
                <p className={styles.boxItemName}>{item[1]}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProductFeatures
