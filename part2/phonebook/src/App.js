import { useState, useEffect } from 'react';
import axios from 'axios'

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled');
        setPersons(response.data)
      });
  }, []);

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterName));

  const addNewPerson = (event) => {
    event.preventDefault();
    console.log(persons.findIndex(person => person.name === newName));

    if (persons.findIndex((person) => person.name === newName) === -1) {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      };
      setPersons(persons.concat(personObject));
    } else {
      window.alert(`${newName} is already added to phonebook`);
    };
    setNewName('');
    setNewNumber('');
  };

  const handleFilterName = (event) => {
    console.log(event.target.value);
    setFilterName(event.target.value);
    if (filterName === '') {
      setShowAll(true);
    } else {
      setShowAll(false);
    };

  };
  const handlelNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phoneboook</h2>
      <Filter filterName={filterName} handleFilterName={handleFilterName} />
      <h2>add a new</h2>
        <PersonForm addNewPerson={addNewPerson} 
          newName={newName} handlelNameChange={handlelNameChange}
          newNumber={newNumber} handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
      {personsToShow.map((person, i) =>
        <Persons key={person.id} name={person.name} number={person.number} />
      )}
    </div>
  );
}

export default App;
