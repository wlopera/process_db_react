import { DETAILS_PARAM } from "../constants";

const initialState = {
  edit: false,
  show: false,
  param: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DETAILS_PARAM:
      return {
        edit: action.edit,
        show: action.show,
        param: {
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
