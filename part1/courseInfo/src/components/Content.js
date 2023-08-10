const Content = (props) => {
  const { contents } = props;
  return (
    <>
      {contents.map((ele, index) => {
        const { part, exercises } = ele;
        return (
          <p key="{part}">
            {part} {exercises}
          </p>  
        )
      })}
    </>
  )
}

export default Content;
