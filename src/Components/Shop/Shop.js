import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import "./Shop.css";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // Data Load Korte useEffect Use Hoy.
  // Object Ke For In Loop Marte Hoy.
  // FIlter Onekgular Jonne.
  // Find Nirdisto Ektar Jonne.
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exist = cart.find((product) => product.id === selectedProduct.id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
    // ...Cart Mane Existing Array Te Onno Ekta Element Copy Kore Add Kora
    // State Jekhane Eventhandler Sekhane.
  };
  const navigate = useNavigate();
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          {/* React Router Dynamic Navigation  */}
          <button onClick={() => navigate("/Orders")}>Review Orders</button>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
