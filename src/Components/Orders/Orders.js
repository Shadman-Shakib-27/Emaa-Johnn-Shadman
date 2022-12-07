import React from "react";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";
import { Link, useNavigate } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  // Navigate Part
  const navigate = useNavigate();
  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={() => navigate("/Inventory")}>
            Proceed Checkout
          </button>
          {/* Children Props Part */}
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
