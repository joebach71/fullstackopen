const Total = (props) => {
  const { parts } = props;
  const total = parts.reduce((acc, ele) => {
    acc += ele.exercises;
    return acc;
  }, 0);
  return (
    <>
    <p>Number of exercises {total}</p>
    </>
  );
}

export default Total;
