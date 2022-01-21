import React from "react";
import TasksFilter from '../tasks-filter/tasks-filter'
import './footer.css';



const Footer = ({ toDo, onDeleteCompleted, onHideActive, onHideCompleted, onShowAll }) => {
    return (
      <footer className="footer">
        <span className="task-count"> { toDo } items left</span>
        <TasksFilter
          onHideActive={ () => onHideActive() }
          onHideCompleted={ () => onHideCompleted() }
          onShowAll={ () => onShowAll() }
        />
        <button 
          className="clear-completed"
          onClick={ () => onDeleteCompleted() }
          >
            Clear completed
          </button>
      </footer>
    )
  };

  export default Footer;