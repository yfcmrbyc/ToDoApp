import React, { Component }from "react";
import { formatDistanceToNow } from 'date-fns'
import './task.css'

export default class Task extends Component {

  state = {
    done: false,
  };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    });
  }

  render() {
    const { label, creationDate, onDeleted } = this.props;
    const { done } = this.state;
    
    let  labelClassName = '';
    let spanClassNames = 'description';
    if (done) {
      labelClassName += ' checked';
      spanClassNames += ' completed';
    }

    return (
      <div className="view">
        <input 
          className="toggle"
          type="checkbox"
          onClick={ this.onLabelClick }
          />
        <label className={ labelClassName }>
          <span 
            className={ spanClassNames }
            onClick={ this.onLabelClick }
            >
            { label }
          </span>
          <span className="created"> created { formatDistanceToNow(new Date(creationDate), {includeSeconds: true, addSuffix: true} )} </span>
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
