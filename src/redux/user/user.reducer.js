import ActionsIndex from "../actions-index";

const INITIAL_STATE = {
  currentUser: null
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionsIndex.user.SET_CURRENT_USER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
