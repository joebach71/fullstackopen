import Header from './header';
import Content from './content';

const Course = ({course}) => {
  return (
    <>
    <Header title={course.name} />
    <Content parts={course.parts} />
    </>
  )
}

export default Course;
