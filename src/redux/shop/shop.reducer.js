import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
  collection: SHOP_DATA
};

export default function shopReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
