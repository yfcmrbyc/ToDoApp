import React from "react";
import NewTaskForm from "../new-task-form/new-task-form"

const AppHeader = () => {
    return (
      <header>
        <h1>todos</h1>
        <NewTaskForm />
      </header>
    )
  };

  export default AppHeader;