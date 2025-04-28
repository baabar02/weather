"use client";
// import { motion } from "framer-motion";

const Button = ({ onClick, backgroundColor, color, width, marginBottom, marginTop, text }) => {
  return (
    <div className="w-[416px] h-[44px] ">
      <button
        style={{ backgroundColor, color, marginBottom, marginTop, width }}
        onClick={onClick}
        className="w-[416px] h-[44px] rounded-[8px] border border-green-400"
        type="button"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;