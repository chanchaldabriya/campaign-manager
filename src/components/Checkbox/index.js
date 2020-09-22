import React from "react";
import "./index.css";

export default ({ label, checked = false, onChange }) => {
  return (
    <div className="Checkbox">
      <input
        type="checkbox"
        className="Checkbox-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="Checkbox-label">{label}</label>
    </div>
  );
};
