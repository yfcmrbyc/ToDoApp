import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import TaskList from "../task-list/task-list";
import Footer from "../footer/footer";
import './todo-app.css';



  
  export default class TodoApp extends Component {
    state = {
      todoData: [
        {label: 'Completed task', done: false, id: 1, creationDate: new Date(), isEditing: false},
        {label: 'Edition task', done: false, id: 2, creationDate: new Date(), isEditing: false},
        {label: 'Active task', done: false, id: 3, creationDate: new Date(), isEditing: false}
      ],
    };

    deleteItem = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: todoData.filter(element => element.id !== id)
        }
      });
    }
  
    render() {
      return (
        <main className="todoapp">
          <AppHeader />
          <section className="main">
            <TaskList 
              todos = {this.state.todoData}
              onDeleted={ this.deleteItem }
            />
            <Footer />
          </section>
        </main>
      );
    }
  }