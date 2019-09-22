import ActionsIndex from "../actions-index";

export const toggleCartHidden = () => ({
  type: ActionsIndex.cart.TOGGLE_CART_VISIBILITY
});

export const addItem = item => ({
  type: ActionsIndex.cart.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: ActionsIndex.cart.REMOVE_ITEM,
  payload: item
});

export const clearItem = item => ({
  type: ActionsIndex.cart.CLEAR_ITEM,
  payload: item
});
