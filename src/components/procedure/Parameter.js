import React from "react";

const Parameter = ({
  onParamClick,
  onEditClick,
  onDeleteClick,
  id,
  label,
  value,
  type,
  active,
}) => {

  return (
    <tr>
      <td onClick={onParamClick} className={active === id ? "bg-light-info" : ""}>
        <p className="mb-0 text-truncate">
          <strong>{label} </strong>
          {value ? `: ${value}` : null}
        </p>
        <p className="mb-0 text-muted">{type}</p>
      </td>
      <td className={active === id ? "bg-light-info" : ""} style={{ width: 70 + "px" }}>
        <i
          onClick={onEditClick}
          className="fas fa-edit"          
        ></i>
        <i onClick={onDeleteClick} className="fas fa-trash-alt ml-3"></i>
      </td>
    </tr>
  );
};

export default Parameter;
