const HighestAnecdote = ({ votes, anecdotes }) => {
	const { max, index } = votes.reduce((acc, votes, index) => {
		if (votes > acc.max) {
			acc.max = votes;
			acc.index = index;
		}
		return acc;
	}, { max: -1, index: -1 });
	if (max === 0) {
		return (
			<>N/A</>
		)
	}
	return (
		<>
		{anecdotes[index]}<br />
		has {votes[index]} votes <br />
		</>
	)
}

export default HighestAnecdote;
