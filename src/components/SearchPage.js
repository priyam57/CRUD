import React, { useState,useEffect } from 'react';

function SearchPage({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(
    localStorage.getItem('showSearchResults') === 'true'
  );

  useEffect(() => {
    const storedSearchResults = JSON.parse(
      localStorage.getItem('searchResults')
    );
    if (storedSearchResults) {
      setSearchResults(storedSearchResults);
    }

    const storedSuggestedProducts = JSON.parse(
      localStorage.getItem('suggestedProducts')
    );
    if (storedSuggestedProducts) {
      setSuggestedProducts(storedSuggestedProducts);
    }
  }, []);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

   
    const filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    
    const uniqueTitles = Array.from(
      new Set(filteredProducts.map((product) => product.title))
    );

    setSuggestedProducts(uniqueTitles);
  };

  const handleSearchSubmit = () => {
    const selectedProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(selectedProducts);
    setShowSearchResults(true);
    setSearchTerm('')

    localStorage.setItem('searchResults', JSON.stringify(selectedProducts));
    localStorage.setItem('suggestedProducts', JSON.stringify(suggestedProducts));
    localStorage.setItem('showSearchResults', 'true');
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

      {suggestedProducts.length > 0 && !showSearchResults && (
        <div className='search-results'>
          <ul>
            {suggestedProducts.map((productTitle) => (
              <li
                key={productTitle}
                onClick={() => {
                  setSearchTerm(productTitle);
                  handleSearchSubmit();
                }}
              >
                {productTitle}
              </li>
            ))}
          </ul>
        </div>
      )}

      {showSearchResults && (
        <div className='full-data'>
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
