import React, { Component }from "react";
import { formatDistanceToNow } from 'date-fns'
import './task.css'

export default class Task extends Component {

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
