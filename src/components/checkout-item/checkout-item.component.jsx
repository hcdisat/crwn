import React from "react";
import { connect } from "react-redux";

import { removeItem, clearItem, addItem } from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Quantity,
  Arrow,
  ItemDetail,
  Value,
  RemoveButton
} from "./checkout-item.styles";

const CheckoutItem = ({ item, removeItem, clearItem, addItem }) => {
  const { imageUrl, name, quantity, price } = item;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <ItemDetail>{name}</ItemDetail>

      <ItemDetail>
        <Quantity>
          <Arrow onClick={() => removeItem(item)}>&#10094;</Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={() => addItem(item)}>&#10095;</Arrow>
        </Quantity>
      </ItemDetail>

      <ItemDetail>${price}</ItemDetail>
      <RemoveButton onClick={() => clearItem(item)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
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
