import React from "react";
import {
  getDateStringFromMillis,
  getMillisFromDateString,
} from "../../common/DateUtils";
import "./index.css";

export default ({
  startLabel = "Start",
  endLabel = "End",
  type = "text",
  capitalizeLabel = false,
  start,
  setStart,
  end,
  setEnd,
}) => {
  // const [start, setStart] = useState("");
  // const [end, setEnd] = useState("");

  return (
    <div className="Range">
      <div className="Range-item">
        <label className={`Range-label ${capitalizeLabel ? "uppercase" : ""}`}>
          {startLabel}
        </label>
        <input
          type={type}
          value={type === "date" ? getDateStringFromMillis(start) : start}
          onChange={(e) => setStart(type === "date" ?getMillisFromDateString(e.target.value) : e.target.value)}
        />
      </div>

      <div className="Range-item">
        <label className={`Range-label ${capitalizeLabel ? "uppercase" : ""}`}>
          {endLabel}
        </label>
        <input
          type={type}
          value={type === "date" ? getDateStringFromMillis(end) : end}
          onChange={(e) => setEnd(type === "date" ?getMillisFromDateString(e.target.value) : e.target.value)}
        />
      </div>
    </div>
  );
};
