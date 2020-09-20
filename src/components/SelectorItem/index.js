import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Constants for class names
const SELECTED = "selected";

export default ({
  name,
  icon,
  selected = false,
  comingSoon = false,
  setActiveItem,
}) => {
  return (
    <div
      className={`SelectorItem ${selected ? SELECTED : ""}`}
      disabled={comingSoon}
      onClick={() => setActiveItem(name)}
    >
      {comingSoon && <span className="comingSoon">Coming Soon</span>}
      <FontAwesomeIcon
        icon={icon}
        size="3x"
        color={comingSoon ? "#aaa" : selected ? "white" : "#0084cc"}
      />
      <span className="SelectorItem-name">{name}</span>
    </div>
  );
};
