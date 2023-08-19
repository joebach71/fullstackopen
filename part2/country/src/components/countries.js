const Countries = ({countries}) => {
  if (countries.length === 0) return <></>;
  if (countries.length > 10) return (
    <div>
    Too many matches, specify another filter
    </div>
  )
  return (
    <div>
    {countries.map((country) => <div key={country}>{country}</div>)}
    </div>
  )
}
  
export default Countries;
  