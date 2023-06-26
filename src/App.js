import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Products from './CRUD/POST/Products';


function App() {
  return (
    <>
      <div className="App">
        <header>
          <nav className='navigation'>
            <NavLink className='nav-item' to='json/products'>Shop</NavLink>
          </nav>
        </header>

        <Routes>

          <Route path='/json/products' element={<Products />}></Route>

        </Routes>

      </div>
    </>
  );
}

export default App;
