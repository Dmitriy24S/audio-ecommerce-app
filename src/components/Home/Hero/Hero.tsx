import Link from 'next/link'
import React from 'react'
import shared from '../../../styles/Button.module.css'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <p className={styles.overline}>new product</p>
      <h4 className={styles.title}>XX99 Mark II Headphones</h4>
      <p className={styles.subtitle}>
        Experience natural, lifelike audio and exceptional build quality made for the
        passionate music enthusiast.
      </p>
      <Link href='/category/xx99-mark-two-headphones' className={shared.button}>
        SEE PRODUCT
      </Link>
    </section>
  )
}

export default Hero
