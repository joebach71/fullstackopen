import { useState } from 'react'

import Filter from './components/filter';
import PersonForm from './components/personForm';
import Persons from './components/persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter persons={persons} />

      <h3>Add a new</h3>

      <PersonForm setPersons={setPersons} persons={persons} />

      <h3>Numbers</h3>

      <Persons persons={persons} />
    </div>
  )
}

export default App;
