// "use client";

// import { Right } from "../play/_components/Right";
// import { Hunt } from "../_components/Hunt";
// import { useState } from "react";
// import { Proposal } from "./Proposal";

// const Test = ({ countries }) => {


//   const [proposedCityName, setProposedCityName]=useState("Ulan bator");

//   const [search, setSearch] = useState("");
 
//   const huntHandler = (event) => {
//     setSearch(event.target.value);
//     setSearch("")
//   };

//   const clickHandler = (param) => {
//     setProposedCityName(param)
//   }
//   console.log(setProposedCityName,"uuuu");
  
//   const founded = countries.flatMap((el) => {
//     return el.filter((city) =>
//       city.cityName.toLowerCase().includes(search.toLowerCase())
//     );
//   });

//   return (
//     <div>
//       <Hunt onChange={huntHandler} value={search} founded={founded} clickHandler={clickHandler} />
//       <Proposal founded={founded}  clickHandler={clickHandler} />
//       <Right />
//     </div>
//   );
// };

// export default Test;

"use client";

import { Right } from "../play/_components/Right";
import { Hunt } from "../_components/Hunt";
import { Proposal } from "./Proposal";
import { useState, useEffect } from "react";
import { format } from "date-fns";

const Test = ({ countries }) => {

  const [proposedCityName, setProposedCityName] = useState("");
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({
    date: "",
    city: "",
    condition: "", 
    dayCelcius: "",
    nightCelcius: "",
  });
  const [loading, setLoading] = useState(false);

  const huntHandler = (event) => {
    setSearch(event.target.value);
  };

  const clickHandler = (param) => {
    setProposedCityName(param);
    setSearch(""); // Clear search input after selection
  };

  console.log(proposedCityName, "uuuu");

  const founded = countries.flatMap((el) =>
    el.filter((city) =>
      city.cityName.toLowerCase().includes(search.toLowerCase())
    )
  );

  useEffect(() => {
    const fetchWeather = async () => {
    setLoading(true)
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=899d9c2c0f5845838dc70138240912&q=${proposedCityName}`
        );
        

        const result = await response.json();
        const todayWeather = result.forecast?.forecastday?.[0]?.day;

        const data = {
          date: format(new Date(), "dd/MM/yyyy"),
          city: proposedCityName,
          condition: todayWeather.condition.text,
          dayCelcius: todayWeather.maxtemp_c,
          nightCelcius: todayWeather.mintemp_c,
        };
        setWeather(data);
        setLoading(false)
    };
    fetchWeather();
  }, [proposedCityName]);

  return (
    <div>
      <Hunt
        onChange={huntHandler}
        value={search}
        founded={founded}
        clickHandler={clickHandler}
      />
      <Right weather={weather} loading={loading}/>
      {<p className="text-red-500 mt-4"></p>}
    </div>
  );
};

export default Test;