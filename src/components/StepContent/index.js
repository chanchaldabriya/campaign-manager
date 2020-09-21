import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ order, activeStep, children, info }) => {
  return (
    <div className={`StepContent ${activeStep === order ? "active" : ""}`}>
      {info && (
        <div className="StepContent-info-panel">
          <FontAwesomeIcon icon="info-circle" color="#0084cc" />
          <span className="StepContent-info">{info}</span>
        </div>
      )}
      {children}
    </div>
  );
};
