import React, { Component } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import classNames from 'classnames';

import './task.css';

export default class Task extends Component {

  static defaultProps = {
    onDeleted: () => {},
    onToggleDone: () => {},
    done: false,
  };

  static propTypes = {
    label: PropTypes.string.isRequired,
    creationDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    done: PropTypes.bool,
    id: PropTypes.string.isRequired,
  };

  state = {
    isRunning: false,
    minutes: 0,
    seconds: 0
  }

  componentDidUpdate(prevState) {
      if (this.state.seconds !== prevState.seconds) {
          this.timerID = setTimeout(
            () => this.timer(),
            1000
          );
      }
  }

  componentWillUnmount() {
    if (!this.state.isRunning) {
      clearTimeout(this.timerID);
    }
  }


  onClickPlay = () => {
      this.setState(() => ({
        isRunning: true
      }));
  }

  onClickPause = () => {
      this.setState(() => ({
        isRunning: false
      }));
  }

  timer() {

    let { minutes: min, seconds: sec } = this.state;

    sec++;        
    if (sec === 60) 
    {
        min++; 
        sec = 0;
    }
    
    if (this.state.isRunning) {
      this.setState(() => ({
        minutes: min,
        seconds: sec
      }))
    }
  }



  render() {

    const { label, creationDate, onDeleted, onToggleDone, done, id } = this.props;
    const spanClassName = classNames('description', {
      ' completed': done,
    });
  
    const date = formatDistanceToNow(new Date(creationDate), { includeSeconds: true, addSuffix: true });
    const { minutes, seconds } = this.state;

    const min = minutes < 10 ? `0${minutes}` : minutes;
    const sec = seconds < 10 ? `0${seconds}` : seconds;
  
    return (
      <div className="view">
        <input className="toggle" id={id} type="checkbox" onClick={onToggleDone} defaultChecked={done} />
        <label htmlFor={id}>
          <span className={spanClassName}>{label}</span>
          <span className='task_timer'>
                  <button type="button" className="icon icon-play" aria-label="play" onClick={this.onClickPlay} />
                  <button type="button" className="icon icon-pause" aria-label="pause" onClick={this.onClickPause} />
                  {`${min}:${sec}`}
          </span>
          <span className="created">created {date}</span>
        </label>
  
        <button type="button" className="icon icon-edit" aria-label="edit" />
        <button type="button" className="icon icon-destroy" onClick={onDeleted} aria-label="delete" />
      </div>
    );
  }
}

