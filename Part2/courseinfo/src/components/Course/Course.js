import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

function Course({ course }) {
  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default Course;