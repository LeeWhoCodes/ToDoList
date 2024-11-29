import React, { useState } from 'react';
import Task from './Task'; // Import the Task component

const ToDoList = () => {

    //state to hold array of tasks
    const [tasksList, setTasksList] = useState([]);

    //state to hold textbox input
    const [taskName, setTaskName] = useState('');

    //function to add todo
    const addToDo = () => {
        const newTask = {
            id: Date.now(),
            text: taskName,
            checked: false,
        };
        setTasksList([...tasksList, newTask]);
        setTaskName('');
    }

    //function to check off todo
    const onChecked = (id) => {
        //need to set the task list so that it updates the dom
        //run through all the tasks and change the one with the matching id to checked
        setTasksList(
            tasksList.map((task) => task.id === id ? {...task, checked: !task.checked} : task)
        );
    };

    const tasks = [
        {id: 1, text: "task one", checked: false},
        {id: 2, text: "task two", checked: true},
        {id: 3, text: "task three", checked: false}
    ]

  return (
    <div>
        {/* I need to run throuhg the tasks list and make Task items */}
        {tasks.map((task) => (
            <Task
                id={task.id}
                text={task.text}
                checked={task.checked}
                onChecked={onChecked}
            />
        ))}

    </div>
  );
};

export default ToDoList;

