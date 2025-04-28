"use client";

const Inputs = ({ text }) => {
  return (
    <div
      className="flex-col mt-[20px] w-[416px] h-[68px] border border-green-400"
      style={{ text: text.text }}
    >
      <label className="">{text}</label>
      <input
        className="w-[416px] h-[44px] rounded-[8px] border border-green-400"
        type="text"
        placeholder="Placeholder"
      />
    </div>
  );
};

export default Inputs;
