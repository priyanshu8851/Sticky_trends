import React from 'react'
import Header from './components/header/Header'
import Herosec from './components/Herosec/Herosec'
import Tagline from './components/tagline/Tagline'
import Product from './components/products/Product'
import Custom from './components/custom/Custom'
import Footer from './components/footer/Footer'
import TopButton from './components/TopButton/TopButton'
const App = () => {
  return (
    <>
      <Header/>
      <Herosec/>
      <Tagline/>
      <Product/>
      <Custom/>
      <Footer/>
      {/* <TopButton/> */}
    </>
  )
}

export default App
