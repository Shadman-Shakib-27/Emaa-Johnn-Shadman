import React from "react";
import "./Cart.css";

const Orders = (props) => {
  const { cart } = props;
  // console.log(cart);
  // const {cart}=props
  // Direct {Cart} Ke Props Hisebe Receive Korteche
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping} </p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
      {props.children}
      {/* Children Props Er Maddhome */}
    </div>
  );
};

export default Orders;
