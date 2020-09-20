import React from "react";
import Checkbox from "../Checkbox";
import "./index.css";

export default ({ title, items }) => {
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
              <Checkbox label={item} key={item} />
            ))}
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};
