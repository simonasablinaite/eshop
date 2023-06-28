import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../../config';

const DeleteProduct = () => {
   const { id } = useParams();

   const [deletedProduct, setDeletesProduct] = useState(false);

   const deleteHandler = () => {
      fetch(`${API_URL}/products/${id}`, { method: "DELETE" })
         .then(res => res.json())
         .then(productsData => setDeletesProduct(true))
   }

   return (
      <div>
         {deletedProduct ? (
            <>
               <h1>Post was deleted</h1>
               <Link to='/products'>Go back to products list</Link><br />
            </>
         ) : ('')}
         <button onClick={deleteHandler}>Delete</button>
      </div>
   )
}

export default DeleteProduct
