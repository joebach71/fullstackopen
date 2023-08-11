import { REVIEWS } from "./button";
const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h1>statistics</h1>
      {REVIEWS.GOOD} {good}<br/>
      {REVIEWS.NEUTRAL} {neutral}<br/>
      {REVIEWS.BAD} {bad}< br/>
    </>
  )
}

export default Statistics;
