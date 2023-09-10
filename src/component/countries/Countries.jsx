import { useEffect, useState } from "react";
import Country from "./country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [visit, setVisit] = useState([]);

  const visitHandle = (flag) => {
    const newFlag = [...visit, flag];
    setVisit(newFlag);
  };

  return (
    <div>
      <span>Countries : {countries.length} </span>

      <div>
        {visit.map((item) => {
          <img src={item} alt="" />;
        })}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {countries.map((country) => (
          <Country
            key={country.polularation}
            country={country}
            visitHandle={visitHandle}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
