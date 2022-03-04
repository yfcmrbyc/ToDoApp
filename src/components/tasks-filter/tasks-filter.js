import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './task-filter.css';

function TasksFilter({ hideActiveElements, hideCompletedElements, showAllElements }) {
  const [status, setStatus] = useState('All');

  const onClickCompleted = () => {
    hideActiveElements();
    setStatus(() => 'Completed');
  };

  const onClickActive = () => {
    hideCompletedElements();
    setStatus(() => 'Active');
  };

  const onClickAll = () => {
    showAllElements();
    setStatus(() => 'All');
  };

  const btnAll = classNames({
    selected: status === 'All',
  });
  const btnActive = classNames({
    selected: status === 'Active',
  });
  const btnCompleted = classNames({
    selected: status === 'Completed',
  });

  return (
    <ul className="filters">
      <li>
        <button type="button" className={btnAll} onClick={onClickAll}>
          All
        </button>
      </li>
      <li>
        <button type="button" className={btnActive} onClick={onClickActive}>
          Active
        </button>
      </li>
      <li>
        <button type="button" className={btnCompleted} onClick={onClickCompleted}>
          Completed
        </button>
      </li>
    </ul>
  );
}

TasksFilter.defaultProps = {
  hideActiveElements: () => {},
  hideCompletedElements: () => {},
  showAllElements: () => {},
};

TasksFilter.propTypes = {
  showAllElements: PropTypes.func,
  hideCompletedElements: PropTypes.func,
  hideActiveElements: PropTypes.func,
};

export default TasksFilter;
