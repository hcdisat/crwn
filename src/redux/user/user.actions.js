import ActionsIndex from "../actions-index";

export const setCurrentUser = user => ({
  type: ActionsIndex.user.SET_CURRENT_USER,
  payload: user
});
