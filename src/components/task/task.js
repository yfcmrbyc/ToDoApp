import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import classNames from 'classnames';

import './task.css';

function Task({ label, creationDate, onDeleted, onToggleDone, done, id }) {
  const spanClassName = classNames('description', {
    ' completed': done,
  });

  const date = formatDistanceToNow(new Date(creationDate), { includeSeconds: true, addSuffix: true });

  return (
    <div className="view">
      <input className="toggle" id={id} type="checkbox" onClick={onToggleDone} defaultChecked={done} />
      <label htmlFor={id}>
        <span className={spanClassName}>{label}</span>
        <span className="created">created {date}</span>
      </label>
      <button type="button" className="icon icon-edit" aria-label="edit" />
      <button type="button" className="icon icon-destroy" onClick={onDeleted} aria-label="delete" />
    </div>
  );
}

Task.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
  done: false,
};

Task.propTypes = {
  label: PropTypes.string.isRequired,
  creationDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

export default Task;
