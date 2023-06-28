import React, { useEffect, useState } from 'react'
import { API_URL } from '../config';
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
         <div className='products-list'>
            <h1>Products list:</h1>

            <ul>
               {products.map(item => <li key={item.id}>
                  <img style={{ width: 100, height: 120 }} src={item.photoURL} alt="product" />
                  <h2> {item.title}</h2>
                  <h2>{item.price}</h2>
               </li>)}
            </ul>
         </div>
         <div>
            {/* <Link to='/products-list'>Go to products list</Link> */}  {/*variantui su linkais*/}
            <DeleteProduct />
         </div>
      </>
   )
}

export default AdminPage
