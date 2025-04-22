import { format } from "date-fns";
import { MapPin } from "lucide-react";
import { Heart } from "lucide-react";
import { User } from "lucide-react";
import { House } from "lucide-react";

export const Right = ({ background }) => {
  const date = new Date();

  return (
    <div
      className="relative 
    flex 
    flex-col 
    w-[414px] 
    z-3 
    h-[828px] 
    ml-[200px] 
    border 1 
    border-green-400 
    rounded-[8px] 
    text-grey-300
    bg-blue-900
    "
    >
      <div className="mt-[64px] ml-[48px]"> {format(date, "yyyy-MM-dd")} </div>
      <div className="flex ml-[48px]">
        <p>Ulaanbaatar</p>

        <span className="ml-[10px]">
          <MapPin />
        </span>
      </div>
      <div className="w-[270px] h-[270px] mt-[40px] self-center  border border-green-400 rounded-full"></div>
      <p className="text-[90px]">7.1</p>
      <p>rainy</p>
      <div className="flex border mt-[100px] self-center justify-between w-[320px] h-[32px]">
        <House />
        <MapPin />
        <Heart />
        <User />
      </div>
      <div className="absolute bg-red-500  w-[170px] h-[170px] mt-[720px] ml-[400px] z-2 self-center  border border-green-400 rounded-full"></div>
    </div>
  );
};
