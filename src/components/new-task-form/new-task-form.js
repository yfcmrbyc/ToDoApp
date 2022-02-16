import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';

export default class NewTaskForm extends Component {
  static defaultProps = {
    addItem: () => {},
  };

  static propTypes = {
    addItem: PropTypes.func,
  };

  state = {
    label: '',
  };

  onLabelChange = (event) => {
    this.setState(() => ({
      label: event.target.value,
    }));
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.label);

    this.setState(() => ({
      label: '',
    }));
  };

  render() {
    return (
      <header>
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="new-task-form"
            placeholder="What needs to be done?"
            onChange={this.onLabelChange}
            value={this.state.label}
          />
        </form>
      </header>
    );
  }
}
