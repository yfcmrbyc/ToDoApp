import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import './todo-app.css';

export default class TodoApp extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Edition task'),
      this.createTodoItem('Active task'),
    ],
  };

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

  addItem = (label) => {
    this.setState(({ todoData }) => ({
      todoData: [...todoData, this.createTodoItem(label)],
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

  createTodoItem(label) {
    return {
      label,
      done: false,
      creationDate: new Date(),
      isHidden: false,
      id: this.maxId++,
      inputId: this.maxId++,
    };
  }

  render() {
    const { todoData } = this.state;
    const todoCount = todoData.length - todoData.filter((el) => el.done).length;

    return (
      <main className="todoapp">
        <AppHeader onItemAdded={this.addItem} />
        <section className="main">
          <TaskList todos={todoData} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} />
          <Footer
            toDo={todoCount}
            onDeleteCompleted={this.deleteCompleted}
            onHideActive={this.hideActive}
            onHideCompleted={this.hideCompleted}
            onShowAll={this.showAll}
          />
        </section>
      </main>
    );
  }
}
