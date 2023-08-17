
const Persons = ({persons, handleDeletePerson}) => {
  return (
    <>
    {persons.map((person) => (
    <div key={person.id}>{person.name} {person.number}
      <button onClick={() => handleDeletePerson(person.id)} >delete</button>
    </div>
    ))}
    </>
  )
}

export default Persons;