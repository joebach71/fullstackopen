import { useState, useEffect } from 'react'

import Notification, { NOTIFICATION_TYPE } from './components/notification';
import Filter from './components/filter';
import PersonForm from './components/personForm';
import Persons from './components/persons';
import personsServices from './services/phonebook';

import './styles/index.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState(null);

  const handleDeletePerson = (personId) => {
    const deleted = persons.find((person) => person.id === personId);
    if (alertConfirm(deleted)) {
      personsServices.deleteById(personId)
      .then((data) => {
        setMessage({
          text: `Deleted ${deleted.name}`,
          type: NOTIFICATION_TYPE.INFO
        });
        const newPersons = persons.filter((person) => person.id !== personId);
        setPersons(newPersons);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      })
      .catch((e) => {
        console.log('failed to delete', e);
        setMessage({
          text: `Information of ${deleted.name} has already been removed from server`,
          type: NOTIFICATION_TYPE.ERROR,
        });
        // need to get latest persons and update
        personsServices.getAll().then(data => {
          setPersons(data)
        });
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
    }
  }

  const alertConfirm = (person) => {
    return window.confirm([`Are you sure you want to delete Person ${person.name} from phonebook?`]);
  }

  useEffect(() => {
    personsServices.getAll().then(data => {
      setPersons(data)
    })
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} setMessage={setMessage} />
      <Filter persons={persons} />

      <PersonForm setPersons={setPersons} persons={persons} 
        create={personsServices.create} update={personsServices.update}
        message={message} setMessage={setMessage}
      />

      <Persons persons={persons} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App;
