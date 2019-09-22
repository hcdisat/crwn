import React from "react";
import { connect } from "react-redux";

import { removeItem, clearItem, addItem } from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item, removeItem, clearItem, addItem }) => {
  const { imageUrl, name, quantity, price } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>

      <span className="price">${price}</span>
      <div onClick={() => clearItem(item)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  clearItem: item => dispatch(clearItem(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
