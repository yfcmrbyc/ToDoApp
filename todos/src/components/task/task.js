import React from "react";
import { formatDistanceToNow } from 'date-fns'
import './task.css'

const Task = ({ label, creationDate }) => {


    return (
      <div className="view">
        <input className="toggle" type="checkbox"/>
        <label>
          <span className="description">{ label }</span>
          <span className="created"> created { formatDistanceToNow(new Date(creationDate), {includeSeconds: true, addSuffix: true} )} </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    )
  };

  export default Task;