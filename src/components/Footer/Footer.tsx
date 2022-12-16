import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href='/' className={styles.name}>
        Audio Ecommerce
      </Link>
      <ul className={styles.list}>
        <li>
          <Link href='/' className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href='/' className={styles.link}>
            Headphones
          </Link>
        </li>
        <li>
          <Link href='/' className={styles.link}>
            Speakers
          </Link>
        </li>
        <li>
          <Link href='/' className={styles.link}>
            Earphones
          </Link>
        </li>
      </ul>
      <p className={styles.description}>
        Audio Ecommerce is an all in one stop to fulfill your audio needs. We&#39;re a
        small team of music lovers and sound specialists who are devoted to helping you
        get the most out of personal audio. Come and visit our demo facility - we&#39;re
        open 7 days a week.
      </p>
      <p className={styles.copyright}>Copyright 2021. All Rights Reserved</p>
      <ul className={styles.socials}>
        <li>
          <Link href='/' className={styles.link}>
            <Image
              src='/assets/shared/desktop/icon-facebook.svg'
              alt='facebook'
              width={25}
              height={25}
            />
          </Link>
        </li>
        <li>
          <Link href='/' className={styles.link}>
            <Image
              src='/assets/shared/desktop/icon-twitter.svg'
              alt='twitter'
              width={25}
              height={25}
            />
          </Link>
        </li>
        <li>
          <Link href='/' className={styles.link}>
            <Image
              src='/assets/shared/desktop/icon-instagram.svg'
              alt='instagram'
              width={25}
              height={25}
            />
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
