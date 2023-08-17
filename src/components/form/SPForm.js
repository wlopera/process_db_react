import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import Params from "./sp/Params";
import CallSP from "./sp/CallSP";

const SPForm = ({ typeDB }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

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
            Parámetros
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Llamar SP
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="p-4" activeTab={activeTab}>
        <TabPane tabId="1">
          <Params typeDB={typeDB}/>
        </TabPane>
        <TabPane tabId="2">
          <CallSP typeDB={typeDB} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default SPForm;
