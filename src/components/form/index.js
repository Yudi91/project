import React, { useContext } from "react";
import { ContainerContext } from "../../App";

const Counter = () => {
  const [state, dispatch] = useContext(ContainerContext);

  return (
    <div className="container-gs">
        <div className="question-wrapper">
            <p className="question-title"></p>
            <div className="question-options opacity0">
              <div className="panel-body">
                <div className="options-wrapper"></div>
              </div>
              <div className="panel-footer">
                <button className="sbmt-post btn btn-green btn-sm">Submit</button>
              </div>
            </div>

            <div className="question-result opacity0">
                <div id="result"></div>
            </div>
        </div>
    </div>
  );
};

export default Counter;