import React from 'react';

const Task = ({ id, text, checked, onChecked, deleteToDo }) => {



  return (
    <div className='flex justify-center flex-col'>
      <p className={`${checked ? 'text-green-500' : 'text-red-500'}`}>id is {id}, Text is {text}, checked is {checked.toString()}</p>
      <input type="checkbox" checked={checked} onChange={() => onChecked(id)}/>
      <button onClick={() => deleteToDo(id)}>delete</button>
    </div>
  );
};

export default Task;