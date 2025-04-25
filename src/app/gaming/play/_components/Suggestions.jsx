import { MapPin } from "lucide-react";

export const Suggestions = ({ oldogsod, clickHandler, clickedCityName }) => {
  const firstFour = oldogsod.length >= 4 ? oldogsod.splice(0, 6) : oldogsod;
  return (
    <div className="absolute flex-col z-60">
      <div className="flex z-100 gap-4 flex-col absolute top-[85px] w-[500px] bg-white shadow-lg rounded-[8px] p-2  max-h-[200px] overflow-y-auto">
        {firstFour.map((el, index) => {
          return (
            <button key={index} onClick={() => clickHandler(el.cityName)}>
              <div className="flex relative z-60 gap-4 rounded-[8px] bg-yellow-100 p-2 ">
                <MapPin />
                <p>
                  {el.cityName}, {el.countryName}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// import { MapPin } from "lucide-react";

// export const Suggestions = ({ cityNames, onSelect }) => {
//   return (
//     <div className="absolute top-[85px] left-0 w-[500px] bg-white shadow-lg rounded-[  p-2 z-[52] max-h-[200px] overflow-y-auto">
//       <div className="flex flex-col gap-2">
//         {cityNames.map((city) => (
//           <div
//             key={city}
//             className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
//             onClick={() => onSelect(city)}
//           >
//             <MapPin className="w-5 h-5" />
//             <p>{city}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
