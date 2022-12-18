import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Categories.module.css'

const Categories = () => {
  return (
    <section className={styles.categories}>
      <Link href='category/headphones' className={styles.card}>
        <Image
          src='/assets/shared/desktop/image-headphones.png'
          alt='headphones'
          className={styles.image}
          width={155}
          height={145}
        />
        <div className={styles.content}>
          <h4 className={styles.title}>Headphones</h4>
          <div className={styles.button}>
            Shop
            <Image
              src='/assets/shared/desktop/icon-arrow-right.svg'
              alt='arrow right'
              width={12}
              height={16}
            />
          </div>
        </div>
      </Link>
      <Link href='category/speakers' className={styles.card}>
        <Image
          src='/assets/shared/desktop/image-speakers.png'
          alt='speakers'
          className={styles.image}
          width={158}
          height={145}
        />
        <div className={styles.content}>
          <h4 className={styles.title}>Speakers</h4>
          <div className={styles.button}>
            Shop
            <Image
              src='/assets/shared/desktop/icon-arrow-right.svg'
              alt='arrow right'
              width={12}
              height={16}
            />
          </div>
        </div>
      </Link>
      <Link href='category/earphones' className={styles.card}>
        <Image
          src='/assets/shared/desktop/image-earphones.png'
          alt='earphones'
          className={styles.image}
          width={155}
          height={145}
        />
        <div className={styles.content}>
          <h4 className={styles.title}>Earphones</h4>
          <div className={styles.button}>
            Shop
            <Image
              src='/assets/shared/desktop/icon-arrow-right.svg'
              alt='arrow right'
              width={12}
              height={16}
            />
          </div>
        </div>
      </Link>
    </section>
  )
}

export default Categories
