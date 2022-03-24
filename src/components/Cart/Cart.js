import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const taxTxt = (total * 0.1).toFixed(3);
    const tax = parseFloat(taxTxt);

    const grandTotal = tax + shipping + total;

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p><strong>Selected Items: </strong>{quantity}</p>
            <p><strong>Total Price: </strong> <span className='doller'>$</span>{ total }</p>
            <p><strong>Total shipping: </strong> <span className='doller'>$</span> { shipping } </p>
            <p><strong>Tax: </strong>{tax}</p>
            <p><span className='grand'>Grand Total: </span> <span className='grand-total'><span className='doller'>$</span>{grandTotal}</span></p>
        </div>
    );
};

export default Cart;