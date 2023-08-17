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
  const dataParams = state.params;
  switch (action.type) {
    case ADD_PARAM:
      const newRecord = {
        id: action.id,
        label: action.label,
        value: action.value,
        type: action.typeObj,
      };

      dataParams[action.db].push(newRecord);

      return {
        ...state,
        params: dataParams,
        edit: true,
        show: true,
        currentParam: newRecord,
      };

    case UPDATE_PARAM:
      // Buscar el índice del registro a actualizar en el arreglo
      const indexToUpdate = dataParams[action.db].findIndex(
        (item) => item.id === action.id
      );

      const updateData = {
        id: action.id,
        label: action.label,
        value: action.value,
        type: action.typeObj,
      };

      if (indexToUpdate !== -1) {
        // Actualizar el registro en el arreglo "mysql"
        dataParams[action.db][indexToUpdate] = updateData;
      }

      return {
        ...state,
        params: dataParams,
        edit: true,
        show: true,
        currentParam: updateData,
      };

    case DELETE_PARAM:
      // Filtrar los registros excluyendo el registro a borrar
      dataParams[action.db] = dataParams[action.db].filter(
        (item) => item.id !== recordToDeleteId
      );

      return {
        ...data,
        params: dataParams,
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
          db: action.db,
        },
      };

    default:
      return state;
  }
};
