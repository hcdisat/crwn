import ActionsIndex from "../actions-index";
import { addItemUtil } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionsIndex.cart.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ActionsIndex.cart.ADD_ITEM:
      return {
        ...state,
        // cartItems: [...state.cartItems, action.payload],
        cartItems: addItemUtil(state.cartItems, action.payload)
      };
    default:
      return state;
  }
}
