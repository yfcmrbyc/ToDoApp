import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Task from '../task/task';
import './task-list.css';

export default class TaskList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggleDone: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired,
  };

  renderTask = (todos) =>
    todos.map((item) => {
      const { isHidden, ...itemProps } = item;
      const { onDeleted, onToggleDone } = this.props;

      const liClass = classNames({
        hidden: isHidden,
      });

      return (
        <li key={item.id} className={liClass}>
          <Task {...itemProps} onDeleted={() => onDeleted(item.id)} onToggleDone={() => onToggleDone(item.id)} />
        </li>
      );
    });

  render() {
    const { todos } = this.props;
    return <ul className="task-list">{this.renderTask(todos)}</ul>;
  }
}
