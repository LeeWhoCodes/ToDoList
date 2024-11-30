import React from 'react';

const Task = ({ id, text, checked, onChecked }) => {



  return (
    <div>
      <p className={`${checked ? 'text-green-500' : 'text-red-500'}`}>id is {id}, Text is {text}, checked is {checked.toString()}</p>
      <input type="checkbox" checked={checked} onChange={() => onChecked(id)}/>
    </div>
  );
};

export default Task;