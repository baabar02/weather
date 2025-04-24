import { MapPin } from "lucide-react";

export const Proposal = ({ founded }) => {
  const topCities = founded.length >= 4 ? founded.slice(0, 4) : founded;

  return (
    <div className="absolute flex-col z-60">
      <div className="flex left-[-500px] z-100 gap-4 flex-col absolute top-[85px] w-[500px] bg-white shadow-lg rounded-[8px] p-2 max-h-[200px] overflow-y-auto">
        {topCities.length === 0 ? (
          <p className="p-2 text-gray-500">No cities found</p>
        ) : (
          topCities.map((el) => (
            <div
              key={`${el.cityName}-${el.country}`}
              className="flex  relative z-60 gap-4 rounded-[8px] bg-yellow-100 p-2"
            >
              <MapPin />
              <p>
                {el.cityName}, {el.country}, {el.iso}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
