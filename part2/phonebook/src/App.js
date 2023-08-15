import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/filter';
import PersonForm from './components/personForm';
import Persons from './components/persons';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, []);

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
