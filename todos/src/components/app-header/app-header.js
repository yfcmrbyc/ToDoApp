import React from "react";
import PropTypes from 'prop-types';

import NewTaskForm from "../new-task-form/new-task-form"

const AppHeader = ({ onItemAdded }) => {
    return (
      <header>
        <h1>todos</h1>
        <NewTaskForm onItemAdded={ (text) => onItemAdded(text) }/>
      </header>
    )
  };

  AppHeader.propTypes = {
    onItemAdded: PropTypes.func.isRequired
  }

  export default AppHeader;