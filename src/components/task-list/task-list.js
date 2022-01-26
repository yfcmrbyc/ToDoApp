import React from 'react';
import PropTypes from 'prop-types';

import Task from '../task/task';
import './task-list.css';

function TaskList({ todos, onDeleted, onToggleDone }) {
  const elements = todos.map((item) => {
    const { id, isHidden, ...itemProps } = item;

    let liClassNames = '';
    if (isHidden) {
      liClassNames += 'hidden';
    }

    return (
      <li key={id} className={liClassNames}>
        <Task {...itemProps} onDeleted={() => onDeleted(id)} onToggleDone={() => onToggleDone(id)} />
      </li>
    );
  });
  return <ul className="task-list">{elements}</ul>;
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
};

export default TaskList;
