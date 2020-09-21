import React from "react";
import "./index.css";
import MultiCheckbox from "../MultiCheckbox";
import Selector from "../Selector";
import Stepper from "../Stepper";
import StepContent from "../StepContent";

export default function CampaignCreator() {
  return (
    <div className="CampaignCreator">
      <div className="CampaignCreator-name">
        <label className="CampaignCreator-name-label">Campaign Name</label>
        <input className="CampaignCreator-input"/>
      </div>

      <Stepper steps={["Select Channel", "Flight", "Budget"]}>
        <StepContent info="Select the channel of your campaign">
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
        </StepContent>
        <StepContent info="Select when the campaign start and end">
          <div>Second content</div>
        </StepContent>
        <StepContent info="How much is your campaign budget?">
          <div>Third content</div>
        </StepContent>
      </Stepper>
    </div>
  );
}
