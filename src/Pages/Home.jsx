import React from 'react'
import Herosec from '../components/Herosec/Herosec'
import Tagline from '../components/tagline/Tagline'
import Product from '../components/products/Product'
import Custom from '../components/custom/Custom'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Herosec/>
      <Tagline/>
      <Product/>
      <Custom/>
      <Footer/>
    </>
  )
}

export default Home
