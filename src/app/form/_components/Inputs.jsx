"use client";

const Inputs = ({ text, placeholder, type }) => {
  return (
    <div
      className="flex-col mt-[20px] w-[416px] h-[68px] border border-green-400"
      style={{ text: text.text }}
    >
      <label className="">
        {text}
        <sup className="text-red-500">*</sup>
      </label>
      <input
        className="w-[416px] h-[44px] rounded-[8px] border border-green-400"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Inputs;
