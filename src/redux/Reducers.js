import { combineReducers } from "redux";
import settings from "./settings/Reducer";
import databaseReducer from "./database/Reducer";
import paramsReducer from './params/Reducer'

const Reducers = combineReducers({
  settings,
  databaseReducer,
  paramsReducer
});

export default Reducers;
