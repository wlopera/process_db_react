import React, { useState, Fragment } from "react";

import Parameters from "../../procedure/Parameters";
import ParameterDetails from "../../procedure/ParameterDetails";

const Params = ({ typeDB }) => {
  const [showRight, setshowRight] = useState(false);

  const showRightPart = () => {
    setshowRight(!showRight);
  };

  return (
    <Fragment>
      <div className="">
        <div className="">
          <div
            className={
              "right-left-part " +
              (showRight === true ? "show-right-left-panel" : "")
            }
          >
            <Parameters
              showRightPart={showRightPart}
              typeDB={typeDB}
            />
          </div>
          <div
            className={
              "right-right-part " +
              (showRight === true
                ? "show-right-right-panel"
                : "hide-right-right-part")
            }
          >
            <span
              onClick={() => {
                showRightPart();
              }}
              className={
                "hide-right-right-part d-block d-md-none " +
                (showRight === true ? "right-right-part-open" : "")
              }
            >
              <i className="fas fa-times"></i>
            </span>
            <div>
              <ParameterDetails typeDB={typeDB} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Params;
