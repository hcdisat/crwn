import ActionsIndex from "../actions-index";

export const toggleCartHidden = () => ({
  type: ActionsIndex.cart.TOGGLE_CART_VISIBILITY
});

export const addItem = item => ({
  type: ActionsIndex.cart.ADD_ITEM,
  payload: item
});
