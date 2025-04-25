"use client";

// import { Bacasime_Antique } from "next/font/google";
import { Ring } from "../_components/Ring";
import { Left } from "./Left";
import { Right } from "./Right";
import { SearchIcon, Smile } from "lucide-react";
import { Search } from "./Search";
import { useEffect, useState } from "react";
import { format, formatDate } from "date-fns";

//api.weatherapi.com/v1/forecast.json?key=899d9c2c0f5845838dc70138240912&q=$%7BcityName%7D

export const Container = ({ countries, date }) => {
  const styles = [
    { width: 140, height: 140, backgroundColor: "oklch(0.97 0 0)" },
    { width: 340, height: 340, backgroundColor: "transparent" },
    { width: 540, height: 540, backgroundColor: "transparent" },
    { width: 940, height: 940, backgroundColor: "transparent" },
  ];

  const [clickedCityName, setclickedCityName] = useState("Ulan Bator");
  const [weather, setWeather] = useState({
    city: "",
    condition: "",
    dayCelcius: "",
    nightCelcius: "",
  });

  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
    // console.log(event.target.value);
  };

  const clickHandler = (param) => {
    console.log(clickHandler);

    setclickedCityName(param);
    setSearch("");
  };
  console.log(clickedCityName, "sad");
  const oldogsod = countries.flatMap((el) => {
    const filteredCities = el.filter((city) => {
      if (city.cityName.toLowerCase().includes(search)) {
        return true;
      }
    });
    return filteredCities;
  });
  useEffect(() => {
    const fetchWeather = async () => {
      const resultJSOn = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=899d9c2c0f5845838dc70138240912&q=${clickedCityName}`
      );

      const result = await resultJSOn.json();

      const todayWeather = result.forecast.forecastday[0].day;
      const data = {
        city: clickedCityName,
        condition: todayWeather.condition.text,
        dayCelcius: todayWeather.maxtemp_c,
        nightCelcius: todayWeather.mintemp_c,
      };
      setWeather(data);
    };
    fetchWeather();
  }, [clickedCityName]);
  return (
    <>
      <div className="flex flex-col content-center w-[800px] h-[1200px] rounded-bl-[20px] rounded-tl-[20px] bg-gray-100 ">
        <Search
          onChange={searchHandler}
          value={search}
          oldogsod={oldogsod}
          clickHandler={clickHandler}
        />
        <Left />
        <div className="absolute bg-orange-500  w-[170px] h-[170px] mt-[100px] mr-[400px]  self-center  rounded-full bg-gradient-to-t from-yellow-500 to-transparent z-[1]"></div>
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

// const filteredCities = cities.filter((el) => {
//   // console.log(el.cities);

//   if (el.cities.includes(search)) {
//     return true;
//   } else {
//     console.log(search);

//     console.log(el.cities);
//   }
// });
// console.log(filteredCities, "filtered");
// const oldogsod = countries.flatMap((el) => {
//   const filteredCities = el.filter((city) => {
//     if (city.cityName.toLowerCase().includes(search)) {
//       return true;
//     }
//   });
//   return filteredCities;
// });

// "use client";

// import { useState, useEffect, useCallback } from "react";
// import { Ring } from "../_components/Ring";
// import { Left } from "./Left";
// import { Right } from "./Right";
// import { Input } from "./Search";

// export const Container = ({ cities }) => {
//   const [search, setSearch] = useState("");
//   const [debouncedSearch, setDebouncedSearch] = useState("");

//   // Debounce search input
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedSearch(search);
//     }, 300);
//     return () => clearTimeout(handler);
//   }, [search]);

//   const searchHandler = (event) => {
//     setSearch(event.target.value);
//   };

//   // Filter cities using debounced search
//   const filteredCities = cities.filter((country) =>
//     country.cities.some((city) =>
//       city.toLowerCase().includes(debouncedSearch.toLowerCase())
//     )
//   );

//   const cityNames = filteredCities
//     .flatMap((country) => country.cities)
//     .filter((city) => city.toLowerCase().includes(debouncedSearch.toLowerCase()));

//   const styles = [
//     { width: 140, height: 140, backgroundColor: "oklch(0.97 0 0)" },
//     { width: 340, height: 340, backgroundColor: "transparent" },
//     { width: 540, height: 540, backgroundColor: "transparent" },
//     { width: 940, height: 940, backgroundColor: "transparent" },
//   ];

//   return (
//     <>
//       <div className="flex flex-col content-center w-[800px] h-[1200px] rounded-bl-[20px] rounded-tl-[20px] bg-gray-100">
//         <Input onChange={searchHandler} value={search} cityNames={cityNames} />
//         <Left />
//         <div className="absolute bg-orange-500 w-[170px] h-[170px] mt-[100px] mr-[400px] self-center rounded-full bg-gradient-to-t from-yellow-500 to-transparent"></div>
//         <div className="absolute bg-orange-500 w-[175px] h-[175px] mt-[100px] mr-[400px] self-center rounded-full bg-gradient-to-t from-yellow-500 to-transparent blur-2xl"></div>
//       </div>
//       <div className="flex flex-col content-center w-[800px] h-[1200px] rounded-tr-[20px] rounded-br-[20px] bg-blue-800">
//         <Right />
//       </div>

//       <Ring styles={styles} />
//       <div className="absolute top-1/2 left-1/2 translate-x-1/2 -translate-y-1/2">
//         <div className="absolute top-[67px] bg-gray-100 h-[100px] w-[100px]"></div>
//         <div className="absolute top-[67px] bg-blue-800 rounded-tl-[20px] h-[100px] w-[100px]"></div>
//         <div className="absolute top-[-167px] bg-gray-100 h-[100px] w-[100px]"></div>
//         <div className="absolute top-[-167px] bg-blue-800 rounded-bl-[20px] h-[100px] w-[100px]"></div>
//       </div>
//     </>
//   );
// };

// export default Container;
