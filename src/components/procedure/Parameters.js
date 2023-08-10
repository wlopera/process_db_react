import React, { useState } from "react";
import { Table } from "reactstrap";
import Parameter from "./Parameter";
import { detailsParam, deleteParam, addParam } from "../../redux/params/Action";

import { useDispatch } from "react-redux";

const Parameters = ({ showRightPart, params }) => {
  const [active, setActive] = useState(0);

  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addParam());
    dispatch(detailsParam(false, false, {}));
    setActive(0);
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteParam(id));
    dispatch(detailsParam(false, false, {}));
  };

  const handleClick = (param) => {
    if (param.type === "") {
      dispatch(detailsParam(true, true, param));
    } else {
      dispatch(detailsParam(false, true, param));
    }
    setActive(param.id);
    showRightPart();
  };

  const handleEditClick = (param) => {
    console.log(123456, param)
    dispatch(detailsParam(true, true, param))
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
            {params.map((param) => (
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
