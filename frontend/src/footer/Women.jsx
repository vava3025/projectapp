import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Women.css';

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Women');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1); // New state for quantity
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const fetchProductsByCategory = async (category) => {
    try {
      const res = await axios.get(`http://localhost:3000/products/category/women`);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProductsByCategory(selectedCategory);
  }, [selectedCategory]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setSelectedSize('');
    setQuantity(1); // Reset quantity when opening modal
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setSelectedSize('');
    setQuantity(1); // Reset quantity when closing modal
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const value = Math.max(1, parseInt(event.target.value) || 1); // Ensure quantity is at least 1
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (selectedSize && selectedProduct) {
      const existingProductIndex = cart.findIndex(
        (item) => item.productID === selectedProduct._id && item.size === selectedSize
      );

      let updatedCart;
      if (existingProductIndex > -1) {
        updatedCart = [...cart];
        updatedCart[existingProductIndex].quantity += quantity;
      } else {
        updatedCart = [
          ...cart,
          {
            productID: selectedProduct._id,
            name: selectedProduct.name,
            size: selectedSize,
            price: selectedProduct.price,
            quantity,
          },
        ];
      }
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      navigate('/cart');
      closeModal();
    } else {
      alert("Please select a size before adding to cart.");
    }
  };

  const handleBuyNow = () => {
    if (selectedSize && selectedProduct) {
      alert(`Proceeding to checkout with ${selectedProduct.name} (Size: ${selectedSize}, Quantity: ${quantity})`);
    } else {
      alert("Please select a size before proceeding.");
    }
  };

  return (
    <div className="products-container">
      <header className="category-header">
        <h2>{selectedCategory} Collection</h2>
        <span>Showing {products.length} products</span>
      </header>

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="product-card" onClick={() => openModal(product)}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">
                {product.price} <span className="original-price">{product.originalPrice}</span>
              </p>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
     <div classname="full-container">
      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
            <p>Original Price: <span className="original-price">${selectedProduct.originalPrice}</span></p>
            <p>Stock: {selectedProduct.stock}</p>

            {/* Size Selection */}
            {selectedProduct && selectedProduct.size && Array.isArray(selectedProduct.size) && (
              <div className="size-selection">
                <label htmlFor="size">Select Size: </label>
                <select id="size" value={selectedSize} onChange={handleSizeChange}>
                  <option value="">-- Select Size --</option>
                  {selectedProduct.size.map((size, index) => (
                    <option key={index} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Quantity Selection */}
            <div className="quantity-selection">
              <label htmlFor="quantity">Quantity: </label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>

            {/* Buy Now and Add to Cart buttons */}
            <div className="modal-buttons">
              <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
              <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default ProductsSection;






