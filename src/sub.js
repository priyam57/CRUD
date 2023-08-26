import React, { useState } from 'react';

function SearchPage({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    const filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProducts);
    setSearchTerm('')
  };

  return (
    <div className='search-container'>
        <div className='handle'>
      <input
        type='text'
        className='search-input'
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <button className='search-button' onClick={handleSearchSubmit}>
        Search
      </button>

      </div>
      
      {searchResults.length > 0 && (
        <div className='search-results'>
          <h3>Search Results</h3>
          <table className='search-table'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default SearchPage;