import React from "react";
import {
  CartItemContainer,
  Image,
  Details,
  Name,
  Price
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <Image src={imageUrl} alt={name} />
    <Details>
      <Name>{name}</Name>
      <Price>
        {quantity} x ${price}
      </Price>
    </Details>
  </CartItemContainer>
);

export default CartItem;
