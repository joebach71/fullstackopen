import { useEffect, useState } from 'react';

import Countries from './components/countries';
import Country from './components/country';
import CountryService from './services/country';

function App() {
  const [ value, setValue ] = useState('');
  const [ countries, setCountries ] = useState([]);
  const [ filtered, setFiltered ] = useState([]);
  const [ countryName, setCountryName ] = useState('');

  useEffect(() => {
    CountryService.getAll()
    .then((data) => {
      setCountries(data);
    });
  }, []);

  useEffect(() => {
    if (filtered.length === 1) {
      setCountryName(filtered[0]);
    } else {
      setCountryName('');
    }
  }, [filtered]);

  useEffect(() => {
    if (value) {
      const regExp = new RegExp(`^${value}`, 'i');
      const searched = countries.reduce((acc, item) => {
        if (regExp.test(item.name.common)) acc.push(item.name.common);
        return acc;
      }, []);
      setFiltered(searched);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChangeInput = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="App">
      find countries <input value={value} onChange={handleChangeInput} />
      <Countries countries={filtered} />
      <Country countryName={countryName} />
    </div>
  );
}

export default App;
