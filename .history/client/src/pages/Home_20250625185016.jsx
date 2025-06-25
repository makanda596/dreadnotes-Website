import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Product from '../components/Products'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home