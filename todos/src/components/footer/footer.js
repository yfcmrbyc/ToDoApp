import React from "react";
import TasksFilter from '../tasks-filter/tasks-filter'
import './footer.css';



const Footer = () => {
    return (
      <footer className="footer">
        <span className="task-count">1 items left</span>
        <TasksFilter />
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  };

  export default Footer;