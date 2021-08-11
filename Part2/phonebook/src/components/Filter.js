import React from 'react';

function Filter({ filter, handleChange }) {
  return <input value={filter} onChange={handleChange} />;
}

export default Filter;
