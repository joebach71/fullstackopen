import Part from './Part';

const Content = (props) => {
  const { parts } = props;
  return (
    <>
      {parts.map((ele) => {
        const { part, exercises } = ele;
        return (<Part key={part} part={part} exercises={exercises} />)
      })}
    </>
  )
}

export default Content;
