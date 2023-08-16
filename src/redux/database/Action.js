import { UPDATE_FILTER } from "../constants";

export const updateFilter = ({name, value, db}) => {
  return {
    type: UPDATE_FILTER,
    name,
    value, 
    db
  };
};