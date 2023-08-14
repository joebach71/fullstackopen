const sumExercises = (parts) => parts.reduce((sum, ele) => sum += ele.exercises, 0);

const Content = ({parts}) => {
  return (
    <>
    {parts.map((ele) => <p key={ele.id}>{ele.name} {ele.exercises}</p>)}
    <p key="total"><font style={{ "font-weight": "bold" }}>total of exercises {sumExercises(parts)}</font></p>
    </>
  )
}

export default Content;
