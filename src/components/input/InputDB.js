import React from "react";
import {
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
} from "reactstrap";

const InputDB = ({
  colMain,
  colLabel,
  colComponent,
  label,
  icon = null,
  name,
  value,
  change,
}) => {
  return (
    <Col md={colMain}>
      <Row>
        <Col md={colLabel}>
          <Label>{label}</Label>
        </Col>
        <Col md={colComponent}>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className={icon}></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input type="text" name={name} value={value} onChange={change} />
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
    </Col>
  );
};

export default InputDB;
