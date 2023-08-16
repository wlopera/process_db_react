import { UPDATE_FILTER } from "../constants";

import DriversData from "../../data/DriversData";

const INIT_STATE = DriversData;

export default (state = DriversData, action) => {
  const { type, name, value, db } = action;

  switch (type) {
    case UPDATE_FILTER:
      let updateDriver = state[db];
      updateDriver[name] = value;
      return {
        ...state,
        updateDriver,
      };
    default:
      return state;
  }
};
