import Image from 'next/image'
import React from 'react'
import styles from './Categories.module.css'
import CategoriesButton from './CategoriesButton'

const Categories = () => {
  return (
    <section className={styles.categories}>
      <div className={styles.card}>
        <Image
          src='/assets/shared/desktop/image-headphones.png'
          alt='headphones'
          className={styles.image}
          width={155}
          height={145}
        />
        <h4 className={styles.title}>Headphones</h4>
        <CategoriesButton />
      </div>
      <div className={styles.card}>
        <Image
          src='/assets/shared/desktop/image-speakers.png'
          alt='speakers'
          className={styles.image}
          width={158}
          height={145}
        />
        <h4 className={styles.title}>Speakers</h4>
        <CategoriesButton />
      </div>
      <div className={styles.card}>
        <Image
          src='/assets/shared/desktop/image-earphones.png'
          alt='earphones'
          className={styles.image}
          width={155}
          height={145}
        />
        <h4 className={styles.title}>Earphones</h4>
        <CategoriesButton />
      </div>
    </section>
  )
}

export default Categories
