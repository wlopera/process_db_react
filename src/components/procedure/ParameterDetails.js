import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Input,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";
import { updateParam } from "../../redux/params/Action";

const ParameterDetails = ({typeDB}) => {
  const {
    edit,
    show,
    currentParam: param,
  } = useSelector((state) => state.paramsReducer);

  const dispatch = useDispatch();

  const handleUpdate = (event) => {
    const { name, value } = event.target;
    const payload = {
      ...param,
      [name]: value,
    };
    dispatch(updateParam(param.id, payload.label, payload.value, payload.type, typeDB));
  };

  const handleDropDown = (event) => {
    const payload = {
      ...param,
      type: event.target.name,
    };
    dispatch(updateParam(param.id, payload.label, payload.value, payload.type, typeDB));
  };

  return show ? (
    <Fragment>
      {param ? (
        <div className="">
          <div className="d-flex align-items-center px-4 border-bottom">
            <h4>Parámetro</h4>
          </div>
          <div className="details-table px-4">
            <Table responsive borderless size="sm" className="mt-4">
              <tbody>
                <tr className="d-flex">
                  <td className="col-3 font-bold">Nombre: </td>
                  <td className="col-9">
                    {edit ? (
                      <Input
                        type="text"
                        name="label"
                        id="label"
                        value={param.label}
                        onChange={(e) => handleUpdate(e)}
                      />
                    ) : (
                      ": " + param.label
                    )}
                  </td>
                </tr>
                <tr className="d-flex">
                  <td className="col-3 font-bold">Valor</td>
                  <td className="col-9">
                    {edit ? (
                      <Input
                        type="text"
                        name="value"
                        id="value"
                        value={param.value}
                        onChange={(e) => handleUpdate(e)}
                      />
                    ) : (
                      ": " + param.value
                    )}
                  </td>
                </tr>
                <tr className="d-flex">
                  <td className="col-3 font-bold">Tipo</td>
                  <td className="col-9">
                    {edit ? (
                      <UncontrolledDropdown>
                        <DropdownToggle color="success" size="sm" block>
                          {param.type}
                        </DropdownToggle>
                        <DropdownMenu onClick={(e) => handleDropDown(e)}>
                          <DropdownItem name="IN">IN</DropdownItem>
                          <DropdownItem name="OUT">OUT</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    ) : (
                      ": " + param.type
                    )}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <div className="d-flex h-100 p-4 flex-column align-items-center justify-content-center">
          <i className="far fa-address-card display-5"></i>
          <h4 className="mt-2">Selecciona el parámetro para ver detalles.</h4>
        </div>
      )}
    </Fragment>
  ) : null;
};

export default ParameterDetails;
