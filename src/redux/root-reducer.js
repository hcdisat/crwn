import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// const allReducers = [{ name: "user"}];
// const reducers = allReducers.map(reducer => resolverReducer.resolve(reducer.name));
// export default combineReducers(reducers);

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
