const Average = ({good, bad, neutral}) => {
  /**
   * ave = (good - bad) / (good + bad + neutral)
   */
  const total = good + bad + neutral;
  if (total === 0) return <>Average N/A <br /></>
  const average = (good - bad) / total;
  return (
    <>
    <td>Average</td><td>{average}</td>
    </>
    
  )
}

export default Average;
