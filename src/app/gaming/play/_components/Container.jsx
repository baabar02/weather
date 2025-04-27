"use client";

import { Ring } from "../_components/Ring";
import { Left } from "./Left";
import { Right } from "./Right";
import { Search } from "./Search";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export const Container = ({ countries }) => {
  const styles = [
    { width: 140, height: 140, backgroundColor: "oklch(0.97 0 0)" },
    { width: 340, height: 340, backgroundColor: "transparent" },
    { width: 540, height: 540, backgroundColor: "transparent" },
    { width: 940, height: 940, backgroundColor: "transparent" },
  ];

  const [clickedCityName, setClickedCityName] = useState("");
  const [weather, setWeather] = useState({
    date: "",
    city: "",
    condition: "",
    dayCelcius: "",
    nightCelcius: "",
  });

  console.log(weather);
  
  const [search, setSearch] = useState("");
  const [loading,setLoading]= useState(false)

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const clickHandler = (cityName) => {
    console.log(cityName);
    setClickedCityName(cityName);
    setSearch("");
  };

  const filteredCities = countries.flatMap((country) =>
    country.filter((city) =>
      city.cityName.toLowerCase().includes(search.toLowerCase())
    )
  );

  useEffect(() => {
    setLoading(true)
    const fetchWeather = async () => {

        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=899d9c2c0f5845838dc70138240912&q=${clickedCityName}`
        );
  
        const result = await response.json();
        const todayWeather = result.forecast?.forecastday?.[0]?.day;

        console.log(todayWeather); // Log the todayWeather object

        const data = {
          date: format(new Date(), "dd/MM/yyyy"),
          city: clickedCityName,
          condition: todayWeather.condition.text,
          dayCelcius: todayWeather.maxtemp_c,
          nightCelcius: todayWeather.mintemp_c,
        };
        setWeather(data);
    
        // setWeather({
        //   date: "",
        //   city: clickedCityName,
        //   condition: "",
        //   dayCelcius: "",
        //   nightCelcius: "",
        // });
      }
 
    fetchWeather();
    setLoading(false)
  }, [clickedCityName]);

  return (
    <>
      <div className="flex flex-col items-center w-full max-w-[800px] min-h-[600px] rounded-bl-[20px] rounded-tl-[20px] bg-gray-100">
        <Search
          onChange={searchHandler}
          value={search}
          filteredCities={filteredCities}
          clickHandler={clickHandler}
        />
        <Left weather={weather} loading={loading}/> 
         <p className="text-red-500 mt-4"></p>
        <div className="absolute w-[170px] h-[170px] mt-[100px] ml-[-400px] rounded-full bg-gradient-to-t from-yellow-500 to-transparent z-10"></div>
        <div className="absolute w-[175px] h-[175px] mt-[100px] ml-[-400px] rounded-full bg-gradient-to-t from-yellow-500 to-transparent blur-2xl z-10"></div>
      </div>
      <div className="flex flex-col items-center w-full max-w-[800px] min-h-[600px] rounded-tr-[20px] rounded-br-[20px] bg-blue-800">
        <Right weather={weather} loading={loading}
         />
        
         
      </div>
      <Ring styles={styles} />
      <div className="absolute top-1/2 left-1/2 translate-x-1/2 -translate-y-1/2">
        <div className="absolute top-[67px] bg-gray-100 h-[100px] w-[100px]"></div>
        <div className="absolute top-[67px] bg-blue-800 rounded-tl-[20px] h-[100px] w-[100px]"></div>
        <div className="absolute top-[-167px] bg-gray-100 h-[100px] w-[100px]"></div>
        <div className="absolute top-[-167px] bg-blue-800 rounded-bl-[20px] h-[100px] w-[100px]"></div>
      </div>
    </>
  );
};
      {/* 
      <Smile
        className="absolute
                top-1/2
                left-1/2
                transform -translate-x-1/2 -translate-y-1/2
                w-30 h-30 z-51"
      /> */}

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
