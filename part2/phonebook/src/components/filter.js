
import { useState } from 'react';

const Filter = (props) => {
  const { persons } = props;
  const [filtered, setFiltered] = useState([]);

  const handleFilterPhoneBook = (event) => {
    const regExp = new RegExp(event.target.value, 'i');
    setFiltered(persons.filter((person) => regExp.test(person.name)));
  }

  return (
    <>
    <div>
      filter shown with: <input onChange={handleFilterPhoneBook} />
    </div>
    <div>filterd: {filtered.map((person) => <div key={person.name} >{person.name} {person.number}</div>)}</div>
    </>
  );
}

export default Filter;
