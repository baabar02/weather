"use client";

import { Bacasime_Antique } from "next/font/google";
import{Ring} from"../_components/Ring"
import { Left } from "./Left";
import { Right } from "./Right";
import { Smile } from "lucide-react";
import { Input } from "./Search";
import { useState } from "react";

export const Container = ({cities}) => {

const searchHandler = (event) => {
    setSearch(event.target.value)
};

const [search,setSearch ] = useState("");

  
const filteredCities = cities.filter(el=> {
// console.log(el.cities);

    if(el.cities.includes(search)) {
        return true;
    } else {
        console.log(search);
        
        console.log(el.cities);
        
    }
}
)
// console.log(filteredCities,'filtered');


  const styles = [
    { width: 140, height: 140, backgroundColor: "oklch(0.97 0 0)" },
    { width: 340, height: 340, backgroundColor: "transparent" },
    { width: 540, height: 540, backgroundColor: "transparent" },
    { width: 940, height: 940, backgroundColor: "transparent" },
  ];

 

  return (
    <>
      <div className="flex flex-col content-center w-[800px] h-[1200px] rounded-bl-[20px] rounded-tl-[20px] bg-gray-100 ">
        <Input onChange={searchHandler} value={search}/>
        <Left />
        <div className="absolute bg-orange-500  w-[170px] h-[170px] mt-[100px] mr-[400px]  self-center  rounded-full bg-gradient-to-t from-yellow-500 to-transparent "></div>
        <div className="absolute bg-orange-500  w-[175px] h-[175px] mt-[100px] mr-[400px]  self-center  rounded-full bg-gradient-to-t from-yellow-500 to-transparent blur-2xl "></div>
      </div>
      <div className="flex flex-col content-center w-[800px] h-[1200px] rounded-tr-[20px] rounded-br-[20px] bg-blue-800">
        <Right />
      </div>

      <Ring styles={styles} />
      <div className="absolute  top-1/2 left-1/2 translate-x-1/2-translate-y-1/2">
        <div className="absolute top-[67px] bg-gray-100  h-[100px] w-[100px] "></div>
        <div className="absolute top-[67px] bg-blue-800  rounded-tl-[20px]  h-[100px] w-[100px] "></div>

        <div className="absolute top-[-167px] bg-gray-100 h-[100px] w-[100px] "></div>
        <div className="absolute top-[-167px] bg-blue-800  rounded-bl-[20px] h-[100px] w-[100px] "></div>
      </div>
{/* 
      <Smile
        className="absolute
                top-1/2
                left-1/2
                transform -translate-x-1/2 -translate-y-1/2
                w-30 h-30 z-51"
      /> */}
    </>
  );
};

export default Container;