import React, { useEffect, useState } from 'react'
import { API_URL } from '../config';
import CreateProduct from './CREATE/CreateProduct';
// import { Link } from 'react-router-dom'
import DeleteProduct from './DELETE/DeleteProduct'

const AdminPage = () => {

   const [products, setProducts] = useState([]);

   useEffect(() => {
      fetch(`${API_URL}/products`)
         .then(res => res.json())
         .then(data => setProducts(data))
   }, [])

   return (
      <>
         <div className='products-list-wrapper'>
            <h1>Products list:</h1>

            <div className='products-list'>
               <ul className='list-items'>
                  {products.map(item => <li key={item.id}>

                     <DeleteProduct
                        product={item}
                        productPic={item.photoURL}
                        productTitle={item.title}
                        productPrice={item.price}
                     />
                  </li>)}
               </ul>
            </div>
         </div>

         <div className='created-wrapper'>
            <CreateProduct />
         </div>
      </>
   )
}

export default AdminPage
