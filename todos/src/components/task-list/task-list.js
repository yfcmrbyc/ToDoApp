import React from "react";
import Task from "../task/task";
import './task-list.css'


const TaskList = ({ todos }) => {

  const elements = todos.map(item => {

    const { id, done, isEditing, ...itemProps } = item;

    if (done) {
      return (
        <li key={ id } className='completed'>
          <Task { ...itemProps }/>
        </li>
      );
    }
    if (isEditing) {
      return (
        <li key={ id } className='editing'>
          <Task { ...itemProps }/>
          <input type='text' className="edit" defaultValue={ item.label } />
        </li>
      );
    } else {
      return (
        <li key={ id }>
          <Task { ...itemProps }/>
        </li>
      );
    }

  });
    return (
      <ul className="task-list">
        { elements }   
      </ul>
    )
  };

export default TaskList;