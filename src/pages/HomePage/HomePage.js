import React from 'react'

import Products from '../ShopPage/Products'
import '../../style/home.css';
import Hero from '../../Components/Hero';

const HomePage = () => {
   return (
      <>
         <Hero />
         <Products />
         <div>Footer</div>
      </>
   )
}

export default HomePage
