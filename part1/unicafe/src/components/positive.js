const Positive = ({good, bad, neutral}) => {
  const total = good + bad + neutral;
  if (!total) return <>Positive 0 <br /></>
  const positive = good / total * 100;
  return (
    <>
    Positive {positive}% <br />
    </>
  )
}

export default Positive;
