import { useEffect, useState } from 'react';
import Country from './country';

const Countries = ({countries}) => {
  const [ buttons, setButtons ] = useState([]);
  const [ labels, setLabels ] = useState([]);

  const initialize = (list, defaultValue) => list.map(() => defaultValue);

  useEffect(() => {
    const initialLabels = initialize(countries, 'show');
    const initialButtons = initialize(countries, false);
    setButtons(initialButtons);
    setLabels(initialLabels);
    // console.log(buttons);
    // console.log(labels);
  // eslint-disable-next-line
  }, [countries]);

  if (countries.length > 10) return (
    <div>
    Too many matches, specify another filter
    </div>
  )
  const displayCountry = (index) => {
    const newButtons = buttons.map((show, i) => {
      if (i === index) return !show;
      return show
    });
    setButtons(newButtons);
    const newLabel = labels.map((label, i) => {
      if (index === i) return labels[index] === 'show' ? 'hide' : 'show';
      return label;
    });
    newLabel[index] = labels[index] === 'show' ? 'hide' : 'show';
    setLabels(newLabel);
    console.log('current label', newLabel);
    console.log('current button', newButtons);
  }

  return (
    <div>
    {countries.map((country, index) => (
      <div key={country}>
        {country}<button onClick={() => displayCountry(index)} >{labels[index]}</button>
        <Country countryName={country} display={buttons[index]} />
      </div>
    ))}
    </div>
  )
}
  
export default Countries;
  