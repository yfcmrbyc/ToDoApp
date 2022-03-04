import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';

function NewTaskForm({ addItem }) {
  const [label, setLabel] = useState('');

  const onLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addItem(label);

    setLabel('');
  };

  return (
    <header>
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="new-task-form"
          placeholder="What needs to be done?"
          onChange={onLabelChange}
          value={label}
        />
      </form>
    </header>
  );
}

NewTaskForm.defaultProps = {
  addItem: () => {},
};

NewTaskForm.propTypes = {
  addItem: PropTypes.func,
};

export default NewTaskForm;
