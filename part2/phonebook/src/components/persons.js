
const Persons = ({persons, handleDeletePerson}) => {
  return (
    <>
    <h2>Numbers</h2>
    {persons.map((person) => (
    <div key={person.id}>{person.name} {person.number}
      <button onClick={() => handleDeletePerson(person.id)} >delete</button>
    </div>
    ))}
    </>
  )
}

export default Persons;