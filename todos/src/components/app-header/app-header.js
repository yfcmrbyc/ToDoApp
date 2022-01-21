import React from "react";
import NewTaskForm from "../new-task-form/new-task-form"

const AppHeader = ({ onItemAdded }) => {
    return (
      <header>
        <h1>todos</h1>
        <NewTaskForm onItemAdded={ (text) => onItemAdded(text) }/>
      </header>
    )
  };

  export default AppHeader;