import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h4>Name: {name?.common}</h4>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "I want to Go"}
      </button>
      <br /> <br />
      <button onClick={() => handleVisitedCountry(country)}>
        Mark as Visited
      </button>
      <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Visited Flag</button>
    </div>
  );
};

export default Country;
