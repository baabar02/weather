"use client";

import { format } from "date-fns";
import { MapPin, House, Heart, User } from "lucide-react";
import { Input } from "../_components/Search";
import Image from "next/image";

export const Left = () => {
  const date = new Date();

  return (
    <div className="relative ml-[180px] mt-[20px] z-50 flex flex-col w-[414px] h-[828px] bg-white rounded-lg text-gray-500 shadow-md md:shadow-lg lg:shadow-xl">
      <div className="mt-16 ml-12">{format(date, "MMMM d, yyyy")}</div>
      <div className="flex items-center ml-12">
        <p>Ulaanbaatar</p>
        <span className="ml-2">
          <MapPin aria-label="Location" />
        </span>
      </div>
      <div className="w-[250px] h-[250px] mt-10 self-center rounded-full overflow-hidden">
        <img src="/sun.png" alt="sun" />
      </div>
    
      <p className="text-[190px] ml-12 mt-[10px]">7.1&deg;</p>
      <p className="text-[24px] ml-12 mt-[-30px]">rainy</p>
      <div className="flex justify-between items-center mt-12 self-center w-[320px] h-8 ">
        <House aria-label="Home" />
        <MapPin aria-label="Location" />
        <Heart aria-label="Favorite" />
        <User aria-label="Profile" />
      </div>
    </div>
  );
};
