import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';
import basketCart from '../../img/basket-cart-icon.png'


const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className='shop-list'>
      <ul className='product-card'>
        {products.map(product => <li key={product.id}>

          <Link to='/product/:id'>

            <img style={{ width: 150, height: 180 }} src={product.photoURL} alt="flower" />
            <h2 className='product-title'>{product.title}</h2>
            <p className='product-description'>{product.body}</p>

            <div className='purchase'>
              <div className='price'>
                <span>{product.price}</span>
              </div>
              <div className='ordered'>
                <img style={{ width: 25, height: 25 }} src={basketCart} alt="basket-cart" />
                <Link to='/ordered'>Add to cart</Link>
              </div>
            </div>
          </Link></li>
        )}

      </ul>
    </div>
  )
}

export default Products

// issitraukiu tik pavadinima, taciau sukurusi visa koerteles stiliu, patalpinsiu visa informacija:
// product.body
// product.price