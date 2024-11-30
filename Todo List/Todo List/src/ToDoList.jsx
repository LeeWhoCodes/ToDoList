import React, { useState } from 'react';
import Task from './Task'; // Import the Task component

const ToDoList = () => {

    // // test data
    // const tasks = [
    //     {id: 1, text: "task one", checked: false},
    //     {id: 2, text: "task two", checked: true},
    //     {id: 3, text: "task three", checked: false}
    // ]

    //state to hold array of tasks
    const [tasksList, setTasksList] = useState([
        {id: 1, text: "task one", checked: false},
        {id: 2, text: "task two", checked: true},
        {id: 3, text: "task three", checked: false}
    ]);

    console.log(tasksList);

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
        console.log("onChecked run");
        console.log(id);
        console.log(tasksList[1].checked)
        //need to set the task list so that it updates the dom
        //run through all the tasks and change the one with the matching id to checked
        setTasksList(
            tasksList.map((task) => task.id === id ? {...task, checked: !task.checked} : task)
        );
        console.log(tasksList[1].checked)
    };

  return (
    <div>
        {/* I need to run throuhg the tasks list and make Task items */}
        {tasksList.map((task) => (
            <Task
                id={task.id}
                text={task.text}
                checked={task.checked}
                onChecked={onChecked}
            />
        ))}

        <div className="flex justify-center items-center flex-col">
            <input className="bg-cyan-500 flex justify-center" value={taskName} onChange={(e) => setTaskName(e.target.value)}></input>
            <button onClick={() => addToDo()}>Add New Task</button>
        </div>
    </div>
  );
};

export default ToDoList;

