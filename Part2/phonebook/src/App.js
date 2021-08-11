import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  //Funtion to create a new name object, alrt if name is already there, add name if not, reset input values
  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: number,
    };
    persons.find((person) => person.name === newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(nameObject));

    setNewName('');
    setNumber('');
  };

  //handle name input change
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  //handle number input change
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  };

  //handle filter change

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with
      <Filter filter={filter} handleChange={handleFilterChange} />
      <h3>Add a new </h3>
      <PersonForm
        handleAddName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        number={number}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;
