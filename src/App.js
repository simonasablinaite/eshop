import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Products from './CRUD/POST/Products';
import Product from './CRUD/POST/Product';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <div className="App">
        <header>
          <nav className='navigation'>
            <NavLink className='nav-item' to='/'>Home Page</NavLink>
            <NavLink className='nav-item' to='json/products'>Shop</NavLink>
          </nav>

          <img src="" alt="" />

          <nav>
            <NavLink className='nav-item' to='json/products'>Shop</NavLink>

          </nav>
        </header>

        <Routes>

          <Route path='/json/products' element={<Products />}></Route>
          <Route path='/product/:id' element={<Product />}></Route>
          <Route path='/' element={<HomePage />} />

        </Routes>

      </div>
    </>
  );
}

export default App;
