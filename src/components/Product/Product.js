import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { name, img, seller, price, ratings } = product;



    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='details'>
                <h5 className='product-name'>{name}</h5>
                <p><strong>Price: </strong>{price}</p>
                <p><strong>Seller: </strong>{seller}</p>
                <p><strong>Rating: </strong>{ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;