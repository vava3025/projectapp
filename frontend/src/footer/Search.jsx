import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  useEffect(() => {
    const fetchProducts = async () => {
      if (query) {
        try {
          // Adjusted URL for the search endpoint
          const response = await axios.get(`http://localhost:3000/searchs/search`);
          setProducts(response.data); 
        } catch (err) {
          console.error('Error fetching products:', err);
        } finally {
          setLoading(false); 
        }
      }
    };

    fetchProducts(); 
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            ))
          ) : (
            <p>No products found for "{query}"</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
