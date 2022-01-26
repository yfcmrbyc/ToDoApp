import React from "react";
import PropTypes from 'prop-types';

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
          onClick={ onDeleteCompleted }
          >
            Clear completed
          </button>
      </footer>
    )
  };

  Footer.defaultProps = {
    onDeleteCompleted: () => {},
    toDo: 0
  }

  Footer.propTypes = {
    toDo: PropTypes.number,
    onDeleteCompleted: PropTypes.func,
    onHideActive: PropTypes.func.isRequired,
    onHideCompleted: PropTypes.func.isRequired,
    onShowAll: PropTypes.func.isRequired
  }

  export default Footer;