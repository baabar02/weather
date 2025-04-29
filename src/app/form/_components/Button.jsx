"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

// import { motion } from "framer-motion";

const Button = ({
  onClick,
  backgroundColor,
  color,
  width,
  marginBottom,
  marginTop,
  step,
  text,
}) => {
  return (
    <div className="w-[416px] h-[44px] ">
      <button
        style={{ backgroundColor, color, marginBottom, marginTop, width }}
        onClick={onClick}
        className={`"w-[416px] h-[44px] rounded-[8px] border border-green-400 ${
          step === "next ? bg-black"
        }"`}
        type="button"
      >
        {step === "prev" && <ChevronRight />}
        {text}
        {step === "next" && <ChevronLeft />}
      </button>
    </div>
  );
};

export default Button;
