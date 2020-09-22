import React, { useState } from "react";
import "./index.css";

export default ({
  startLabel = "Start",
  endLabel = "End",
  type = "text",
  capitalizeLabel = false,
}) => {
  // const [start, setStart] = useState(new Date());
  // const [end, setEnd] = useState(new Date());

  return (
    <div className="Range">
      <div className="Range-item">
        <label className={`Range-label ${capitalizeLabel ? "uppercase" : ""}`}>
          {startLabel}
        </label>
        <input
          type={type}
          // value={start}
          // onChange={setStart}
        />
      </div>

      <div className="Range-item">
        <label className={`Range-label ${capitalizeLabel ? "uppercase" : ""}`}>
          {endLabel}
        </label>
        <input
          type={type}
          // value={end}
          // onChange={setEnd}
        />
      </div>
    </div>
  );
};
