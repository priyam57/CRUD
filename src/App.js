import React, { useState,useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreationPage  from './components/CreationPage.js';
import SortingPage from './components/SortingPage.js';
import SearchPage from './components/SearchPage.js';
import EditPage from './components/EditPage.js';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar1';
import Register from './components/Register';
import Navbar2 from './components/Navbar2';
import {useTypewriter, Cursor} from 'react-simple-typewriter';

function App() {

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

  const[log,setLog] = useState()
  function setter(x){
    setLog(x)
  }
  
  return (
     <div>
    <Router>
      {log ? <> <Navbar2 logout={setter}/>
      <Routes>
          <Route exact path="/create" element={<div className='flop'> <CreationPage onCreateProduct={handleCreateProduct} /></div>}></Route> 
          <Route exact path="/list" element={<SortingPage products={products} onDeleteBook={handleDeleteBook} 
          onDeleteAllBooks={handleDeleteAllBooks} onEditBook={handleEditBook}/>}></Route>
          <Route exact path="/search" element={<SearchPage products={products}/>}></Route>
          <Route exact path="/edit/:productId" element={<EditPage products={products} onEditBooks={handleEditBook}/>}> </Route>
        </Routes> 
       
        </>:<>
        <Navbar/>
        
        <Routes>
      <Route exact path='/' element={ <div className='title-page'> 
       <div className='image-container'>
          <h2 className='title-text' style= {{margin:'50px'}}>
            Welcome To 
            <span style={{fontWeight:'bold',fontSize:'55px', color:'red',margin:'20px'}}>{text}</span>
            <Cursor/>
         </h2>
       </div>
        </div> }></Route>
        </Routes>
  
    
        <Routes>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path="/login" element={<LoginPage setIsLoggedIn={setter} />} />
        </Routes></>}
    
    </Router>
    </div>
  );
}

export default App;
