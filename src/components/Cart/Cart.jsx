import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: {tax}</p>
      <h5>Grnad Total: </h5>
    </div>
  );
};

export default Cart;
