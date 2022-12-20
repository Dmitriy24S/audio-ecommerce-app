import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import shared from '../../../styles/Button.module.css'
import styles from './FeaturedProducts.module.css'

const FeaturedProducts = () => {
  const [screenSize, setScreenSize] = useState('SMALL')
  // TODO: SMALL LARGE -> make const. var.

  // ! Flashes image on change */

  const handleResizeImage = () => {
    if (window.innerWidth < 950) {
      setScreenSize('SMALL')
    }
    // if (window.innerWidth > 650 && window.innerWidth < 950) {
    //   setScreenSize('MEDIUM')
    // }
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
    <section className={styles.featured}>
      {/* speaker */}
      <div className={[styles.card, styles.cardOrange].join(' ')}>
        {screenSize === 'SMALL' && (
          <Image
            src='/assets/home/desktop/image-speaker-zx9.png'
            alt='speakers'
            // className={styles.image}
            width={158}
            height={200}
          />
        )}
        {screenSize === 'LARGE' && (
          <Image
            src='/assets/home/desktop/image-speaker-zx9.png'
            alt='speakers'
            className={styles.image}
            width={310}
            height={285}
          />
        )}
        <div className={styles.content}>
          <h4 className={styles.title}>ZX9 Speaker</h4>
          <p className={styles.subtitle}>
            Upgrade to premium speakers that are phenomenally built to deliver truly
            remarkable sound.
          </p>
          <button className={[shared.button, shared.secondaryBlack].join(' ')}>
            See product
          </button>
        </div>
      </div>
      {/* speaker */}
      <div className={[styles.card, styles.cardGray].join(' ')}>
        <h4 className={styles.title}>ZX7 speaker</h4>
        <button className={[shared.button, shared.secondaryGray].join(' ')}>
          See product
        </button>
      </div>
      {/* earphones */}
      {/* <div className={styles.card}> */}
      <div className={styles.earphones}>
        <Image
          src='/assets/home/mobile/image-earphones-yx1.jpg'
          alt='speakers'
          className={styles.image}
          width={700}
          height={400}
        />
        {/* </div> */}
        <div className={[styles.card, styles.cardGray].join(' ')}>
          <h4 className={styles.title}>YX1 earphones</h4>
          <button className={[shared.button, shared.secondaryGray].join(' ')}>
            See product
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
