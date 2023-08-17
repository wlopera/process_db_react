import React, { useState } from "react";
import { Table } from "reactstrap";
import Parameter from "./Parameter";
import { detailsParam, deleteParam, addParam } from "../../redux/params/Action";

import { useDispatch, useSelector } from "react-redux";

const Parameters = ({ showRightPart, typeDB }) => {
  const [active, setActive] = useState(0);

  const data = useSelector((state) => state.paramsReducer);

  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addParam("", "", "IN", typeDB));
    setActive(0);
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteParam(id, typeDB));
  };

  const handleClick = (param) => {
    if (param.type === "") {
      dispatch(detailsParam(true, true, param, typeDB));
    } else {
      dispatch(detailsParam(false, true, param, typeDB));
    }
    setActive(param.id);
    showRightPart();
  };

  const handleEditClick = (param) => {
    dispatch(detailsParam(true, true, param, typeDB));
    setActive(param.id);
    showRightPart();
  };

  return (
    <div>
      <div className="p-3">
        <span
          onClick={() => handleAddClick()}
          className="btn btn-success d-block text-white"
        >
          Nuevo Parámetro
        </span>
      </div>

      <div className="table-responsive listing-over">
        <Table className="table listing-table no-wrap table-hover v-middle mb-0">
          <tbody>
            {data.params[typeDB].map((param) => (
              <Parameter
                key={param.id}
                active={active}
                {...param}
                onEditClick={() => handleEditClick(param)}
                onDeleteClick={() => handleDeleteClick(param.id)}
                onParamClick={() => handleClick(param)}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Parameters;
