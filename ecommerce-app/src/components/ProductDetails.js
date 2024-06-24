import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = ({ addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-details">
            <img src={product.image} alt={product.title} />
            <div>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;
