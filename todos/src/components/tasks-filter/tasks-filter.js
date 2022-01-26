import React, { Component } from "react";
import PropTypes from 'prop-types';

import './task-filter.css';

export default class TasksFilter extends Component {

  static defaultProps = {
    onHideActive: () => {},
    onHideCompleted: () => {},
    onShowAll: () => {}
  }

  static propTypes = {
    onShowAll: PropTypes.func,
    onHideCompleted: PropTypes.func,
    onHideActive: PropTypes.func
  }

  state = {
    buttonAll: 'selected',
    buttonActive: '',
    buttonCompleted: ''
  }

  onClickCompleted = () => {
    this.props.onHideActive();
    this.setState({
      buttonAll: '',
      buttonActive: '',
      buttonCompleted: 'selected'
    })
  }

  onClickActive = () => {
    this.props.onHideCompleted();
    this.setState({
      buttonAll: '',
      buttonActive: 'selected',
      buttonCompleted: ''
    })
  }

  onClickAll = () => {
    this.props.onShowAll();
    this.setState({
      buttonAll: 'selected',
      buttonActive: '',
      buttonCompleted: ''
    })
  }

  render() {


    return (
      <ul className="filters">
        <li>
          <button 
            className={ this.state.buttonAll }
            onClick={ this.onClickAll }
            >
              All
            </button>
        </li>
        <li>
          <button
            className={ this.state.buttonActive }
            onClick={ this.onClickActive }
            >
              Active
            </button>
        </li>
        <li>
          <button 
            className={ this.state.buttonCompleted }
            onClick={ this.onClickCompleted }
            >
              Completed
            </button>
        </li>
      </ul>
    ) 
  }
}
