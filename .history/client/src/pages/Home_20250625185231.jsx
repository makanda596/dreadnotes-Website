import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import BrandCustomize from '../components/BrandCustomize'
import Reviews from '../components/Reviews'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <BrandCustomize/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home