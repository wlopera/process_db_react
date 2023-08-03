import { UPDATE_FILTER } from "../constants";

const INIT_STATE = {
  host: "localhost",
  database: "site",
  user: "root",
  password: "",
};
export default (state = INIT_STATE, action) => {
  const { type, name, value } = action;

  switch (type) {
    case UPDATE_FILTER:
      return {
        ...state,
        [name]: value,
      };
    default:
      return state;
  }
};
