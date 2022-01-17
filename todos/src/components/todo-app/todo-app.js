import React from "react";
import AppHeader from "../app-header/app-header";
import TaskList from "../task-list/task-list";
import Footer from "../footer/footer";
import './todo-app.css';

const TodoApp = () => {

  const todoData = [
    {label: 'Completed task', done: true, id: 1, creationDate: new Date(), isEditing: false},
    {label: 'Edition task', done: false, id: 2, creationDate: new Date(), isEditing: true},
    {label: 'Active task', done: false, id: 3, creationDate: new Date(), isEditing: false}
  ];

    return (
      <main className="todoapp">
        <AppHeader />
        <section className="main">
          <TaskList todos = {todoData}/>
          <Footer />
        </section>
      </main>
    )
  };

  
  export default TodoApp;