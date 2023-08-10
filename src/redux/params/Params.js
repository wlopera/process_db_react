import { ADD_PARAM, UPDATE_PARAM, DELETE_PARAM } from "../constants";

const INIT_STATE = [
  {
    id: 1,
    label: "book_id",
    value: 30,
    type: "IN",
  },
  {
    id: 2,
    label: "result_book",
    value: '',
    type: "OUT",
  },
];

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_PARAM:
      return [
        ...state,
        {
          id: action.id,
          label: action.label,
          value: action.value,
          type: action.typeObj,
        },
      ];
      
      case UPDATE_PARAM:
      return state.map((param) =>
        param.id === action.id
          ? {
              ...param,
              label: action.label,
              value: action.value,
              type: action.typeObj,
            }
          : param
      );

    case DELETE_PARAM:
      return state.filter((param) => param.id !== action.id);

    default:
      return state;
  }
};
