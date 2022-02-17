import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './task-timer.css';

export default class Timer extends Component {

    static propTypes = {
        minutes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        seconds: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        done: PropTypes.bool.isRequired
    }

    state = {
        isRunning: false,
        minutes: Number(this.props.minutes),
        seconds: Number(this.props.seconds)
    };

    componentDidMount() {
        this.timerID = setTimeout(() => this.timer(), 1000);
      }
    
      componentDidUpdate(prevState) {
        if (this.state.seconds !== prevState.seconds) {
          this.timerID = setTimeout(() => this.timer(), 1000);
        }
      }
    
      componentWillUnmount() {
        clearTimeout(this.timerID);
      }
    
      onClickPlay = () => {
        this.setState(() => ({
          isRunning: true,
        }));
      };
    
      onClickPause = () => {
        this.setState(() => ({
          isRunning: false,
        }));
      };
    
      timer() {
        let { minutes: min, seconds: sec} = this.state;
    
        if (sec === 0) {
          if (min === 0) {
            this.setState(() => ({
              isRunning: false
            }));
          }
          min--;
          sec = 59;
        } 
        sec--;
    
        if (this.state.isRunning && !this.props.done) {
          this.setState(() => ({
            minutes: min,
            seconds: sec,
          }));
        }
      }

    render() {

        const { minutes, seconds } = this.state;

        const min = minutes < 10 ? `0${minutes}` : minutes;
        const sec = seconds < 10 ? `0${seconds}` : seconds;

        return (
            <span className="task_timer">
                <button type="button" className="icon icon-play" aria-label="play" onClick={this.onClickPlay} />
                <button type="button" className="icon icon-pause" aria-label="pause" onClick={this.onClickPause} />
                {`${min}:${sec}`}
            </span>
        );
    }
}