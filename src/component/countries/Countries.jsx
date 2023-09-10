import { useEffect, useState } from "react";
import Country from "./country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <span>Countries : {countries.length} </span>
      {countries.map((country) => (
        <Country key={country.polularation} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
