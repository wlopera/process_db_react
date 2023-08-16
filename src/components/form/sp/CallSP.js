import React, { useState } from "react";
import ReactTable from "react-table";
import { Row, Button, Alert, Card, CardBody, CardTitle, Col } from "reactstrap";
import { useSelector } from "react-redux";

import service from "../../../services/database.service";

import "react-table/react-table.css";
import "./CallSP.css";
import InputDB from "../../input/InputDB";

const CallSP = ({ typeDB }) => {
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [procedure, setProcedure] = useState("");

  const { host, database, user, password } = useSelector(
    (state) => state.databaseReducer
  )[typeDB];

  const params = useSelector((state) => state.paramsReducer.params);

  const handleCallSP = async (event) => {
    event.preventDefault();
    setShowError(false);
    setData([]);

    const payload = {
      host,
      database,
      user,
      password,
      procedure: procedure,
      params: params.map((param) => ({
        key: param.label,
        value: param.value,
        type: param.type,
      })),
      typeDB,
    };

    if (validateDriver()) {
      setShowError(true);
      setMessage({
        type: "ERROR",
        title: "Error Conexión DB",
        text: "Validar datos de conexión a la DB y el query de consulta.",
      });
    } else {
      const response = await service.getSP(payload);
      // console.log(12345, response)
      if (response.code === 200) {
        const columns = response.columns.map((item) => ({
          Header: item.value,
          accessor: item.key,
        }));
        setColumns(columns);
        setData(response.data);
      } else {
        setMessage(response.alert);
        setShowError(true);
      }
    }
  };

  const validateDriver = () => {
    if (host.trim().length === 0) {
      return true;
    }
    if (database.trim().length === 0) {
      return true;
    }
    if (user.trim().length === 0) {
      return true;
    }
    // if (password.trim().length === 0) {
    //   return true;
    // }
    return false;
  };

  return (
    <>
      <Row>
        <Col md="8">
          <table className="table_table">
            <thead className="table_thead">
              <tr>
                <th className="table_th">Parámetro</th>
                <th className="table_th">Valor</th>
                <th className="table_th">Tipo</th>
              </tr>
            </thead>
            <tbody className="table_tbody">
              {params.map((param) => (
                <tr key={param.id}>
                  <td className="table_td_left">{param.label}</td>
                  <td className="table_td">{param.value}</td>
                  <td className="table_td">{param.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
        <Col md="4">
          <Row>
            <Row>
              <InputDB
                colMain="12"
                colLabel="1"
                colComponent="11"
                icon="ti-menu-alt"
                label="SP:"
                name="procedure"
                value={procedure}
                change={(e) => setProcedure(e.target.value)}
              />
            </Row>
            <Row>
              <Button
                type="button"
                className="btn btn-success"
                onClick={handleCallSP}
              >
                <i className="fa fa-check"></i> Enviar
              </Button>
            </Row>
          </Row>
        </Col>
      </Row>
      <Row>
        {showError && (
          <Alert color="danger">
            <h4 className="alert-heading">{message.title}</h4>
            <hr />
            <ul>
              {Object.keys(message.text).map((item) => (
                <li className="mb-0">
                  {item}: {message.text[item]}
                </li>
              ))}
            </ul>
          </Alert>
        )}

        {data && data.length > 0 && (
          <Card>
            <CardTitle className="mb-0 p-3 border-bottom bg-light">
              <i className="mdi mdi-border-right mr-2"></i>Resultados de la
              consulta
            </CardTitle>
            <CardBody>
              <ReactTable
                columns={columns}
                defaultPageSize={5}
                showPaginationBottom={true}
                className="-striped -highlight"
                data={data}
                filterable
              />
            </CardBody>
          </Card>
        )}
      </Row>
    </>
  );
};

export default CallSP;
