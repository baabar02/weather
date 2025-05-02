"use client";
import { motion } from "framer-motion";
import Inputs from "./Inputs";
import Button from "./Button";

const ContainerStep1 = ({
  isVisible,
  valueChanger,
  formOne,
  error,
  setError,
  setCurrentStep,
  currentStep,
  totalSteps,
}) => {
  const stepOne = () => {
    const validationError = {};
    if (!formOne.firstName) {
      validationError.firstName = "Нэрээ бичнэ үү?";
    }
    // else if
    // (
    //   !/^[\u1800-\u18AF\u0400-\u04FF\s\d.,()-]+$/.test(formOne.firstName)
    // )

    // {
    //   validationError.firstName = "Зөвхөн Крилл үсгээр бичнэ үү?";
    // }

    if (!formOne.lastName) {
      validationError.lastName = "Овгоо бичнэ үү?";
    }
    if (!formOne.userName) {
      validationError.userName = "Хэрэглэгчийн нэр бичнэ үү?";
    }

    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center w-full max-w-[480px] h-[650px] gap-2 p-4 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isVisible ? 0 : 1, x: isVisible ? -50 : 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col mt-[10px] items-start mt-5 gap-2 w-[416px]">
        <div className="w-[60px] h-[60px]">
          <img src="/Logo.png" alt="Logo" className="object-contain" />
        </div>
        <h1 className="text-[31px] font-bold">Join us! 😎</h1>
        <h2 className="text-gray-600">
          Please provide all current information accurately.
        </h2>
      </div>
      <div className="gap-[4px]">
        <Inputs
          name="firstName"
          text="First name"
          placeholder={"Your first name"}
          type="text"
          value={formOne.firstName}
          valueChanger={valueChanger}
          error={error.firstName}
          // onChange={(event) => console.log(event.target.value)}
        />
        <Inputs
          name="lastName"
          text="Last name"
          placeholder={"Your last name"}
          type="text"
          value={formOne.lastName}
          valueChanger={valueChanger}
          error={error.lastName}
        />
        <Inputs
          name="userName"
          text="User name"
          placeholder={"Your user name"}
          type="text"
          value={formOne.userName}
          valueChanger={valueChanger}
          error={error.userName}
        />
      </div>
      <Button
        // onClick={onNext}
        onClick={stepOne}
        backgroundColor="black"
        color="white"
        isVisible={isVisible}
        text={`Continue ${currentStep + 1}/${totalSteps.length - 1}`}
        type="Next"
        marginTop="130px"
        width="416px"
      />
    </motion.div>
  );
};

export default ContainerStep1;
