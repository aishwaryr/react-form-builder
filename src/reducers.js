import { combineReducers } from "redux";
import { SET_FORM_DATA } from "./actions";

const formData = (state = [], action) => {
  console.log(state);
  console.log(action);
  if (action.type === SET_FORM_DATA) {
    return action.payload;
  }
  return state;
};

// since we are using combine reducers now - every reducer below now is only concerned with a pice of app state. no need to copy and return new state. just return the new

const rootReducer = combineReducers({
  formData
});

export default rootReducer;
