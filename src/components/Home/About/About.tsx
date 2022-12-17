import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './About.module.css'

const About = () => {
  const [screenSize, setScreenSize] = useState('LARGE')

  // ! Flashes image on change */

  const handleResizeImage = () => {
    if (window.innerWidth < 650) {
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
    <section className={styles.about}>
      {screenSize === 'SMALL' && (
        <Image
          src='/assets/shared/mobile/image-best-gear.jpg'
          alt='person with headphones'
          width={200}
          height={400}
          // style={{ height: 'auto', objectFit: 'contain', position: 'relative' }}
          className={styles.image}
        />
      )}
      {screenSize === 'MEDIUM' && (
        <Image
          src='/assets/shared/tablet/image-best-gear.jpg'
          alt='person with headphones'
          width={900}
          height={400}
          // style={{ height: 'auto', objectFit: 'contain', position: 'relative' }}
          className={styles.image}
        />
      )}
      {screenSize === 'LARGE' && (
        <Image
          src='/assets/shared/desktop/image-best-gear.jpg'
          alt='person with headphones'
          width={900}
          height={400}
          // style={{ height: 'auto', objectFit: 'contain', position: 'relative' }}
          className={styles.image}
        />
      )}
      <div className={styles.content}>
        <h1 className={styles.title}>
          Bringing you the <span>best</span> audio gear
        </h1>
        <p className={styles.description}>
          Located at the heart of New York City, Audiophile is the premier store for high
          end headphones, earphones, speakers, and audio accessories. We have a large
          showroom and luxury demonstration rooms available for you to browse and
          experience a wide range of our products. Stop by our store to meet some of the
          fantastic people who make Audiophile the best place to buy your portable audio
          equipment.
        </p>
      </div>
    </section>
  )
}

export default About
