import React, { useState } from 'react';
import './style.css';
import ToDolists from './ToDolists';

const App = () => {
  const [naam, setNaam] = useState('');
  const [item, itemValue] = useState([]);

  const addEvents = (event) => {
    setNaam(event.target.value);
  };

  const itemStore = () => {
    itemValue((preVal) => {
      return [...preVal, naam];
    });
    setNaam('');
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo LIST</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Items"
            name="add"
            value={naam}
            onChange={addEvents}
          />
          <button onClick={itemStore}> + </button>
          <ol>
            {/*<li>{naam}</li>*/}

            {item.map((itemval,index) => {
              return <ToDolists text = {itemval} key ={index}/>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
