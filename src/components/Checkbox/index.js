import React from "react";
import "./index.css";

export default ({ label }) => {
  return (
    <div className="Checkbox">
        <input type="checkbox" className="Checkbox-input"/>
        <label className="Checkbox-label">{label}</label>
    </div>
  );
}