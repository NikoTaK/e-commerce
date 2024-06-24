import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
