import Sections from "./directory.data";

const INITIAL_STATE = {
  sections: Sections
};

export default function directoryReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
