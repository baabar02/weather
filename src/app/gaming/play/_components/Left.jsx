"use client";

import { format } from "date-fns";
import { MapPin, House, Heart, User } from "lucide-react";
import Image from "next/image";

export const Left = ({ weather }) => {
  const { city, dayCelcius, condition, date } = weather;

  const displayDate = date
    ? format(new Date(date.split("/").reverse().join("-")), "MMMM dd, yyyy")
    : format(new Date(), "MMMM dd, yyyy");

  return (
    <div className="relative ml-[] mt-[20px] z-20 flex flex-col w-[414px] h-[828px] bg-white rounded-lg text-gray-500 shadow-md md:shadow-lg lg:shadow-xl">
      <div className="mt-16 ml-12 text-lg">{displayDate}</div>
      <div className="flex items-center ml-12">
        <h2 className="text-lg font-semibold">{city || "Unknown City"}</h2>
        <span className="ml-2">
          <MapPin aria-label="Location" className="h-5 w-5" />
        </span>
      </div>
      <div className="w-[250px] h-[250px] mt-[40px] self-center rounded-full overflow-hidden">
        <Image
          src={"/sun.png"}
          alt={`${condition || "Weather"} icon`}
          width={250}
          height={250}
          className="object-cover"
        />
      </div>
      <h1 className="text-[150px] ml-12 mt-[10px]">
        {dayCelcius}&deg; 
       
      </h1>
      <p className="text-[24px] ml-12 mt-[-30px]">{condition || "N/A"}</p>
      <div className="flex justify-between items-center mt-20 self-center w-64">
        <button aria-label="Home" className="p-2 hover:bg-gray-100 rounded-full">
          <House className="h-6 w-6" />
        </button>
        <button aria-label="Location" className="p-2 hover:bg-gray-100 rounded-full">
          <MapPin className="h-6 w-6" />
        </button>
        <button aria-label="Favorite" className="p-2 hover:bg-gray-100 rounded-full">
          <Heart className="h-6 w-6" />
        </button>
        <button aria-label="Profile" className="p-2 hover:bg-gray-100 rounded-full">
          <User className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

// "use client";

// import { format } from "date-fns";
// import { MapPin, House, Heart, User } from "lucide-react";
// import { Input } from "../_components/Search";
// import Image from "next/image";

// export const Left = () => {
//   const date = new Date();

//   return (
//     <div className="relative ml-[180px] mt-[20px] z-20 flex flex-col w-[414px] h-[828px] bg-white rounded-lg text-gray-500 shadow-md md:shadow-lg lg:shadow-xl">
//       <div className="mt-16 ml-12">{format(date, "MMMM, dd, yyyy")}</div>
//       <div className="flex items-center ml-12">
//         <p>Ulaanbaatar</p>
//         <span className="ml-2">
//           <MapPin aria-label="Location" />
//         </span>
//       </div>
//       <div className="w-[250px] h-[250px] mt-10 self-center rounded-full overflow-hidden">
//         <img src="/sun.png" alt="sun" />
//       </div>

//       <p className="text-[190px] ml-12 mt-[10px]">7.1&deg;</p>
//       <p className="text-[24px] ml-12 mt-[-30px]">rainy</p>
//       <div className="flex justify-between items-center mt-12 self-center w-[320px] h-8 ">
//         <House aria-label="Home" />
//         <MapPin aria-label="Location" />
//         <Heart aria-label="Favorite" />
//         <User aria-label="Profile" />
//       </div>
//     </div>
//   );
// };