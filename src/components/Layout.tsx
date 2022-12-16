import React from 'react'
import Footer from './Footer/Footer'
// import styles from './Layout.module.css'
import Navbar from './Navbar/Navbar'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
