"use client";

import { format } from "date-fns";
import { MapPin, Heart, User, House } from "lucide-react";
import Image from "next/image";

export const Right = ({weather ={}}) => {
  const {city, date, condition, nightCelcius} = weather;
  const displayDate = date
  ? format(new Date(date.split("/").reverse().join("-")), "MMMM dd, yyyy")
  : format(new Date(), "MMMM dd, yyyy");

  return (
    <div className="z-12 relative flex flex-col w-[414px] h-[828px] mt-[180px] ml-[] rounded-[12px] text-gray-300 bg-[#000000] shadow-[0_0_15px_5px_rgba(68,68,68,0.5)]">
      <div className="mt-[64px] ml-[48px]">{displayDate}</div>
      <div className="flex ml-[48px]">
        <p className="text-lg font-semibold">{city || "Unknown"}</p>
        <span className="ml-[10px]">
          <MapPin />
        </span>
      </div>
      <div className=" w-[270px] h-[270px] mt-[40px] self-center rounded-full">
        {" "}
        <img src="/moon.png" alt="moon" />
      </div>
      <div className="mt-[150px]  absolute w-[280px] h-[280px] mt-[40px] self-center rounded-full blur-3xl">
        {" "}
        <img src="/moon.png" alt="moon" />
      </div>
      <div className="flex">
        <p className="text-[150px] ml-[48px] mt-[10px">{nightCelcius}&deg;</p>
      </div>
      <p className="text-[24px] ml-[48px] mt-[-30px] ">{condition || "N/A"}</p>
      <div className="flex mt-[80px] self-center justify-between w-[320px] h-[32px]">
        <House />
        <MapPin />
        <Heart />
        <User />
      </div>
      <div className="absolute w-[170px] h-[170px] bottom-[-80px] left-[400px] -translate-x-1/2   rounded-full bg-gradient-to-b from-blue-500 to-transparent shadow-lg" />
    </div>
  );
};
