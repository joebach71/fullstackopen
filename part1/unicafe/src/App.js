import { useState } from 'react'

import Button, { REVIEWS } from './components/button';
import Statistics from './components/statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button value={good} func={setGood} label={REVIEWS.GOOD}/>
      <Button value={neutral} func={setNeutral} label={REVIEWS.NEUTRAL} />
      <Button value={bad} func={setBad} label={REVIEWS.BAD}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
