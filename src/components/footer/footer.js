import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../tasks-filter/tasks-filter';
import './footer.css';

function Footer({ toDo, onDeleteCompleted, hideActiveElements, hideCompletedElements, showAllElements }) {
  return (
    <footer className="footer">
      <span className="task-count"> {toDo} items left</span>
      <TasksFilter
        hideActiveElements={() => hideActiveElements()}
        hideCompletedElements={() => hideCompletedElements()}
        showAllElements={() => showAllElements()}
      />
      <button type="button" className="clear-completed" onClick={onDeleteCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  onDeleteCompleted: () => {},
  toDo: 0,
};

Footer.propTypes = {
  toDo: PropTypes.number,
  onDeleteCompleted: PropTypes.func,
  hideActiveElements: PropTypes.func.isRequired,
  hideCompletedElements: PropTypes.func.isRequired,
  showAllElements: PropTypes.func.isRequired,
};

export default Footer;
