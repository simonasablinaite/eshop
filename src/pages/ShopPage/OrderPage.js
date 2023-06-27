import React, { useState } from 'react';
import Product from '../ShopPage/Product.js';

const OrderPage = () => {

   const [productsList, setProductsList] = useState([]);

   return (
      <div className='container'>

         {productsList && productsList.length > 0 ? (
            <ul className='list'>
               {productsList.map((item, index) => <li><Product
                  item={item.title}
                  count={item.count}
                  totalSum={item.sum}
               /> </li>)}
            </ul>
         ) : (
            <h2>Your product list is empty</h2>
         )
         }

      </div>
   )
}

export default OrderPage
