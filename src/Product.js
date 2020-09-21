import React from "react";
import "./Product.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating) /*Creating an empty Array to store stars */
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>
        <span>Add to Basket</span>
        <span className="product__btn_icon">
          <ShoppingCartIcon />
        </span>
      </button>
    </div>
  );
}

export default Product;
