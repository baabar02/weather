import { format } from "date-fns";
import { MapPin, Heart, User, House } from "lucide-react";
import Image from "next/image";

export const Right = ({ background }) => {
  const date = new Date();

  return (
    <div
      className="relative flex flex-col w-[414px] h-[828px] mt-[180px] ml-[200px] border border-green-400 rounded-[12px] text-gray-300 bg-black-900 shadow-[0_0_15px_5px_rgba(68,68,68,0.5)]"
    >
      <div className="mt-[64px] ml-[48px]">{format(date, "yyyy-MM-dd")}</div>
      <div className="flex ml-[48px]">
        <p>Ulaanbaatar</p>
        <span className="ml-[10px]">
          <MapPin />
        </span>
      </div>
      <div className="w-[270px] h-[270px] mt-[40px] self-center border border-green-400 rounded-full"><img src="/moon.png" alt="moon"/> </div>
      <p className="text-[190px] ml-[48px] mt-[10px">7.1</p>
      <p className="text-[24px] ml-[48px] mt-[-30px] ">rainy</p>
      <div className="flex border mt-[50px] self-center justify-between w-[320px] h-[32px]">
        <House />
        <MapPin />
        <Heart />
        <User />
      </div>
      <div
        className="absolute w-[170px] h-[170px] bottom-[-80px] left-[400px] -translate-x-1/2 z-10 border border-green-400 rounded-full bg-gradient-to-b from-blue-500 to-transparent shadow-lg"
      />
    </div>
  );
};

