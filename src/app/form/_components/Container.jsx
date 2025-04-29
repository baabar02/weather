"use client";
import { useState } from "react";
import ContainerStep1 from "./ContainerStep1";
import ContainerStep2 from "./ContainerStep2";
import ContainerStep3 from "./ContainerStep3";
import ContainerStep4 from "./ContainerStep4";

const FormPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const totalSteps = [
    ContainerStep1,
    ContainerStep2,
    ContainerStep3,
    ContainerStep4,
  ];

  const Stepper = totalSteps[currentStep];
  // const step = {` ${currentStep} of ${totalSteps}`}
  return (
    <div>
      <Stepper onNext={handleNext} onPrevious={handlePrevious} />
    </div>
  );
};

export default FormPage;

// <div>
//   {currentStep === 1 && (
//     <ContainerStep1
//       isVisible={currentStep === 1}
//       onNext={handleNext}
//       step={`Continue ${currentStep} of ${totalSteps}`}
//     />
//   )}
//
//
// </div>
