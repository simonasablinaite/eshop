import React from 'react';
import heroPhoto from '../img/jellow-flowers.png';

const Hero = () => {
   return (
      <div className='hero'>
         <div className='element-wrapper'>

            <p>Lillide flowers bouquet shop</p>


            <img style={{ maxWidth: '70%' }} src={heroPhoto} alt="" />
         </div>

      </div >
   )
}

export default Hero
