import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function EditPage({ products, onEditBooks }) {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
  });

  useEffect(() => {
    const product = products.find((product) => product.id === parseInt(productId, 10));
    if (product) {
      setFormData({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
        category: product.category,
      });
    }
  }, [products, productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    const updatedBooks = products.map((product) =>
      product.id === formData.id ? { ...formData } : product
    );

    onEditBooks(updatedBooks);
    navigate('/list');
  };

  return (
    <div className="edit-1">
      <h2>Edit Book</h2>
      <label> Title: </label>
      <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
      <br />
      <br />
     
      <label>Description: </label>
      <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
      <br/>
      <br/>

      <label>Price: </label>
      <input type='number' name='price' value={formData.price} onChange={handleInputChange}/>
      <br/>
      <br/>

      <label>Quantity: </label>
      <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} />
      <br/>
      <br/>

      <label>Category: </label>
      <input type="text" name="category" value={formData.category} onChange={handleInputChange} />
      <br/>
      <br/>
      <div className='group'>
      
      <button className="onee" onClick={handleEdit}>
        Save
      </button>
      <Link to="/list">
        <button className="onw"> Cancel </button>
      </Link>
      </div>
    </div>
  );
}

export default EditPage;
