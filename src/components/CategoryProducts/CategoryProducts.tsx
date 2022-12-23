import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import shared from '../../styles/Button.module.css'
import styles from './CategoryProducts.module.css'

interface IProps {
  data: {
    name: string
    feature: string
    detail: string
    label: string
    alt: string
    src: string
    price: string
    link: string
  }[]
  category: string | string[] | undefined // TODO: type limit?
}

const CategoryProducts = ({ data, category }: IProps) => {
  return (
    <section className={styles.category}>
      {/* <div className={styles.hero}>Headphones</div> */}
      <div className={styles.hero}>{category}</div>
      <div className={styles.products}>
        {/* {HEADPHONES.map((headphone) => ( */}
        {data.map((item) => (
          <div className={styles.product} key={item.name}>
            <Image
              src={item.src}
              alt={item.name}
              width={200}
              height={200}
              className={styles.image}
            />
            <div className={styles.content}>
              {item.feature && <div className={styles.feature}>{item.feature}</div>}
              <div className={styles.name}>{item.name}</div>
              <div className={styles.detail}>{item.detail}</div>
              <Link href={`${category}${item.link}`} className={shared.button}>
                See product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategoryProducts
