import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Customize from '../components/Customize'
import Footer from '../components/Footer'

const Guest = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Products/>
      <Customize/>
      <Footer/>
    </div>
  )
}

export default Guest