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
  setFiles,
  clearFiles,
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
    } else if (
      !["image/jpeg", "image/png"].includes(formOne.ProfileImage.type)
    ) {
      validationError.ProfileImage = "Зөвхөн JPEG эсвэл PNG зураг оруулна уу.";
    }

    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center h-[650px] w-[448px] bg-white border border-gray-300 rounded-lg shadow-lg"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isVisible ? 0 : 1, x: isVisible ? -50 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className=" flex flex-col items-start mt-5 gap-2 w-[416px]">
        <div className="w-[60px] h-[60px]">
          <img src="/Logo.png" alt="Logo" className="object-contain" />
        </div>
        <h1 className="text-[31px] font-bold">Almost there! 🚀</h1>
        <h2 className="text-gray-600">Please provide additional details.</h2>
      </div>

      <div className="">
        <Inputs
          name="DateOfBirth"
          text="Date of birth"
          placeholder="yyyy-mm-dd"
          type="date"
          value={formOne.DateOfBirth}
          valueChanger={valueChanger}
          error={error.DateOfBirth}
        />

        {formOne.ProfileImage ? (
          <div className="relative mt-[20px] px-4 pb-4 w-full h-[200px] object-cover flex justify-center items-center rounded bg-gray-200">
            <img
              src={URL.createObjectURL(formOne.ProfileImage)}
              alt="Preview"
              className="object-contain max-w-full max-h-full"
            />

            <button
              text="X"
              onClick={clearFiles}
              backgroundColor="gray"
              height={60}
              width={60}
              aria-label="Clear profile image"
              className="absolute top-3 right-3 rounded-full border border-green-400 w-[30px] h-[30px] flex items-center justify-center"
            >
              x
            </button>
          </div>
        ) : (
          <Inputs
            className="object-contain overflow-hidden"
            isImage={true}
            name="ProfileImage"
            text="Profile image"
            placeholder="Drop image"
            type="file"
            height="200px"
            width="240px"
            isBackground={true}
            value={undefined}
            valueChanger={valueChanger}
            error={error.ProfileImage}
          />
        )}
      </div>

      <div className="mt-[100px] relative flex gap-4 top-[50px]">
        <Button
          onClick={onPrevious}
          backgroundColor="white"
          color="black"
          text="Back"
          type="Back"
          width={128}
          marginTop={40}
        />
        <Button
          onClick={stepThree}
          backgroundColor="black"
          color="white"
          text={`Continue ${currentStep + 1}/${totalSteps.length - 1}`}
          type="Next"
          width={274}
          marginTop={40}
        />
      </div>
    </motion.div>
  );
};

export default ContainerStep3;
