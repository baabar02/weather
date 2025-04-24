import Test from "../_components/Test";

export default async function Home() {
  const dataJson = await fetch("https://countriesnow.space/api/v0.1/countries",);
  const cities = await dataJson.json();
  const citiesInformation = cities.data.map((el) => {
    return el.cities.map((city) => {
      return { cityName: city, country: el.country, iso: el.iso3 };
    });
  });

  return (
    <div>
      <Test countries={citiesInformation} />
    </div>
  );
}


