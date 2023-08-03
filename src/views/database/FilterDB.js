import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Card, CardBody, CardTitle, Row, Col, Form } from "reactstrap";

import InputDB from "../../components/input/InputDB";
import { updateFilter } from "../../redux/database/Action";

const FilterDB = () => {
  const { host, database, user, password } = useSelector(
    (state) => state.databaseReducer
  );

  const dispatch = useDispatch();

  const handleInput = (event) => {
    const { name, value } = event.target;
    dispatch(updateFilter({ name, value }));
  };

  return (
    <Row>
      <Col md="12">
        <Card>
          <CardBody className="bg-light">
            <CardTitle className="mb-0">Conexión MYSQL</CardTitle>
          </CardBody>
          <CardBody>
            <Form>
              <Row>
                <InputDB
                  colMain="6"
                  colLabel="2"
                  colComponent="8"
                  icon="ti-server"
                  label="Servidor"
                  name="host"
                  value={host}
                  change={handleInput}
                />
                <InputDB
                  colMain="6"
                  colLabel="3"
                  colComponent="7"
                  icon="ti-write"
                  label="Base de datos"
                  name="database"
                  value={database}
                  change={handleInput}
                />
              </Row>
              <Row>
                <InputDB
                  colMain="6"
                  colLabel="2"
                  colComponent="8"
                  icon="ti-user"
                  label="user"
                  name="user"
                  value={user}
                  change={handleInput}
                />
                <InputDB
                  colMain="6"
                  colLabel="3"
                  colComponent="7"
                  icon="ti-lock"
                  label="Contraseña"
                  name="password"
                  value={password}
                  change={handleInput}
                />
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default FilterDB;
