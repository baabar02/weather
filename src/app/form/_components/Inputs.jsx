"use client";

const Inputs = ({
  text,
  valueChanger,
  value,
  name,
  placeholder,
  type,
  error,
  isImage,
}) => {
  return (
    <div className="flex-col mt-[20px] w-[416px] h-[68px] " style={{}}>
      <label className="">
        {text}
        <sup className="text-red-500">*</sup>
      </label>
      <input
        name={name}
        className={`w-[416px] h-[44px] rounded-[8px] border border-gray-400 ${
          (error && "border-red-500",
          isImage && "w-[300px] h-[200px] bg-gray-200 border rounded")
        }`}
        type={type}
        placeholder={placeholder}
        onChange={valueChanger}
        value={value}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Inputs;
