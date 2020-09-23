import React, { useState } from "react";
import "./index.css";
import MultiCheckbox from "../MultiCheckbox";
import Selector from "../Selector";
import Stepper from "../Stepper";
import StepContent from "../StepContent";
import Range from "../Range";

export default function CampaignCreator() {
  /* Campaign data */
  const [campaignData, setCampaignData] = useState({
    name: "",
    type: "",
    channelTypes: {},
    trackingOptions: {},
    start: new Date().getTime(),
    end: new Date().getTime(),
    budget: 0,
    impressions: 0,
  });

  /* Current active Step screen state */
  const [activeStep, setActiveStep] = useState(1);

  const editCampaign = (prop, value) =>
    setCampaignData({
      ...campaignData,
      [prop]:
        typeof value === "object" ? { ...campaignData[prop], ...value } : value,
    });

  const isStepCompleted = () => {
    let {
      name,
      type,
      channelTypes,
      trackingOptions,
      start,
      end,
      budget,
      impressions,
    } = campaignData;
    switch (activeStep) {
      case 1:
        // for Step 1
        return (
          name &&
          type &&
          !isEmptySelection(channelTypes) &&
          !isEmptySelection(trackingOptions)
        );

      case 2:
        // for Step 2, start date shouldn't be greater than end date
        return start && end && start <= end;

      case 3:
        // for Step 3, budget & impressions value should be non-zero
        return budget && impressions;
    }
  };

  const isEmptySelection = (obj) => {
    // either doesn't have any key or has blank array with the key
    return (
      Object.keys(obj).length === 0 ||
      Object.keys(obj).some((key) => obj[key].length === 0)
    );
  };

  return (
    <div className="CampaignCreator">
      <div className="CampaignCreator-name">
        <label className="CampaignCreator-name-label">Campaign Name</label>
        <input
          className="CampaignCreator-input"
          placeholder="Name your Campaign"
          value={campaignData["name"]}
          onChange={(e) => editCampaign("name", e.target.value)}
        />
      </div>

      <Stepper
        steps={["Select Channel", "Flight", "Budget"]}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        isStepCompleted={isStepCompleted()}
        onComplete={() => {
          console.log("Request payload");
          return campaignData;
        }}
      >
        <StepContent info="Select the channel of your campaign">
          <Selector
            activeItem={campaignData["type"]}
            setActiveItem={(activeItem) => editCampaign("type", activeItem)}
          />

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
            selected={campaignData["channelTypes"]}
            setSelected={(selectedItems, key) =>
              editCampaign("channelTypes", {
                [key]: selectedItems,
              })
            }
          />

          <MultiCheckbox
            title="Tracking Options"
            items={{
              "Attribution Type": ["Visits", "Transactions"],
            }}
            // items={{
            //   "Attribution Type": ["Visits", "Transactions"],
            //   "Payment Type": [
            //     "UPI",
            //     "Credit/Debit Card into the bank",
            //     "Internet Banking",
            //   ],
            // }}
            selected={campaignData["trackingOptions"]}
            setSelected={(selectedItems, key) =>
              editCampaign("trackingOptions", {
                [key]: selectedItems,
              })
            }
          />
        </StepContent>
        <StepContent info="Select when the campaign start and end">
          <Range
            type="date"
            capitalizeLabel
            start={campaignData.start}
            setStart={(startMillis) => editCampaign("start", startMillis)}
            end={campaignData.end}
            setEnd={(endMillis) => editCampaign("end", endMillis)}
          />
        </StepContent>
        <StepContent info="How much is your campaign budget?">
          <Range
            startLabel="Total Budget"
            endLabel="Total Impressions"
            type="number"
            start={campaignData.budget}
            setStart={(budget) => editCampaign("budget", budget)}
            end={campaignData.impressions}
            setEnd={(impressions) => editCampaign("impressions", impressions)}
          />
        </StepContent>
      </Stepper>
    </div>
  );
}
