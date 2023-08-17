import { useState } from 'react';

const PersonForm = (props) => {
  const { persons, setPersons, create, update } = props;
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  
  const duplicatedName = () => {
    const duplicate = persons.find((person) => person.name === newName);
    return duplicate;
  }

  const alertConfirm = (person) => {
    const result = window.confirm([`${person.name} is already added to phonebook, replace the old number with a new one?`]);
    if (result) {
      person.number = newNumber;
      update(person.id, person).then((response) => {
        const newPersons = persons.map((person) => {
          if (person.id === response.id) return response;
          return person;
        });
        setPersons(newPersons);
      });
    }
    setNewName('');
  }

  const addNewPhone = (event) => {
    event.preventDefault();
    const dup = duplicatedName();
    if (dup) return alertConfirm(dup);
    const personObject = {
      name: newName,
      number: newNumber
    };
    create(personObject).then((date) => {
      const newPersons = persons.concat(date);
      setPersons(newPersons);
      setNewName('');
      setNewNumber('');  
    })
  }

  const handleChangeInputName = (event) => {
    setNewName(event.target.value);
  }
  const handleChangeInputPhone = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <>
    <h2>Add a new</h2>
    <form>
      <div>
        name: <input onChange={handleChangeInputName} value={newName} />
      </div>
      <div>number: <input value={newNumber} onChange={handleChangeInputPhone}/></div>
      <div>
        <button type="submit" onClick={addNewPhone}>add</button>
      </div>
    </form>
    </>
  )
}

export default PersonForm;
