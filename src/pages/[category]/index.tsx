import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import About from '../../components/About/About'
import Categories from '../../components/Categories/Categories'
import CategoryProducts from '../../components/CategoryProducts/CategoryProducts'
import { EARPHONES, HEADPHONES, SPEAKERS } from '../../data/CategoryData'

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

const CategoryPage = () => {
  const router = useRouter()
  console.log('router', router) // router {pathname: '/[category]', route: '/[category]', query: {…}, asPath: '/headphones', components: {…}, …} // query: category : "headphones"

  // const category = router.query.category
  // const category: string | string[] | undefined // TODO: type limit?
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
      <CategoryProducts data={data} category={category} />
      <Categories />
      <About />
    </>
  )
}

export default CategoryPage
