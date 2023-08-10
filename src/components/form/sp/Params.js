import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";

import Parameters from "../../procedure/Parameters";
import ParameterDetails from "../../procedure/ParameterDetails";

const Params = () => {
  const [showRight, setshowRight] = useState(false);

  const params = useSelector(
    (state) =>
      state.paramsReducer.params
  );

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
            <Parameters showRightPart={showRightPart} params={params} />
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
              <ParameterDetails />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Params;
