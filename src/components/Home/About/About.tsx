import Image from 'next/image'
import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.about}>
      <Image
        src='/assets/shared/mobile/image-best-gear.jpg'
        alt='person with headphones'
        // width={auto}
        // height={auto}
        // layout='fill'
        // objectFit='contain'
        // fill
        width={100}
        height={400}
        className={styles.image}
      />
      <h1 className={styles.title}>
        Bringing you the <span>best</span> audio gear
      </h1>
      <p className={styles.description}>
        Located at the heart of New York City, Audiophile is the premier store for high
        end headphones, earphones, speakers, and audio accessories. We have a large
        showroom and luxury demonstration rooms available for you to browse and experience
        a wide range of our products. Stop by our store to meet some of the fantastic
        people who make Audiophile the best place to buy your portable audio equipment.
      </p>
    </section>
  )
}

export default About
