import React, { useState } from 'react';

const ToDolists = (props) => {
  const [line, setLine] = useState(false);

  const cutIt = () => {
    setLine(true);
  };
  return (
    <>
      <div className="todo_style">
        <span onClick={cutIt}>
          <button className="cut_btn"> - </button>
        </span>
        <li style={{ textDecoration: line ? 'line-through' : 'none' }}>
          {props.text}
        </li>
        ;
      </div>
    </>
  );
};

export default ToDolists;
