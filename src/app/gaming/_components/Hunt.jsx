import { SearchIcon } from "lucide-react";
import { Proposal } from "./Proposal";

export const Hunt = ({ value, onChange, founded }) => {
  return (
    <div className="z-50 bg-white relative w-[500px] h-[80px] m-[40px] rounded-[8px] flex">
      <SearchIcon className="absolute top-7 left-4" />
      <input
        className="bg-gray-100 border pl-[50px] border-gray-300 text-gray-900 text-lg rounded-lg w-full h-full focus:outline-none"
        type="text"
        placeholder="Hunt for a city..."
        value={value}
        onChange={onChange}
      />
      <div>
        <Proposal founded={founded} />
      </div>
    </div>
  );
};