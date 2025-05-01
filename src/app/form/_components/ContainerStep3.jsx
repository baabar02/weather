"use client";
import { motion } from "framer-motion";
import Inputs from "./Inputs";
import Button from "./Button";

const ContainerStep3 = ({
  isVisible,
  onPrevious,
  valueChanger,
  formOne,
  error,
  setError,
  setCurrentStep,
  currentStep,
  totalSteps,
  height
}) => {
  const stepThree = () => {
    const validationError = {};

    if (!formOne.DateOfBirth) {
      validationError.DateOfBirth = "Та төрсөн өдрийн огноог оруулна уу.";
    } else {
      const today = new Date();
      const birthDate = new Date(formOne.DateOfBirth);
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) {
        validationError.DateOfBirth = "Та 18-аас дээш настай байх ёстой.";
      }
    }

    if (!formOne.ProfileImage) {
      validationError.ProfileImage = "Профайлын зураг оруулна уу.";
    } else if (!["image/jpeg", "image/png"].includes(formOne.ProfileImage.type)) {
      validationError.ProfileImage = "Зөвхөн JPEG эсвэл PNG зураг оруулна уу.";
    }

    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center w-full max-w-[480px] h-[650px] gap-2 border border-gray-300 p-4 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isVisible ? 0 : 1, x: isVisible ? -50 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-start mt-5 gap-2 w-[416px]">
        <div className="w-[60px] h-[60px]">
          <img src="/Logo.png" alt="Logo" className="object-contain" />
        </div>
        <h1 className="text-[31px] font-bold">Almost there! 🚀</h1>
        <h2 className="text-gray-600">Please provide additional details.</h2>
      </div>
      <div className="mt-[20px]">
        <Inputs
          name="DateOfBirth"
          text="Date of birth"
          placeholder="yyyy-mm-dd"
          type="date"
          value={formOne.DateOfBirth}
          valueChanger={valueChanger}
          error={error.DateOfBirth}
        />
        <Inputs
          // className={``}
          name="ProfileImage"
          text="Profile image"
          placeholder="Choose File"
          type="file"
          height={height}
          width="240px"
          value={undefined} // File inputs are uncontrolled
          valueChanger={valueChanger}
          error={error.ProfileImage}
        />
      </div>
      <div className="flex w-[416px] gap-4">
        <Button
          onClick={onPrevious}
          backgroundColor="white"
          color="black"
          text="Previous"
          buttonType="Back"
          width={128}
          marginTop={40}
        />
        <Button
          onClick={stepThree}
          backgroundColor="black"
          color="white"
          text={`Continue ${currentStep + 1}/${totalSteps.length-1}`}
          buttonType="Next"
          width={280}
          marginTop={40}
        />
      </div>
    </motion.div>
  );
};

export default ContainerStep3;



