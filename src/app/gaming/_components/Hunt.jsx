import { Proposal } from "./Proposal";
import { SearchIcon } from "lucide-react";

export const Hunt = ({ onChange, value, founded, clickHandler }) => {
  return (
    <div className="relative w-[500px] h-16 m-10 bg-white rounded-[8px] flex items-center">
      <SearchIcon
        className="absolute top-1/2 left-4 transform -translate-y-1/2 h-5 w-5 text-gray-500"
        aria-hidden="true"
      />
      <input
        className="bg-gray-100 border border-gray-300 text-gray-900 text-lg rounded-lg w-full h-12 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Search for a city"
        value={value}
        onChange={onChange}
        aria-label="Search for a city"
      />
      {founded.length > 0 && value ? (
        <Proposal founded={founded} clickHandler={clickHandler} />
      ) : null}
    </div>
  );
};