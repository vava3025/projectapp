import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cart, setCart] = useState(null);
    const userID = "userID_example"; // Replace with the actual user ID

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/cart/:userID`);
                setCart(response.data);
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };
        fetchCart();
    }, [userID]);

    // const handleAddItem = async (productID) => {
    //     try {
    //         const response = await axios.post(``, { userID, productID, quantity: 1 });
    //         setCart(response.data);
    //     } catch (error) {
    //         console.error('Error adding item to cart:', error);
    //     }
    // };

    // const handleUpdateQuantity = async (productID, newQuantity) => {
    //     try {
    //         const response = await axios.put(`/${userID}/${productID}`, { quantity: newQuantity });
    //         setCart(response.data);
    //     } catch (error) {
    //         console.error('Error updating item quantity:', error);
    //     }
    // };

    // const handleRemoveItem = async (productID) => {
    //     try {
    //         const response = await axios.delete(`/${userID}/${productID}`);
    //         setCart(response.data);
    //     } catch (error) {
    //         console.error('Error removing item from cart:', error);
    //     }
    // };

    if (!cart) return <p>Loading cart...</p>;

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.products && cart.products.length > 0 ? (
                cart.products.map((product, index) => (
                    <div key={index} className="product">
                        <h3>{product.productdetails?.name || "Unnamed Product"}</h3>
                        <p>Price: ${product.productdetails?.price || "N/A"}</p>
                        <p>Quantity: {product.quantity}</p>
                        <button onClick={() => handleUpdateQuantity(product.productID, product.quantity + 1)}>+</button>
                        <button onClick={() => handleUpdateQuantity(product.productID, product.quantity - 1)}>-</button>
                        <button onClick={() => handleRemoveItem(product.productID)}>Remove</button>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
