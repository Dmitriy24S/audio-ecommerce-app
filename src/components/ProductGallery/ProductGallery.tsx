import Image from 'next/image'
import React from 'react'
import { IProduct } from '../Product/Product'
import styles from './ProductGallery.module.css'

interface IProps {
  product: IProduct
}

const ProductGallery = ({ product }: IProps) => {
  return (
    <section className={styles.gallery}>
      {product.gallery.map((image) => (
        <Image
          key={image[0]}
          src={`/assets/${image[0]}`}
          alt={image[1]}
          width={200}
          height={200}
          className={styles.image}
        />
      ))}
    </section>
  )
}

export default ProductGallery
