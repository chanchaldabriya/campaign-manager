import React from "react";
import {
  getDateStringFromMillis,
  getMillisFromDateString,
} from "../../common/DateUtils";
import "./index.css";
import CurrencyInput from 'react-currency-input';

export default ({
  startLabel = "Start",
  endLabel = "End",
  startType = "text",
  endType = "text",
  capitalizeLabel = false,
  start,
  setStart,
  end,
  setEnd,
}) => {
  const CustomInput = (type, value, onChange) => {
    return type === "currency" ? (
      <CurrencyInput
        value={value}
        onChangeEvent={(event, maskedvalue, floatvalue) =>
          onChange(maskedvalue)
        }
        precision="2"
        prefix="US$ "
      />
    ) : (
      <input
        type={type}
        value={type === "date" ? getDateStringFromMillis(value) : value}
        onChange={(e) =>
          onChange(
            type === "date"
              ? getMillisFromDateString(e.target.value)
              : e.target.value
          )
        }
      />
    );
  };

  return (
    <div className="Range">
      <div className="Range-item">
        <label className={`Range-label ${capitalizeLabel ? "uppercase" : ""}`}>
          {startLabel}
        </label>
        {CustomInput(startType, start, setStart)}
      </div>

      <div className="Range-item">
        <label className={`Range-label ${capitalizeLabel ? "uppercase" : ""}`}>
          {endLabel}
        </label>
        {CustomInput(endType, end, setEnd)}
      </div>
    </div>
  );
};
