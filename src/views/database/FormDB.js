import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import QueryForm from "../../components/form/QueryForm";
import SPForm from "../../components/form/SPForm";

const FormDB = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const params = props.location.params;

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Consulta
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Proceso almacenado
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="p-4" activeTab={activeTab}>
        <TabPane tabId="1">
          <QueryForm typeDB={params.typeDB} />
        </TabPane>
        <TabPane tabId="2">
          <SPForm typeDB={params.typeDB}/>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default FormDB;
