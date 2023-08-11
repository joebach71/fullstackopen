
export const REVIEWS = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad',
};
Object.freeze(REVIEWS);

const Button = ({value, func, label}) => {
  const newValue = value + 1;
  const handleClick = () => func(newValue);
  return (
    <>
    <button onClick={handleClick} >{label}</button>
    </>
  )
}

export default Button;
