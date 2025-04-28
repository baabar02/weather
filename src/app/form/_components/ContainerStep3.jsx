"use client";
import { motion } from "framer-motion";
import Inputs from "./Inputs";
import Button from "./Button";

const ContainerStep3 = ({ isVisible, onNext, onPrevious, step }) => {
  return (
    <motion.div
      className="flex flex-col items-center w-full max-w-[480px] h-[650px] gap-2 border border-green-400 p-4 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-start mt-5 gap-2 w-[416px]">
        <div className="w-[60px] h-[60px]">
          <img src="/Logo.png" alt="Logo" className="object-contain" />
        </div>
        <h1 className="text-[31px] font-bold">Almost there! 🚀</h1>
        <h2 className="text-gray-600">Please provide additional details.</h2>
      </div>
      <Inputs text="Date of birth*"  />
      <Inputs text="Profile image*"
      width="240px" />

      <div className="flex w-[416px]">
        <Button
          onClick={onPrevious}
          backgroundColor="white"
          color="gray"
          isVisible={isVisible}
          text="< Back"
          width={128}
          marginTop={30}
        />
        <Button
          onClick={onNext}
          backgroundColor="black"
          color="white"
          isVisible={isVisible}
          text={step}
          width={280}
          marginTop={30}
        />
      </div>
    </motion.div>
  );
};

export default ContainerStep3;