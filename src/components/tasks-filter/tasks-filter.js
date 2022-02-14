import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './task-filter.css';

export const ACTIONS = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed',
};

export default class TasksFilter extends Component {
  static defaultProps = {
    hideActiveElements: () => {},
    hideCompletedElements: () => {},
    showAllElements: () => {},
  };

  static propTypes = {
    showAllElements: PropTypes.func,
    hideCompletedElements: PropTypes.func,
    hideActiveElements: PropTypes.func,
  };

  state = {
    currentStatus: ACTIONS.ALL,
  };

  onClickCompleted = () => {
    this.props.hideActiveElements();
    this.setState(() => ({
      currentStatus: ACTIONS.COMPLETED,
    }));
  };

  onClickActive = () => {
    this.props.hideCompletedElements();
    this.setState(() => ({
      currentStatus: ACTIONS.ACTIVE,
    }));
  };

  onClickAll = () => {
    this.props.showAllElements();
    this.setState(() => ({
      currentStatus: ACTIONS.ALL,
    }));
  };

  render() {
    const { currentStatus } = this.state;

    const btnAll = classNames({
      selected: currentStatus === 'All',
    });
    const btnActive = classNames({
      selected: currentStatus === 'Active',
    });
    const btnCompleted = classNames({
      selected: currentStatus === 'Completed',
    });

    return (
      <ul className="filters">
        <li>
          <button type="button" className={btnAll} onClick={this.onClickAll}>
            All
          </button>
        </li>
        <li>
          <button type="button" className={btnActive} onClick={this.onClickActive}>
            Active
          </button>
        </li>
        <li>
          <button type="button" className={btnCompleted} onClick={this.onClickCompleted}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
