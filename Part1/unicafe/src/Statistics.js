import React from 'react';

function Statistics({ text, value }) {
  return (
    <tr>
      <td>
        {text} {value}
      </td>
    </tr>
  );
}

export default Statistics;
