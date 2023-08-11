const Total = ({good, bad, neutral}) => {
  const total = good + neutral + bad;
  return (
    <>
    All {total} <br />
    </>
  )
}

export default Total;
