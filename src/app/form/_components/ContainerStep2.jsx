"use client";
import { motion } from "framer-motion";
import Inputs from "./Inputs";
import Button from "./Button";

const ContainerStep2 = ({ isVisible, onNext, onPrevious, step }) => {
  return (
    <motion.div
      className="flex flex-col items-center w-full max-w-[480px] h-[650px] gap-2 border border-green-400 p-4 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-start mt-[10px] gap-2 w-[416px]">
        <div className="w-[60px] h-[60px]">
          <img src="/Logo.png" alt="Logo" className="object-contain" />
        </div>
        <h1 className="text-[31px] font-bold">Join us! 😎</h1>
        <h2 className="text-gray-600">Please provide additional details.</h2>
      </div>
      <Inputs text="Email*" />
      <Inputs text="Phone number*" />

      <Inputs text="Password*" />
      <Inputs text="Confirm password*" />
      <div className="flex w-[416px]">
        <Button
          onClick={onPrevious}
          backgroundColor="gray-500"
          color="gray"
          isVisible={isVisible}
          text="< Back"
          marginTop={10}
          width={128}
        />
        <Button
          onClick={onNext}
          backgroundColor="black"
          color="white"
          isVisible={isVisible}
          text={step}
          marginTop={10}
          width={280}
        />
      </div>
    </motion.div>
  );
};

export default ContainerStep2;