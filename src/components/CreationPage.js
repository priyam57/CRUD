import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreationPage({ onCreateProduct }) {
  const naviGate = useNavigate()
  const [product, setProduct] = useState({
    id:new Date().getUTCMilliseconds(),
    title: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'price' && parseFloat(value) <= 0) {
      return; 
    }
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleCreateProduct = (e) => {
    e.preventDefault(); 
    onCreateProduct(product);
    setProduct({
      id:'',
      title: '',
      description: '',
      price: '',
      quantity: '',
      category: '',
    });
     naviGate("/list")
  };

  const categoryOptions = [
    'Electronics',
    'Clothing',
    'Books',
    'Home & Kitchen',
    'Toys',
    'Other',
    'food-items'
  ];

  return (
    <>
    
    <div className='xlx'>
    <h2 className='createw'>Create Product</h2>
     
      <form className='list' onSubmit={handleCreateProduct}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleInputChange}
        /> <br/><br/>

        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleInputChange}
        /> <br/><br/>

        <label>Price: </label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        /> <br/><br/>

        <label>Quantity: </label>
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleInputChange}
        /> <br/><br/>

        <label>Category: </label>
        <select
          name="category"
          value={product.category}
          onChange={handleInputChange}
        >
          <option value=""></option>
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select> <br/><br/>

        <button className='button' type='submit'>Create Product</button>
      </form>
    </div>
    </>
  );
}

export default CreationPage;
