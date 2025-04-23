import { Search } from "lucide-react";
import { Suggestions } from "./Suggestions";

export const Input = ({value, onChange}) => {
  return (
    <div className="z-50 bg-white relative w-[500px] h-[80px] m-[40px] rounded-[8px] flex">
      <Search className="absolute top-7 left-4" />
      <input
        className="bg-gray border pl-[50px] border-gray-300 text-gray-900 text-l rounded-lg w-full h-full focus:outline-0"
        type="text"
        placeholder="search"
        value={value}
        onChange={onChange}
    
      />
    {/* <div>
        <Suggestions/>
    </div> */}

      
    </div>
  );
};

// import { Search } from "lucide-react";
// import { Suggestions } from "./Suggestions";

// export const Input = ({ value, onChange, cityNames }) => {
//   const handleSelect = (city) => {
//     onChange({ target: { value: city } }); // Simulate input change
//   };

//   return (
//     <div className="z-50 bg-white relative w-[500px] h-[80px] m-[40px] rounded-[8px] flex">
//       <Search className="absolute top-7 left-4" />
//       <input
//         className="bg-gray border pl-[50px] border-gray-300 text-gray-900 text-l rounded-lg w-full h-full focus:outline-0"
//         type="text"
//         placeholder="search"
//         value={value}
//         onChange={onChange}
//       />
//       {cityNames.length > 0 && <Suggestions cityNames={cityNames} onSelect={handleSelect} />}
//     </div>
//   );
// };