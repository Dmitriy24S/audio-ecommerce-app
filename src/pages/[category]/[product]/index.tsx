import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import About from '../../../components/About/About'
import Categories from '../../../components/Categories/Categories'
import Product from '../../../components/Product/Product'
import ProductFeatures from '../../../components/ProductFeatures/ProductFeatures'
import ProductGallery from '../../../components/ProductGallery/ProductGallery'
import SuggestedProducts from '../../../components/SuggestedProducts/SuggestedProducts'
import data from '../../../data/product-data.json'

const ProductPage = () => {
  const router = useRouter()
  console.log('router', router)
  // query: {category: 'earphones', slug: 'yx1'}
  const productNameSlug = router.query.product
  // console.log('productNameSlug', productNameSlug) // yx1
  // const product = data.filter((item) => item.name === productNameSlug)
  // console.log('data', data)
  const product = data.find((item) => item.id === productNameSlug)
  // console.log('product', product)

  return (
    <>
      <Head>
        {/* // !'product' is possibly 'undefined'.ts(18048) */}
        <title>{`Audio Shop - ${product?.name}`}</title>
        {/* // TODO: format title text? */}
      </Head>
      {!product ? (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          Error loading product
        </div>
      ) : (
        <>
          {/* // TODO: Wrapper 'Product / ProductDetauls' component? */}
          <Product product={product} />
          <ProductFeatures product={product} />
          <ProductGallery product={product} />
          <SuggestedProducts product={product} />
        </>
      )}
      <Categories />
      <About />
    </>
  )
}

export default ProductPage
