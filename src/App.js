import React from "react";
import "./App.css";
import MultiCheckbox from "./components/MultiCheckbox";
import Selector from "./components/Selector";

function App() {
  return (
    <div className="App">
      <Selector />

      <MultiCheckbox
        title="Type(s) of channel"
        items={{
          "": [
            "In App",
            "Mobile Web",
            "Desktop",
            "Social Media",
            "Paid Search",
            "Email",
            "Lead Form",
            "Landing Page",
          ],
        }}
      />

      <MultiCheckbox
        title="Tracking Options"
        items={{ "Attribution Type": ["Visits", "Transactions"] }}
      />
    </div>
  );
}

export default App;
