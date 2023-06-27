import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../config';
import basketCart from '../../img/basket-cart-icon.png'

const Product = () => {

   const { id } = useParams();
   const [product, setProduct] = useState(null);
   const [count, setCount] = useState(0);
   const [sum, setSum] = useState(0)



   useEffect(() => {
      fetch(`${API_URL}/products/${id}`)
         .then(res => res.json())
         .then(data => setProduct(data))
   }, [id])

   if (!product) {
      return '';
   }

   const counterHandler = (price) => {
      setCount(count + 1);
      setSum((count + 1) * price)
   }


   return (
      <div className='product-info'>
         <div className='product-description-wrapper'>
            <img className='product-img' src={product.photoURL} alt="flowers" />
            <h1>{product.title}</h1>
            <p className='product-description'>{product.body}</p>
         </div>

         <div className='product-ordered-wrapper'>
            <span className='product-price'>&euro; {product.price}</span>
            {/* <Link onClick={counterHandler} to='/order'> */}

            <button className='btn' onClick={() => counterHandler(product.price)}>
               <img style={{ width: 25, height: 25 }} src={basketCart} alt="basket cart" />
               Add to cart
               <span className='counter'>{count}</span>

            </button>

            <span className='sum'>Total sum: {sum} &euro;</span>

            {/* </Link> */}
         </div>

      </div>
   )
}

export default Product
