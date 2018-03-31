import React from 'react';
import '../App.css';

const Counter = ({change, handleAdd, handleSubtract}) => {
  return(
    <div>
      <button className="btn btn-primary" onClick={handleAdd}> + </button>
          <input type="text" value={change} name="counter"></input>
      <button className="btn btn-primary" onClick={handleSubtract}> - </button>
    </div>
  );
}

export default Counter;
