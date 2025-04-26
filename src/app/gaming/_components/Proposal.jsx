import { MapPin } from "lucide-react";

export const Proposal = ({ founded = [], clickHandler }) => {
  const topCities = Array.isArray(founded) && founded.length >= 4 ? founded.slice(0, 4) : founded;

  return (
    <div className="absolute flex-col z-50 top-[100px] w-[500px] bg-white shadow-lg rounded-[8px] p-2 max-h-[200px] overflow-y-auto">
      {topCities.length === 0 ? (
        <p className="p-2 text-gray-500 text-sm">No cities found</p>
      ) : (
        topCities.map((el) => (
          <button
            key={`${el.cityName}-${el.countryName}`}
            onClick={() => clickHandler(el.cityName)}
            className="flex items-center gap-4 rounded-[8px] bg-yellow-100 p-2 w-full text-left hover:bg-yellow-200"
            aria-label={`Select ${el.cityName}, ${el.countryName}`}
          >
            <MapPin className="h-5 w-5 text-gray-500" aria-hidden="true" />
            <p>
              {el.cityName}, {el.countryName}
            </p>
          </button>
        ))
      )}
    </div>
  );
};