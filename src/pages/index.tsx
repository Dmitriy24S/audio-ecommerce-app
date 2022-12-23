// import Head from 'next/head'
// import Image from 'next/image'
// import Home from '../components/Home/Home'
import About from '../components/About/About'
import Categories from '../components/Categories/Categories'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import Hero from '../components/Hero/Hero'

export default function App() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <About />
    </>
  )
}
