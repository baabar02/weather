
"use client";

import { MapPin } from "lucide-react";

export const Suggestions = ({ filteredCities, clickHandler }) => {

  const suggestions = filteredCities.slice(0, 4);

  return (
    <div className="absolute z-50 mt-20 w-[500px] bg-white shadow-lg rounded-[8px] p-2 max-h-[200px] overflow-y-auto">
      {/* {suggestions.length === 0 ? (
        <p className="p-2 text-gray-500 text-sm">No results found</p>
      ) : ( */}
        <div className="flex flex-col gap-2">
          {suggestions.map((city) => (
            <button
              key={`${city.cityName} ${city.countryName}`}
              className="flex items-center gap-2 p-2 hover:bg-yellow-100 rounded cursor-pointer text-gray-900 text-sm"
              onClick={() => clickHandler(city.cityName)}
              aria-label={`Select ${city.cityName}, ${city.countryName}`}
            >
              <MapPin className="w-5 h-5 text-gray-500" aria-hidden="true" />
              <p>
                {city.cityName}, {city.countryName}
              </p>
            </button>
          ))}
        </div>
      {/* )} */}
    </div>
  );
};