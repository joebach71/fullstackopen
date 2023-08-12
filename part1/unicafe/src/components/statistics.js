import { REVIEWS } from "./button";
import Total from "./total";
import Average from './average';
import Positive from './positive';
import StatisticLine from "./statisticLine";

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
      <table>
        <thead>
        <tr><td colSpan="2"><h1>statistics</h1></td></tr>
        </thead>
        <tbody>
        <tr><StatisticLine text={REVIEWS.GOOD} value={good} /></tr>
        <tr><StatisticLine text={REVIEWS.NEUTRAL} value={neutral} /></tr>
        <tr><StatisticLine text={REVIEWS.BAD} value={bad} /></tr>
        <tr><Total good={good} neutral={neutral} bad={bad} /></tr>
        <tr><Average good={good} neutral={neutral} bad={bad} /></tr>
        <tr><Positive good={good} neutral={neutral} bad={bad} /></tr>
        </tbody>
      </table>
    </>
  )
}

export default Statistics;
