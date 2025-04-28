"use client";
import { motion } from "motion/react";
const Bottom = ({ isVisible, onclick, animate }) => {
  return (
    <div className="w-[416px] h-[44px] mt-[50px]">
      {" "}
      <motion.div key={onclick} animate={{ opacity: 0 ? 1 : null }}>
        <button
          onClick={onclick}
          className="w-[416px] h-[44px] bg-grey-500 rounded-[8px] border border-green-400"
          type="text"
        >
          1 of 2
        </button>
      </motion.div>
    </div>
  );
};

export default Bottom;
