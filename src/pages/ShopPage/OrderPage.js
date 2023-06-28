import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../config.js';
import Product from '../ShopPage/Product.js';

const OrderPage = () => {

   const [productsList, setProductsList] = useState([]);
   const { id } = useParams();

   const deleteHandler = () => {
      fetch(`${API_URL}/products/${id}`, {
         method: 'DELETE',
      })
   }

   return (
      <div className='container'>

         {productsList && productsList.length > 0 ? (
            <ul className='list'>
               {productsList.map((item, index) => <li><Product
                  item={item.title}
                  count={item.count}
                  totalSum={item.sum} />
                  <button onClick={deleteHandler}>Delete</button>
               </li>)}
            </ul>
         ) : (
            <h2>Your product list is empty</h2>
         )
         }

      </div>
   )
}

export default OrderPage
