import React from "react";
import Task from "../task/task";
import './task-list.css'


const TaskList = ({ todos, onDeleted, onToggleDone }) => {

  const elements = todos.map(item => {

    const { id, isHidden, ...itemProps } = item;

    let liClassNames = '';
    if (isHidden) {
      liClassNames += 'hidden';
    }

    return (
      <li 
        key={ id }
        className={ liClassNames }
      >
        <Task { ...itemProps }
          onDeleted={ () => onDeleted(id) }
          onToggleDone={ () => onToggleDone(id) }
        />
      </li>
    );

  });
    return (
      <ul className="task-list">
        { elements }   
      </ul>
    )
  };

export default TaskList;