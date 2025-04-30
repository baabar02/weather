"use client";

const Inputs = ({ text, valueChanger, value, name, placeholder, type }) => {
  return (
    <div
      className="flex-col mt-[20px] w-[416px] h-[68px] border border-green-400"
      style={{ text: text.text, type: type.type }}
    >
      <label className="">
        {text}
        <sup className="text-red-500">*</sup>
      </label>
      <input
        name={name}
        className="w-[416px] h-[44px] rounded-[8px] border border-gray-400"
        type="text"
        placeholder={placeholder}
        onChange={valueChanger}
        value={value}
      />
    </div>
  );
};

export default Inputs;
