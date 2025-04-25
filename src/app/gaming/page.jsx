import { Search } from "lucide-react";
import { Container } from "../gaming/play/_components/Container";

// https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}
// https://countriesnow.space/api/v0.1/countries

export default async function Gaming() {
  const citiesJSON = await fetch(
    "https://countriesnow.space/api/v0.1/countries"
  );

  const cities = await citiesJSON.json();

  const citiesWithCountryName = cities.data.map((el) => {
    return el.cities.map((cityName) => {
      return { cityName: cityName, countryName: el.country };
    });
  });

  // console.log(citiesWithCountryName);

  return <Container countries={citiesWithCountryName} />;
}

// const citiesWithCountryName = cities.data.map((el) => {
//   return el.cities.map((cityName) => {
//     return { cityName: cityName, countryName: el.country };
//   });
// });

// search =='e'
// console.log();

// const allCostumized = [
//   [
//     { cityName: "Erdenet", countryName: "Mongolia" },
//     { cityName: "Ulan Bator", countryName: "Mongolia" },
//     { cityName: "Uliyastai", countryName: "Mongolia" },
//   ][
//     ({ cityName: "Tokyo", countryName: "Japan" },
//     { cityName: "Kyoto", countryName: "Japan" },
//     { cityName: "Nara", countryName: "Japan" })
//   ],
// ];

// cities={cities.data}
// const sizes = [300, 200, 100];
// {sizes.map((size, index) => (

//   <div
//     key={size}
//     className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[${size}px] h-[${size}px] rounded-full ${index === sizes.length - 1 ? 'bg-gray-100' : 'bg-transparent'} border border-green-400 ${index === sizes.length - 1 ? 'flex justify-center items-center' : ''}`}
//   >
//     {index === sizes.length - 1 && <Smile />}
//   </div>
// ))}

// const sizes = [300, 200, 100];
// {sizes.map((size, index) => (
//   <div
//     key={size}
//     className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[${size}px] h-[${size}px] rounded-full ${index === sizes.length - 1 ? 'bg-gray-100' : 'bg-transparent'} border border-green-400 ${index === sizes.length - 1 ? 'flex justify-center items-center' : ''}`}
//   >
//     {index === sizes.length - 1 && <Smile />}
//   </div>
// ))}

// import { Container } from "../gaming/play/_components/Container";

// export default async function Gaming() {
//   const citiesJSON = await fetch("https://countriesnow.space/api/v0.1/countries");
//   const cities = await citiesJSON.json();

//   return <Container cities={cities.data} />;
// }
