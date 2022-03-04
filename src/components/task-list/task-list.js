import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Task from '../task/task';
import './task-list.css';

function TaskList({ todos, onDeleted, onToggleDone }) {
  const renderTask = (arr) =>
    arr.map((item) => {
      const { isHidden, ...itemProps } = item;

      const liClass = classNames({
        hidden: isHidden,
      });

      return (
        <li key={item.id} className={liClass}>
          <Task {...itemProps} onDeleted={() => onDeleted(item.id)} onToggleDone={() => onToggleDone(item.id)} />
        </li>
      );
    });

  return <ul className="task-list">{renderTask(todos)}</ul>;
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
};

export default TaskList;
