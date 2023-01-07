import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import Cart from '../Cart/Cart'
import CartButton from '../CartButton/CartButton'
import Categories from '../Categories/Categories'
import styles from './Navbar.module.css'

const Navbar = () => {
  const router = useRouter()
  // const category = router.query.category
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const toggleCart = () => {
    console.log('toggle cart menu')
    setIsCartOpen((prev) => !prev)
  }

  // Disable body scroll when cart or nav menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.overflowY = 'scroll'
    }
    // if (!isMenuOpen || !isCartOpen) {
    if (!isMenuOpen) {
      // document.body.style.overflow = 'auto'
      document.body.style.position = 'relative'
      document.body.style.overflowY = 'auto'
    }
  }, [isMenuOpen])

  // On redirection / new catergory chosen -> close menu & close cart menu
  useEffect(() => {
    setIsMenuOpen(false)
    setIsCartOpen(false)
  }, [router])

  // Handle click outside - close cart menu
  const cartMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // if click element outside dropdown menu - close dropdown menu
      if (!cartMenuRef.current?.contains(event.target as Element)) {
        setIsCartOpen(false)
        console.log('click outside cart -> close cart')
      }
    }
    if (isCartOpen) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isCartOpen])

  return (
    <header className={styles.header}>
      {/* Mobile nav menu */}
      {isMenuOpen && (
        <>
          <div className={styles.backdrop} onClick={toggleMenu}></div>
          <div className={styles.navMenu}>
            <Categories />
          </div>
        </>
      )}
      <div className={styles.wrapper}>
        {/* Nav menu toggle btn */}
        <button aria-label='menu' className={styles.navBtn} onClick={toggleMenu}>
          {!isMenuOpen ? (
            <Image
              src='/assets/shared/tablet/icon-hamburger.svg'
              alt='open menu'
              width={16}
              height={15}
            />
          ) : (
            <Image
              src='/assets/shared/tablet/icon-close-menu.svg'
              alt='close menu'
              width={16}
              height={15}
            />
          )}
        </button>

        {/* Logo */}
        <Link href='/' className={styles.name}>
          Audio Ecommerce
        </Link>

        {/* Desktop nav menu */}
        <ul className={styles.list}>
          <li>
            <Link href='/' className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href='/headphones' className={styles.link}>
              Headphones
            </Link>
          </li>
          <li>
            <Link href='/speakers' className={styles.link}>
              Speakers
            </Link>
          </li>
          <li>
            <Link href='/earphones' className={styles.link}>
              Earphones
            </Link>
          </li>
        </ul>

        {/* Cart */}
        <div className={styles.cartContainer} ref={cartMenuRef}>
          <CartButton toggleCart={toggleCart} />
          {isCartOpen && <Cart />}
        </div>
      </div>
    </header>
  )
}

export default Navbar
