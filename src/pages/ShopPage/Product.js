import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_URL } from '../../config';
import basketCart from '../../img/basket-cart-icon.png'

const Product = () => {

   const { id } = useParams();
   const [product, setProduct] = useState(null);

   useEffect(() => {
      fetch(`${API_URL}/products/${id}`)
         .then(res => res.json())
         .then(data => setProduct(data))
   }, [id])

   if (!product) {
      return '';
   }


   return (
      <div className='product-info'>
         <div className='product-description-wrapper'>
            <img style={{ width: '20%' }} src={product.photoURL} alt="flowers" />
            <h1>{product.title}</h1>
            <p className='product-description'>{product.body}</p>
         </div>

         <div className='product-ordered-wrapper'>
            <span className='product-price'>&euro; {product.price}</span>
            <Link to='/order-page'>
               <img style={{ width: 25, height: 25 }} src={basketCart} alt="basket cart" />
               Add to cart
            </Link>
         </div>

      </div>
   )
}

export default Product
