import Image from 'next/image'
import React from 'react'
import shared from '../../../styles/Button.module.css'
import styles from './FeaturedProducts.module.css'

const FeaturedProducts = () => {
  return (
    <section className={styles.featured}>
      {/* speaker */}
      <div className={[styles.card, styles.cardOrange].join(' ')}>
        <Image
          src='/assets/home/desktop/image-speaker-zx9.png'
          alt='speakers'
          className={styles.image}
          width={158}
          height={185}
        />
        <h4 className={styles.title}>ZX9 Speaker</h4>
        <p className={styles.subtitle}>
          Upgrade to premium speakers that are phenomenally built to deliver truly
          remarkable sound.
        </p>
        <button className={[shared.button, shared.secondaryBlack].join(' ')}>
          See product
        </button>
      </div>
      {/* speaker */}
      <div className={[styles.card, styles.cardGray].join(' ')}>
        <h4 className={styles.title}>ZX7 speaker</h4>
        <button className={[shared.button, shared.secondaryGray].join(' ')}>
          See product
        </button>
      </div>
      {/* earphones */}
      <div className={[styles.card, styles.cardGray].join(' ')}>
        <h4 className={styles.title}>YX1 earphones</h4>
        <button className={[shared.button, shared.secondaryGray].join(' ')}>
          See product
        </button>
      </div>
    </section>
  )
}

export default FeaturedProducts
