// "use client";

// const Inputs = ({ text, valueChanger, value, name, placeholder, type, error }) => {
//   // Generate a unique ID for accessibility
//   const inputId = `input-${name}`;
//   const errorId = `error-${name}`;

//   return (
//     <div className="flex flex-col w-full max-w-[416px] mt-4">
//       <label htmlFor={inputId} className="text-sm font-medium">
//         {text}
//         <sup className="text-red-500">*</sup>
//       </label>
//       <input
//         id={inputId}
//         name={name}
//         type={type}
//         placeholder={placeholder}
//         onChange={valueChanger}
//         value={type === "file" ? undefined : value} // File inputs don't use value
//         required // Mark as required for browser validation
//         aria-describedby={error ? errorId : undefined}
//         className={`w-full h-[44px] rounded-[8px] border ${
//           error ? "border-red-500" : "border-gray-400"
//         } p-2 focus:outline-none focus:ring-2 focus:ring-green-400`}
//       />
//       {error && (
//         <p id={errorId} className="text-red-500 text-sm mt-1">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Inputs;

"use client";

const Inputs = ({
  text,
  valueChanger,
  value,
  name,
  placeholder,
  type,
  error,
  height
}) => {
  return (
    <div
      className="flex-col mt-[20px] w-[416px] h-[68px] "
      style={{  }}
    >
      <label className="">
        {text}
        <sup className="text-red-500">*</sup>
      </label>
      <input

        name={name}
        height={height}
        className={`w-[416px] h-[44px] rounded-[8px] border border-gray-400 ${
          error && "border-red-500"
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
