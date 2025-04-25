import { SearchIcon } from "lucide-react";
import { Suggestions } from "./Suggestions";

export const Search = ({
  value,
  onChange,
  cityNames,
  oldogsod,
  clickHandler,
}) => {
  return (
    <div className="z-50 bg-white relative w-[500px] h-[80px] m-[40px] rounded-[8px] flex">
      <SearchIcon className="absolute top-7 left-4" />
      <input
        className="bg-gray border pl-[50px] border-gray-300 text-gray-900 text-l rounded-lg w-full h-full focus:outline-none"
        type="text"
        placeholder="search"
        value={value}
        onChange={onChange}
      />
      {oldogsod.length != 0 && value ? (
        <Suggestions
          cityNames={cityNames}
          oldogsod={oldogsod}
          clickHandler={clickHandler}
        />
      ) : (
        ""
      )}
    </div>
  );
};
