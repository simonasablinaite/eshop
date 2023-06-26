import { Routes, Route, NavLink } from 'react-router-dom';
import Products from './pages/ShopPage/Products';

import HomePage from './pages/HomePage/HomePage';
import Product from './pages/ShopPage/Product';

function App() {
  return (
    <>
      <div className="App">
        <header>
          <nav className='navigation'>
            <NavLink className='nav-item' to='/'>Home Page</NavLink>
            <NavLink className='nav-item' to='/products'>Shop</NavLink>
          </nav>

          <div className='logo-wrapper'>
            <img src="" alt="" />
          </div>

          <nav>
            <NavLink className='nav-item' to='/products'>Shop</NavLink>

          </nav>
        </header>

        <Routes>

          <Route path='/products' element={<Products />}></Route>
          <Route path='/products/:id' element={<Product />} />
          <Route path='/' element={<HomePage />} />

        </Routes>

      </div>
    </>
  );
}

export default App;
