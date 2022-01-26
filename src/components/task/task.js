import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import './task.css';

function Task({ label, creationDate, onDeleted, onToggleDone, done, inputId }) {
  let spanClassNames = 'description';
  if (done) {
    spanClassNames += ' completed';
  }

  return (
    <div className="view">
      <input className="toggle" id={inputId} type="checkbox" onClick={onToggleDone} />
      <label htmlFor={inputId}>
        <span className={spanClassNames}>{label}</span>
        <span className="created">
          created {formatDistanceToNow(creationDate, { includeSeconds: true, addSuffix: true })}
        </span>
      </label>
      <button type="button" className="icon icon-edit" aria-label="edit" />
      <button type="button" className="icon icon-destroy" onClick={onDeleted} aria-label="delete" />
    </div>
  );
}

Task.defaultProps = {
  creationDate: new Date(),
  onDeleted: () => {},
  onToggleDone: () => {},
  done: false,
};

Task.propTypes = {
  label: PropTypes.string.isRequired,
  creationDate: PropTypes.instanceOf(Date),
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
  inputId: PropTypes.number.isRequired,
};

export default Task;
