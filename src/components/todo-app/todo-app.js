import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import './todo-app.css';

export default class TodoApp extends Component {
  state = {
    todoData: [],
  };

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem('todoState')));
  }

  componentDidUpdate() {
    localStorage.setItem('todoState', JSON.stringify(this.state));
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((element) => element.id !== id),
    }));
  };

  deleteCompleted = () => {
    this.state.todoData.forEach((element) => {
      if (element.done) {
        this.deleteItem(element.id);
      }
    });
  };

  addItem = (label, minutes, seconds) => {
    this.setState(({ todoData }) => ({
      todoData: [...todoData, this.createTodoItem(label, minutes, seconds)],
    }));
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, 'done'),
    }));
  };

  hideActive = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.map((element) => ({ ...element, isHidden: !element.done }));

      return {
        todoData: newArr,
      };
    });
  };

  hideCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.map((element) => ({ ...element, isHidden: element.done }));

      return {
        todoData: newArr,
      };
    });
  };

  showAll = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.map((element) => ({ ...element, isHidden: false }));

      return {
        todoData: newArr,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((element) => element.id === id);
    const [oldItem] = arr.filter((element) => element.id === id);
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  createTodoItem(label, minutes, seconds) {
    return {
      label,
      minutes,
      seconds,
      done: false,
      creationDate: Date.now(),
      isHidden: false,
      id: uuidv4(),
    };
  }

  render() {
    const { todoData } = this.state;
    const todoCount = todoData.length - todoData.filter((el) => el.done).length;

    return (
      <main className="todoapp">
        <NewTaskForm addItem={this.addItem} />
        <section className="main">
          <TaskList todos={todoData} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} />
          <Footer
            toDo={todoCount}
            onDeleteCompleted={this.deleteCompleted}
            hideActiveElements={this.hideActive}
            hideCompletedElements={this.hideCompleted}
            showAllElements={this.showAll}
          />
        </section>
      </main>
    );
  }
}
