import React, { Component } from "react";
import PropTypes from 'prop-types';

import './new-task-form.css';

export default class NewTaskForm extends Component {

  static defaultProps = {
    onItemAdded: () => {}
  }

  static propTypes = {
    onItemAdded: PropTypes.func
  }

  state = {
    label: ''
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    })
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <input 
          type='text' 
          className="new-task-form" 
          placeholder="What needs to be done?" 
          autoFocus
          onChange={ this.onLabelChange }
          value={ this.state.label }
        />
      </form>
      )
  }
  }
