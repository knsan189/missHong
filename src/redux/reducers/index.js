import FestivalReducer from "./festival";
import SnackbarReducer from "./snackbar";

const { HYDRATE } = require("next-redux-wrapper");
const { combineReducers } = require("redux");

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        festivals: FestivalReducer,
        snackbar: SnackbarReducer,
      });
      return combineReducer(state, action);
    }
  }
};
export default rootReducer;
