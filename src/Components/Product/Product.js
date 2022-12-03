import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Products = (props) => {
  const { name, seller, ratings, img, price } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} Star</small>
        </p>
      </div>
      {/* Props Hisebe Object & Function Duita Kei Pathano Jay.
      Props Hisebe Parameter Pathate Hole Annonymus Function Diye Wrap Korte Hoy. */}
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className="btn-style"
      >
        <p className="btn-cart-name">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Products;
