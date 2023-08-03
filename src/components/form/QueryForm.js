import React, { useState } from "react";
import ReactTable from "react-table";
import { Row, Button, Alert, Card, CardBody, CardTitle, Col } from "reactstrap";

import InputDB from "../input/InputDB";
import { useSelector } from "react-redux";
import service from "../../services/database.service";

import "react-table/react-table.css";

const QueryForm = () => {
  const [query, setQuery] = useState("SELECT * FROM libros");
  const [showError, setShowError] = useState(false);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  const { host, database, user, password } = useSelector(
    (state) => state.databaseReducer
  );

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleSend = async (event) => {
    event.preventDefault();
    if (validateDriver()) {
      setShowError(true);
    } else {
      const response = await service.getQuery({
        host,
        database,
        user,
        password,
        query,
      });
      console.log(55555, response);
      const columns = response.columns.map((item) => ({
        Header: item.value,
        accessor: item.key,
      }));
      setColumns(columns);
      setData(response.data);
    }
  };

  console.log(12345, data, columns);

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
        <InputDB
          colMain="10"
          colLabel="1"
          colComponent="11"
          icon="ti-menu-alt"
          label="Query"
          name="query"
          value={query}
          change={handleQuery}
        />
        <Col md="2">
          <Button
            type="button"
            className="btn btn-success"
            onClick={handleSend}
          >
            <i className="fa fa-check"></i> Enviar
          </Button>
        </Col>
      </Row>
      <Row>
        {showError && (
          <Alert color="danger">
            Validar datos de conexión a la DB y el query de consulta.
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

export default QueryForm;
