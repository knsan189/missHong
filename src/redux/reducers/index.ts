import { RootStateInterface } from "./../../@types/redux/rootState.d";
import { AnyAction, Reducer } from "redux";
import FestivalReducer from "./festival";
import SnackbarReducer from "./snackbar";
import UserReducer from "./user";

const { HYDRATE } = require("next-redux-wrapper");
const { combineReducers } = require("redux");

const rootReducer: Reducer<RootStateInterface, AnyAction> = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        festivals: FestivalReducer,
        snackbar: SnackbarReducer,
        user: UserReducer,
      });
      return combineReducer(state, action);
    }
  }
};
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
