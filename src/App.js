import { Routes, Route, NavLink } from 'react-router-dom';
import Products from './pages/ShopPage/Products';

import HomePage from './pages/HomePage/HomePage';
import Product from './pages/ShopPage/Product';
import OrderPage from './pages/ShopPage/OrderPage';
import logo from './img/logo-2.png'

function App() {
  return (

    <div className="container">
      <header className='header'>
        <div className='nav-container'>
          <nav className='navigation'>
            <NavLink className='nav-item' to='/'>Home Page</NavLink>
          </nav>

          <div className='logo-wrapper'>
            <img src={logo} alt="logo" />
            <p className='logo-title'>Lillepood</p>
            <span className='logo-description'>.2023.</span>
          </div>

          <nav className='navigation'>
            <NavLink className='nav-item' to='/products'>Shop</NavLink>
            <NavLink className='nav-item' to='/order'>Order</NavLink>
          </nav>
        </div>
      </header >

      <Routes>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<Product />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/order' element={<OrderPage />} />
      </Routes>
    </div>
  );

}

export default App;
