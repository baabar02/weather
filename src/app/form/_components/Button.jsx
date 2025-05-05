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
    <div className="w-full h-fit">
      <button
        style={{ color, backgroundColor, marginBottom, type, marginTop, width }}
        onClick={onClick}
        className={`flex justify-center items-center p-3 rounded-[8px] border border-green-400 shadow-lg bg-${backgroundColor} ${
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
