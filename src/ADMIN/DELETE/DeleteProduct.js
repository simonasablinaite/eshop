import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../config';
import EditProduct from '../EDIT/EditProduct';

const DeleteProduct = ({ productTitle, productPrice, productPic }) => {
   const { id } = useParams();

   const [deletedProduct, setDeletesProduct] = useState(false);
   const [product, setProduct] = useState(null);

   useEffect(() => {
      fetch(`${API_URL}/products`)
         .then(res => res.json())
         .then(data => setProduct(data))
   }, [id])

   const deleteHandler = () => {
      fetch(`${API_URL}/products/${id}`, {
         method: 'DELETE',
      })
         .then(res => res.json())
         .then(data => setDeletesProduct(true))
   }


   if (!product) {
      return '';
   }

   return (
      <div>
         {deletedProduct ? (
            <>
               <h1>Product was deleted</h1>
               {/* <Link to='/products'>Go back to products list</Link><br /> */}
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
         <EditProduct />
      </div>
   )
}

export default DeleteProduct
