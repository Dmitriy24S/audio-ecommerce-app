import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { links } from '../../../data/links'
import styles from './Categories.module.css'

const Categories = () => {
  return (
    <section className={styles.categories}>
      {/* exlude Home (index 0) link for categories */}
      {links.slice(1).map((link) => (
        <Link href={link.url} className={styles.card} key={link.id}>
          <Image
            src={link.img}
            alt={link.text}
            className={styles.image}
            width={155}
            height={145}
          />
          <div className={styles.content}>
            <h4 className={styles.title}>{link.text}</h4>
            <div className={styles.button}>
              Shop
              <Image
                src='/assets/shared/desktop/icon-arrow-right.svg'
                alt='arrow right'
                width={12}
                height={16}
              />
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default Categories
