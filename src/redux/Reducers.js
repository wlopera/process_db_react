import { combineReducers } from "redux";
import settings from "./settings/Reducer";
import databaseReducer from "./database/Reducer";

const Reducers = combineReducers({
  settings,
  databaseReducer
});

export default Reducers;
