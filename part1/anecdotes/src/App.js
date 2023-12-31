import { useState } from 'react'
import HighestAnecdote from './components/highestAnecdote';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(() => 0));

  const getRandom = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    console.log('randomNum', randomNum);
    setSelected(randomNum);
  }

  const incrementVotes = () => {
    console.log('selected', selected);
    // const newVotes = votes.map((count, index) => {
    //   // console.log('count', count, ' ', index);
    //   if (selected === index) count += 1;
    //   return count;
    // });
    console.log('votes', votes);
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br/>
      has {votes[selected]} votes<br/>
      <button onClick={incrementVotes} >vote</button><button onClick={getRandom} >next anecdotes</button>
      <h1>Anecdote with most votes</h1>
      <HighestAnecdote votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App;
