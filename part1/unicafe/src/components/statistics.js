import { REVIEWS } from "./button";
import Total from "./total";
import Average from './average';
import Positive from './positive';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  if (!total) return (
    <>
    <h1>statistics</h1>
    No feedback given
    </>
  );
  
  return (
    <>
      <h1>statistics</h1>
      {REVIEWS.GOOD} {good}<br/>
      {REVIEWS.NEUTRAL} {neutral}<br/>
      {REVIEWS.BAD} {bad}< br/>
      <Total good={good} neutral={neutral} bad={bad} />
      <Average good={good} neutral={neutral} bad={bad} />
      <Positive good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default Statistics;
