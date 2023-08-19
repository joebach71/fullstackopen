import { useEffect, useState } from 'react';

import CountryService from '../services/country';

const Country = ({countryName}) => {
  const [ country, setCountry ] = useState(null);

  useEffect(() => {
    if (countryName) {
      CountryService.getCountry(countryName)
      .then(data => {
        setCountry(data);
      })
      .catch(error => {
        console.log('getCountry Error', error);
        setCountry(null);
      });
      console.log('countryDetail', country);  
    } else {
      setCountry(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryName]);

  if (!country) return (
    <></>
  );
  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>capital: {country.capital[0]}</div>
      <div>area: {country.area}</div>
      <h3>Languages</h3>
      {Object.values(country.languages).map((language) => (
        <li key={language} >{language}</li>
      ))}
      <h3>flag</h3>
      <div>
      <img src={country.flags.png} alt={country.flags.alt} />
      </div>
    </div>
  )
}

export default Country;
