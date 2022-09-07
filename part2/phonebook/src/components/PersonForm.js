import React from 'react';

const PersonForm = ({ addNewPerson, newName, handlelNameChange,
    newNumber, handleNumberChange }) => (
    <form onSubmit={addNewPerson}>
        <div>
            name: <input value={newName} onChange={handlelNameChange} />
        </div>
        <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
);

export default PersonForm;