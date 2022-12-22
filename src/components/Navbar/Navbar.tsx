import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import Categories from '../Home/Categories/Categories'
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

  // disable body scroll when cart or nav menu is open
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

  // on redirection / new catergory chosen -> close menu
  useEffect(() => {
    setIsMenuOpen(false)
  }, [router])

  //  Handle click outside - close cart menu
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

        {/* Cart btn container */}
        <div className={styles.cartContainer} ref={cartMenuRef}>
          {/* Cart Btn */}
          <button aria-label='cart' className={styles.cartBtn} onClick={toggleCart}>
            {/* <Image
          src='/assets/shared/desktop/icon-cart.svg'
          alt='cart'
          width={23}
          height={20}
            /> */}
            <svg width='23' height='20' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z'
                fill='currentColor'
                fillRule='nonzero'
              />
            </svg>
          </button>
          {/* Cart Menu */}
          {isCartOpen && (
            <div className={styles.cart}>
              <div className={styles.cartHeader}>
                <div className={styles.title}>CART(0)</div>
                <button className={styles.clearCartBtn}>Clear all</button>
              </div>
              <div className={styles.cartList}></div>
              <div className={styles.cartFooter}>
                <div className={styles.totalTitle}>TOTAL</div>
                <div className={styles.totalPrice}>$0</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
