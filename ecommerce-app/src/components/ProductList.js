import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
