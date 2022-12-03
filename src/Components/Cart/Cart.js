import React from "react";

const Orders = ({ cart }) => {
  return (
    <div>
      <h3> Order Summary</h3>
      <p>Selected Items: {cart.length}</p>
    </div>
  );
};

export default Orders;
