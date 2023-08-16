import {
  ADD_PARAM,
  UPDATE_PARAM,
  DELETE_PARAM,
  DETAILS_PARAM,
} from "../constants";

import ParamsData from "../../data/ParamsData";

const INIT_STATE = {
  params: ParamsData,
  edit: false,
  show: false,
  currentParam: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_PARAM:
      const newRecord = {
        id: action.id,
        label: action.label,
        value: action.value,
        type: "IN",
      };
      const addParam = [...state.params, newRecord];
      return {
        ...state,
        params: addParam,
        edit: true,
        show: true,
        currentParam: newRecord,
      };

    case UPDATE_PARAM:
      const updateParam = state.params.map((param) =>
        param.id === action.id
          ? {
              ...param,
              label: action.label,
              value: action.value,
              type: action.typeObj,
            }
          : param
      );

      return {
        ...state,
        params: updateParam,
        edit: true,
        show: true,
        currentParam: {
          id: action.id,
          label: action.label,
          value: action.value,
          type: action.typeObj,
        },
      };

    case DELETE_PARAM:
      const filter = state.params.filter((param) => param.id !== action.id);
      return {
        ...state,
        params: filter,
        edit: false,
        show: false,
        currentParam: {},
      };

    case DETAILS_PARAM:
      return {
        ...state,
        edit: action.edit,
        show: action.show,
        currentParam: {
          id: action.param.id,
          label: action.param.label,
          value: action.param.value,
          type: action.param.type,
        },
      };

    default:
      return state;
  }
};
