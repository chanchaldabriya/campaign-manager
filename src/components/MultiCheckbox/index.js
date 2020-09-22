import React from "react";
import Checkbox from "../Checkbox";
import "./index.css";

export default ({ title, items, selected = {}, setSelected }) => {
  debugger;
  const isItemChecked = (key, item) => {
    return (
      selected.hasOwnProperty(key) &&
      selected[key].length > 0 &&
      selected[key].includes(item)
    );
  };

  const setItemChecked = (key, item, value) => {
    debugger;
    value
      ? setSelected(
          selected.hasOwnProperty(key) ? [...selected[key], item] : [item],
          key
        )
      : setSelected(
          selected[key].filter((selectedItem) => selectedItem !== item),
          key
        );
  };

  return (
    <section className="MultiCheckbox">
      <h3 className="MultiCheckbox-title leftTitle">{title}</h3>
      {Object.keys(items).map((key) => (
        <React.Fragment key={key}>
          {key && (
            <h4 className="MultiCheckbox-subsection-title leftTitle">{key}</h4>
          )}
          <div className="MultiCheckbox-subsection">
            {items[key].map((item) => (
              <Checkbox
                label={item}
                key={item}
                checked={isItemChecked(key, item)}
                onChange={(newValue) => setItemChecked(key, item, newValue)}
              />
            ))}
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};
