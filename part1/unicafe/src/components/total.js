const Total = ({good, bad, neutral}) => {
  const total = good + neutral + bad;
  return (
    <>
    <td>All</td><td>{total}</td>
    </>
  )
}

export default Total;
