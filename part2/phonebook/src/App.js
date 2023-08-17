import { useState, useEffect } from 'react'

import Filter from './components/filter';
import PersonForm from './components/personForm';
import Persons from './components/persons';
import personsServices from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  
  const handleDeletePerson = (personId) => {
    if (alertConfirm(personId)) {
      personsServices.deleteById(personId)
      .then((data) => {
        const newPersons = persons.filter((person) => person.id !== personId);
        setPersons(newPersons);
      })
      .catch((e) => console.log('failed to delete', e));
    }
  }

  const alertConfirm = (id) => {
    return window.confirm([`Are you sure you want to delete Person ${id} from phonebook?`]);
  }

  useEffect(() => {
    personsServices.getAll().then(data => {
      setPersons(data)
    })
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter persons={persons} />

      <h3>Add a new</h3>

      <PersonForm setPersons={setPersons} persons={persons} 
        create={personsServices.create} update={personsServices.update}/>

      <h3>Numbers</h3>

      <Persons persons={persons} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App;
