import React from 'react'
import Hero from './Hero'
import Navbar from '../partials/Navbar'
import Footer from '../partials/Footer'
import Brokerage from './Brokerage'
import OpenAccount from '../partials/OpenAccount'

const PricingPage = () => {
  return (
    <>
    <Hero />
    <OpenAccount />
    <Brokerage />
    </>
  )
}

export default PricingPage