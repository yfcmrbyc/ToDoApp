import React, { Component }from "react";
import PropTypes from 'prop-types';

import { formatDistanceToNow } from 'date-fns'
import './task.css'

export default class Task extends Component {

  static defailtProps = {
    creationDate: new Date(),
    onDeleted: () => {},
    onToggleDone: () => {},
    done: false,
  };

  static propTypes = {
    label: PropTypes.string.isRequired,
    creationDate: PropTypes.instanceOf(Date),
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    done: PropTypes.bool,
    inputId: PropTypes.number.isRequired
  };

  render() {
    const { label, creationDate, onDeleted, onToggleDone, done, inputId } = this.props;
    
    let spanClassNames = 'description';
    if (done) {
      spanClassNames += ' completed';
    }


    return (
      <div className='view'>
        <input 
          className="toggle"
          id={ inputId }
          type="checkbox"
          onClick={ onToggleDone }
          />
        <label htmlFor={ inputId }>
          <span className={ spanClassNames }>
            { label }
          </span>
          <span 
            className="created"> 
            created { formatDistanceToNow(creationDate, {includeSeconds: true, addSuffix: true} )} 
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button 
          className="icon icon-destroy"
          onClick={ onDeleted }
        ></button>
      </div>
    )
  }
}
