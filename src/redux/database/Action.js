import { UPDATE_FILTER } from "../constants";

export const updateFilter = ({name, value}) => {
  return {
    type: UPDATE_FILTER,
    name,
    value
  };
};