import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Input } from "reactstrap";
import { updateParam, detailsParam } from "../../redux/params/Action";

const ParameterDetails = () => {
  const { edit, show, param } = useSelector(
    (state) => state.paramsReducer.paramDetails
  );

  const dispatch = useDispatch();

  const handleUpdate = (event) => {
    const { name, value } = event.target;
    const payload = {
      ...param,
      [name]: value,
    };
    console.log(44444, payload);
    dispatch(updateParam(param.id, payload.label, payload.value, payload.type));
    dispatch(detailsParam(true, true, payload));
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
                      <Input
                        type="text"
                        name="type"
                        id="type"
                        value={param.type}
                        onChange={(e) => handleUpdate(e)}
                      />
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
