import React from 'react'
import About from './About/About'
import Categories from './Categories/Categories'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'
import Hero from './Hero/Hero'
// import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <About />
    </>
  )
}

export default Home
