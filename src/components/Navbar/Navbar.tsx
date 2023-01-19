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
    setIsCartOpen(false) // close cart if open menu, prevent overlap?
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
    console.log('router change?')
  }, [router])

  // Handle click outside - close cart menu
  const cartMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // console.log('event.target', event.target)
      // console.log(cartMenuRef.current)
      // if click element outside dropdown menu - close dropdown menu
      if (event.target instanceof Element) {
        if (
          !cartMenuRef.current?.contains(event.target) &&
          event.target.id !== 'decrementBtn'
          // ignore decrementBtn -> remove last item -> cart item element with clicked btn no longer exist inside ref = without this closes cart anytime decrement/remove last item with 1 amount
        ) {
          setIsCartOpen(false)
          console.log(0, 'click outside cart -> close cart')
        }
      }
    }
    // document.addEventListener('click', handleClickOutside)
    // console.log(444, 'useffect')
    if (isCartOpen) {
      document.addEventListener('click', handleClickOutside)
      // console.log(111, 'add event listener ')
    } else {
      document.removeEventListener('click', handleClickOutside)
      // console.log(222, 'remove event listener ')
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
      // console.log(333, 'unmount - remove event listener')
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
