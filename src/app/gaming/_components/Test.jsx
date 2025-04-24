'use client';

import { Right } from "../play/_components/Right";
import { Hunt } from "../_components/Hunt";
import { useState } from "react";

const Test = ({ countries }) => {
  const [search, setSearch] = useState("");

  const huntHandler = (event) => {
    setSearch(event.target.value);
  };

  const founded = countries.flatMap((el) => {
    return el.filter((city) =>
      city.cityName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <Hunt onChange={huntHandler} value={search} founded={founded} />
      <Right />
    </div>
  );
};

export default Test;