import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import About from '../../components/Home/About/About'
import Categories from '../../components/Home/Categories/Categories'
import { EARPHONES, HEADPHONES, SPEAKERS } from '../../data/CategoryData'
import shared from '../../styles/Button.module.css'
import styles from './Category.module.css'

// const HEADPHONES: {
// product: string;
// feature: string;
// detail: string;
// label: string;
// alt: string;
// src: string;
// price: string;
// link: string;
// }[]

const Category = () => {
  const router = useRouter()
  console.log('router', router) // router {pathname: '/[category]', route: '/[category]', query: {…}, asPath: '/headphones', components: {…}, …} // query: category : "headphones"

  // const category = router.query.category
  const {
    query: { category },
  } = useRouter()

  const data =
    category === 'headphones'
      ? HEADPHONES
      : category === 'earphones'
      ? EARPHONES
      : category === 'speakers'
      ? SPEAKERS
      : []

  // Uppercase category (Head title)
  // type: const category: string | string[] | undefined
  const toUppercase = (category: any) => {
    if (typeof category === 'string') {
      return category[0].toUpperCase() + category.slice(1).toLowerCase()
    }
    if (Array.isArray(category)) {
      // return category.map((c) => (c as string).toUpperCase()).join(', ')
      const firstCategory = category[0]
      const otherCategories = category.slice(1)
      return (
        firstCategory.charAt(0).toUpperCase() +
        firstCategory.slice(1) +
        ', ' +
        otherCategories.join(', ')
      )
    }
    return undefined
  }

  return (
    <>
      <Head>
        <title>{`Audio Shop - ${toUppercase(category)}`}</title>
      </Head>
      <section className={styles.category}>
        {/* <div className={styles.hero}>Headphones</div> */}
        <div className={styles.hero}>{category}</div>
        <div className={styles.products}>
          {/* {HEADPHONES.map((headphone) => ( */}
          {data.map((item) => (
            <div className={styles.product} key={item.name}>
              <Image
                src={item.src}
                alt={item.name}
                width={200}
                height={200}
                className={styles.image}
              />
              <div className={styles.content}>
                {item.feature && <div className={styles.feature}>{item.feature}</div>}
                <div className={styles.name}>{item.name}</div>
                <div className={styles.detail}>{item.detail}</div>
                <Link href={`${category}${item.link}`} className={shared.button}>
                  See product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Categories />
      <About />
    </>
  )
}

export default Category
