import React from 'react';

const Total = ({ course }) => {
  //   let sum = course.parts.reduce((acc, val) => acc + val);
  const getExcerCount = course.parts.map((item) => item.exercises);
  const sum = getExcerCount.reduce((acc, val) => acc + val, 0);

  return <p>Number of exercises {sum}</p>;
};

export default Total;
