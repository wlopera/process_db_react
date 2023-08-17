import { v4 as uuidv4 } from "uuid";

import {
  ADD_PARAM,
  UPDATE_PARAM,
  DETAILS_PARAM,
  DELETE_PARAM,
} from "../constants/";

export const addParam = (label, value, typeObj, db) => ({
  type: ADD_PARAM,
  id: uuidv4(),
  label: label ? label : "",
  value: value ? value : "",
  typeObj: typeObj ? typeObj : "IN",
  db
});

export const updateParam = (id, label, value, typeObj, db) => ({
  type: UPDATE_PARAM,
  id: id,
  label: label,
  value: value,
  typeObj: typeObj,
  db
});

export const detailsParam = (edit, show, param, db) => ({
  type: DETAILS_PARAM,
  edit,
  show,
  param,
  db
});

export const deleteParam = (id, db) => ({
  type: DELETE_PARAM,
  id,
  db
});
