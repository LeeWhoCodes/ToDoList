import React from 'react';

const Task = ({ id, text, checked, onChecked }) => {



  return (
    <div>
      <p className={`${checked ? 'text-green-500' : 'text-red-500'}`}>Id is {id}, Text is {text}, checked is {checked.toString()}</p>
    </div>
  );
};

export default Task;