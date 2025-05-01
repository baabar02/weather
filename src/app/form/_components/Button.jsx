"use client";

import { ChevronLeft, ChevronRight, type } from "lucide-react";

// import { motion } from "framer-motion";

const Button = ({
  onClick,
  backgroundColor,
  color,
  width,
  marginBottom,
  marginTop,
  text,
  type,
}) => {
  return (
    <div className="w-[416px] h-[44px] ">
      <button
        style={{ color, backgroundColor, marginBottom, marginTop, width }}
        onClick={onClick}
        className={`flex justify-center items-center w-[416px] h-[44px] rounded-[8px] border border-green-400 bg-${backgroundColor} ${
          type === "Next" ? "text-white" : "text-black"
        }`}
      >
        {type === "Back" && <ChevronLeft />}
        {text}
        {type === "Next" && <ChevronRight />}
      </button>
    </div>
  );
};

export default Button;
