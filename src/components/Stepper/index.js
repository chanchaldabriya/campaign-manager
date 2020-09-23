import React from "react";
import "./index.css";

export default ({ activeStep, setActiveStep, isStepCompleted, steps, children, onComplete }) => {
  const totalSteps = React.Children.count(children),
    isLastStep = activeStep === totalSteps,
    isFirstStep = activeStep === 1;

  const nextStep = () =>
    !isLastStep ? setActiveStep(activeStep + 1) : console.log(typeof onComplete === "function" ? onComplete() : "HTTP request");

  const prevStep = () => setActiveStep(activeStep - 1);

  return (
    <div className="Stepper">
      <div className="Stepper-steps">
        {steps.map((step, index) => (
          <h2
            className={`Stepper-Step-title ${
              activeStep === index + 1 ? "active" : ""
            }`}
            key={step}
          >{`Step ${index + 1} - ${step}`}</h2>
        ))}
      </div>

      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          activeStep: activeStep,
          order: index + 1,
        });
      })}

      <div className="Stepper-nav-btns">
        {!isFirstStep && (
          <button className="Stepper-btn prevBtn" onClick={prevStep}>
            Prev
          </button>
        )}
        <button className="Stepper-btn">Cancel</button>
        <button
          className={`Stepper-btn ${!isLastStep ? "nextBtn" : "complete"}`}
          onClick={nextStep}
          disabled={!isStepCompleted}
        >
          {isLastStep ? "Create Tracker" : "Next!"}
        </button>
      </div>
    </div>
  );
};
