import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SortingPage({ products, onDeleteBook, onDeleteAllBooks}) {
  const [sortBy, setSortBy] = useState('');
  

  const handleSortChange = (event) => {
    event.preventDefault(); 
    console.log('Sorting changed:', event.target.value);
    setSortBy(event.target.value);
  };



  const getSortedProducts = () => {
    if (sortBy === 'price') {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'quantity') {
      return [...products].sort((a, b) => a.quantity - b.quantity);
    }
    return products;
  };

  const sortedProducts = getSortedProducts();

  return (
    <>
      <h2 className='product'>Product List</h2>
      <div className='sorting-page'>
        <label>Sort By: </label>
        <select value={sortBy} onChange={handleSortChange} className='select'>
          <option value=""></option>
          <option value="price">Price</option>
          <option value="quantity">Quantity</option>
        </select>
      </div>
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Actions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product,index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.category}</td>
                <td>
                <button className='try' onClick={() => onDeleteBook(index)}>Delete</button>
                </td>
                <td>
                <Link to={`/edit/${product.id}`}><button className='edit'>Edit</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='btn' onClick={onDeleteAllBooks}>Delete All</button>
      </div>
    </>
  );
}

export default SortingPage;
