const Total = (props) => {
  const { contents } = props;
  const total = contents.reduce((acc, ele) => {
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
