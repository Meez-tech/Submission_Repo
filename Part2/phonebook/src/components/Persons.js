import React from 'react';

function Persons({ persons, filter }) {
  return (
    <div>
      {persons
        .filter((person) => person.name.includes(filter.toLowerCase()))
        .map((person) => (
          <li style={{ listStyle: 'none' }} key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
    </div>
  );
}

export default Persons;
