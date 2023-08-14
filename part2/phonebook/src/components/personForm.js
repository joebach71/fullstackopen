import { useState } from 'react';

const PersonForm = (props) => {
  const { persons, setPersons } = props;
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  
  const duplicatedName = () => {
    const duplicate = persons.filter((person) => person.name === newName);
    if (duplicate.length) return true;
    return false;
  }

  const alertWarning = () => {
    window.alert([`${newName} is already added to phonebook`]);
    setNewName('');
  }

  const addNewPhone = (event) => {
    event.preventDefault();
    if (duplicatedName()) return alertWarning();
    const personObject = {
      name: newName,
      number: newNumber
    };
    const newPersons = persons.concat(personObject);
    setPersons(newPersons);
    setNewName('');
    setNewNumber('');
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
