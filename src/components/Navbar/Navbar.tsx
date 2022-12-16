import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <button aria-label='menu'>
        <Image
          src='/assets/shared/tablet/icon-hamburger.svg'
          alt='menu'
          width={16}
          height={15}
        />
      </button>
      <Link href='/' className={styles.name}>
        Audio Ecommerce
      </Link>
      <button aria-label='cart'>
        <Image
          src='/assets/shared/desktop/icon-cart.svg'
          alt='cart'
          width={23}
          height={20}
        />
      </button>
    </header>
  )
}

export default Navbar
