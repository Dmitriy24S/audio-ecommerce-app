import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import shared from '../../styles/Button.module.css'
import { IProduct } from '../Product/Product'
import styles from './SuggestedProducts.module.css'

interface IProps {
  product: IProduct
}

const SuggestedProducts = ({ product }: IProps) => {
  const router = useRouter()
  const category = router.query.category

  return (
    <section className={styles.suggestions}>
      <h3 className={styles.title}>You may also like</h3>
      <div className={styles.products}>
        {product.preference.map((item) => (
          // TODO: shared class ? s main page how? dynamic work or test nado?
          <div key={item.name} className={styles.product}>
            <Image
              src={`/assets/${item.url}`}
              alt={item.alt}
              width={400}
              height={400}
              className={styles.image}
            />
            <div className={styles.info}>
              <h4 className={styles.name}>{item.name}</h4>
              {/* // TODO: refactor category url? */}
              <Link href={`/${category}${item.link}`} className={shared.button}>
                See product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SuggestedProducts
