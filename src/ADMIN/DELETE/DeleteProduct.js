import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../../config';

const DeleteProduct = ({ product, productTitle, productPrice, productPic }) => {
   const { id } = useParams();

   const [deletedProduct, setDeletesProduct] = useState(false);
   // const [product, setProduct] = useState('');

   const deleteHandler = () => {
      fetch(`${API_URL}/products/${id}`, { method: "DELETE" })
         .then(res => res.json())
         .then(productsData => setDeletesProduct(true))
   }

   return (
      <div className=''>
         {deletedProduct ? (
            <>
               <h1>Post was deleted</h1>
               <Link to='/products'>Go back to products list</Link><br />
            </>
         ) : (
            product && (
               <>
                  <img style={{ width: 100, height: 120 }} src={productPic} alt="" />
                  <h2>{productTitle}</h2>
                  <h2>{productPrice}</h2>
               </>
            )
         )}
         <button className='btn del' onClick={deleteHandler}>Delete</button>
      </div>
   )
}

export default DeleteProduct
