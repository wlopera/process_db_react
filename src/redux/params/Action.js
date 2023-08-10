import { v4 as uuidv4 } from "uuid";

import {
  ADD_PARAM,
  UPDATE_PARAM,
  DETAILS_PARAM,
  DELETE_PARAM,
} from "../constants/";

export const addParam = (label, value, typeObj) => ({
  type: ADD_PARAM,
  id: uuidv4(),
  label: label ? label : "",
  value: value ? value : "",
  typeObj: typeObj ? typeObj : "",
});

export const updateParam = (id, label, value, typeObj) => ({
  type: UPDATE_PARAM,
  id: id,
  label: label,
  value: value,
  typeObj: typeObj,
});

export const detailsParam = (edit, show, param) => ({
  type: DETAILS_PARAM,
  edit,
  show,
  param,
});

export const deleteParam = (id) => ({
  type: DELETE_PARAM,
  id,
});
