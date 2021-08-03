import React, { useState } from 'react';
import Button from './Button';
import Statistics from './Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [goodArr, setGoodArr] = useState([]);
  const [neutralArr, setneutralArr] = useState([]);
  const [badArr, setbadArr] = useState([]);

  const handleGoodClick = () => {
    setGood(good + 1);
    setGoodArr([...goodArr, 1]);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setneutralArr([...neutralArr, 0]);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
    setbadArr([...badArr, -1]);
  };

  //Join Arrays into one
  const joinArr = goodArr.concat(neutralArr, badArr);

  //Calculate the avaregae of the summed array
  var avg = joinArr.reduce((p, c, _, a) => p + c / a.length, 0);

  //Sum All values
  const sumAll = good + neutral + bad;

  //Percentage of Positive
  const percentage = (good / sumAll) * 100;

  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />

      <h2>Statistics</h2>
      {joinArr.length === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <Statistics text="Good" value={good} />

            <Statistics text="Neutral" value={neutral} />

            <Statistics text="Bad" value={bad} />

            <Statistics text="All" value={sumAll} />

            <Statistics text="Average" value={avg} />

            <Statistics text="Positive" value={`${percentage} %`} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
