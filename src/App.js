import React, { useState,useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreationPage  from './components/CreationPage.js';
import SortingPage from './components/SortingPage.js';
import SearchPage from './components/SearchPage.js';
import EditPage from './components/EditPage.js';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import LoginPage from './components/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  const [text] = useTypewriter({
    words: ['Ecommerce','page','CRUD'],
    loop:{},
    typeSpeed:180,
    deleteSpeed:80
  })

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleCreateProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleDeleteBook = (index) => {
    const newBooks = [...products];
    newBooks.splice(index, 1);
    setProducts(newBooks);
    localStorage.setItem('products', JSON.stringify(newBooks));
  };

  const handleDeleteAllBooks = () => {
    setProducts([]);
    localStorage.setItem('products', JSON.stringify([]));
  };

  const handleEditBook = (updatedBooks) => {
    setProducts(updatedBooks);
    localStorage.setItem('products', JSON.stringify(updatedBooks));
  };

  useEffect(() => {
    const storedIsLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;
    setIsLoggedIn(storedIsLoggedIn);
  }, []);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
     <div>
    <Router>
      <div className='home'>
      {isLoggedIn ? (
         <>
        <nav className='nav'> 
           <ul>
              <li><Link to='/create'><button className='clx'>Create product</button></Link></li>
              <li><Link to='/list'><button className='clx'>Product List</button></Link></li>
              <li><Link to='/search'><button className='clx'>Product Search</button></Link></li>
          </ul>
        </nav>


        <Routes>
          <Route exact path="/" element={ <div className='title-page'> <h1>Ecommerce</h1>
          <div className='image-container'>
             <h2 className='title-text' style= {{margin:'50px'}}>
               Welcome To 
               <span style={{fontWeight:'bold',fontSize:'55px', color:'red',margin:'20px'}}>{text}</span>
               <Cursor/>
            </h2>
          </div>
           </div> } >               
           </Route>
          <Route exact path="/create" element={ <CreationPage onCreateProduct={handleCreateProduct} />}></Route> 
          <Route exact path="/list" element={<SortingPage products={products} onDeleteBook={handleDeleteBook} 
          onDeleteAllBooks={handleDeleteAllBooks} onEditBook={handleEditBook}/>}></Route>
          <Route exact path="/search" element={<SearchPage products={products}/>}></Route>
          <Route exact path="/edit/:productId" element={<EditPage products={products} onEditBooks={handleEditBook}/>}> </Route>
        </Routes>
        </>
      ) : (
        <Routes>
        <Route exact path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      )}
      </div>
    </Router>
    </div>
  );
}

export default App;
