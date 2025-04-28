'use client'
import { useState } from "react";
import ContainerStep1 from "./_components/ContainerStep1";
import ContainerStep2 from "./_components/ContainerStep2";
import ContainerStep3 from "./_components/ContainerStep3";

const FormPage = () => {

  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      {currentStep === 1 && (
        <ContainerStep1
          isVisible={currentStep === 1}
          onNext={handleNext}
          step={`Continue ${currentStep} of ${totalSteps}`}
        />
      )}
      {currentStep === 2 && (
        <ContainerStep2
          isVisible={currentStep === 2}
          onNext={handleNext}
          onPrevious={handlePrevious}
          step= {`Continue ${currentStep} of ${totalSteps}`}
    
        />
      )}
      {currentStep === 3 && (
        <ContainerStep3 
        isVisible={currentStep === 3}
        onPrevious={handlePrevious} 
        step={`Submit ${currentStep} of ${totalSteps}`}/>
      )}
    </div>
  );
};

export default FormPage;