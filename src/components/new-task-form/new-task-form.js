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
    sumbitted: false,
    label: '',
    minutes: '',
    seconds: ''
  };

  onLabelChange = (event) => {
    this.setState(() => ({
      sumbitted: false,
    }));

    const { value, name } = event.target;

    this.setState(() => ({
      [name]: value
    }))

    if (name === 'seconds') {
      event.target.addEventListener('keyup', this.onSubmit);
    }
  };

  onSubmit = (event) => {
    
    const { label, minutes, seconds } = this.state;

    if (event.code === 'Enter' && !this.state.sumbitted) {
      this.props.addItem(label, minutes, seconds);

      this.setState(() => ({
        sumbitted: true,
        label: '',
        minutes: '',
        seconds: ''
      }));
    }
    
  };

  render() {
    return (
      <header>
        <h1>todos</h1>
        <form>
          <input
              type="text"
              name="label"
              className="new-task-form"
              placeholder="What needs to be done?"
              onChange={this.onLabelChange}
              value={this.state.label}
          />
          <input
              type="number"
              name="minutes"
              className="new-task-form new-task-form__timer"
              placeholder="Min"
              onChange={this.onLabelChange}
              value={this.state.minutes}
          />
          <input
              type="number"
              name="seconds"
              className="new-task-form new-task-form__timer"
              placeholder="Sec"
              onChange={this.onLabelChange}
              value={this.state.seconds}
          />
        </form>
      </header>
    );
  }
}
