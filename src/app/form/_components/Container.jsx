"use client";
import { useState } from "react";
import Bottom from "./Bottom";
import Inputs from "./Inputs";
import { motion } from "motion/react";

const Container = ({ isVisible }) => {
  const [pageMotion, setPageMotion] = useState("");

  const bottomHandler = () => {
    // setPageMotion(event.target.value);
    console.log("asd");
  };

  return (
    <div className="flex flex-col items-center w-[480px] h-[650px] gap-[8px] border border-green-400">
      <div className="flex-start mt-5 gap-[8px] w-[416px] h-[129px]">
        <div className="w-[60px] h-[60px] ml-[">
          <img src="/Logo.png" />
        </div>
        <h1 className="text-[31px]">Join us!😎</h1>
        <h2 className="">Please provide all current information accurately.</h2>
      </div>
      <Inputs text="First name*" />
      <Inputs text="Last name*" />
      <Inputs text="Phone number*" />
      <Bottom onclick={bottomHandler} />
    </div>
  );
};

export default Container;
