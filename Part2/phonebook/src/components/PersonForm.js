import React from 'react';

function PersonForm({
  handleAddName,
  newName,
  handleNameChange,
  number,
  handleNumberChange,
}) {
  return (
    <div>
      <form onSubmit={handleAddName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <br />
          number: <input value={number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

export default PersonForm;
