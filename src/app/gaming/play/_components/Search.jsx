"use client";

import { SearchIcon } from "lucide-react";
import { Suggestions } from "./Suggestions";

export const Search = ({ value, onChange, filteredCities, clickHandler }) => {
  return (
    <div className="z-50 bg-white relative w-[500px] h-[80px] m-[40px] rounded-[8px] flex">
      <SearchIcon aria-hidden="true" className="absolute top-7 left-4" />
      <input
        className="bg-white border border-gray-300 h-[80px] text-gray-900 text-lg rounded-lg w-full h-12 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Search for a city"
        value={value}
        onChange={onChange}
        aria-label="Search for a city"
      />
      {filteredCities.length > 0 && value ? (
        <Suggestions
          filteredCities={filteredCities}
          clickHandler={clickHandler}
        />
      ) : null}
    </div>
  );
};
