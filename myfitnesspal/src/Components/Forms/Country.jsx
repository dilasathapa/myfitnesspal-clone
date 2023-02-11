import React, { useState } from 'react';
import "./personalData.css";

const countries = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Åland Islands', code: 'AX' },
  { name: 'Albania', code: 'AL' },
  {name: 'India', code: 'In'}
];

const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleChange = (event) => {
    const selectedCode = event.target.value;
    const selected = countries.find((country) => country.code === selectedCode);
    setSelectedCountry(selected);
  };

  return (
    <select id='country_select' value={selectedCountry.code} onChange={handleChange}>
      {countries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;