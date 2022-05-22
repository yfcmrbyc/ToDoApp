import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import './todo-app.css';

function TodoApp() {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('todoState'));
    if (localData) {
      const { todoData: localTodoData } = localData;
      setTodoData(() => localTodoData);
    }
  }, []);

  useEffect(() => localStorage.setItem('todoState', JSON.stringify({ todoData })), [todoData]);

  const createTodoItem = (label) => ({
    label,
    done: false,
    creationDate: Date.now(),
    isHidden: false,
    id: uuidv4(),
  });

  const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((element) => element.id === id);
    const [oldItem] = arr.filter((element) => element.id === id);
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  const deleteItem = (id) => {
    setTodoData(() => todoData.filter((element) => element.id !== id));
  };

  const deleteCompleted = () => {
    todoData.forEach((element) => {
      if (element.done) {
        deleteItem(element.id);
      }
    });
  };

  const addItem = (label) => {
    setTodoData(() => [...todoData, createTodoItem(label)]);
  };

  const onToggleDone = (id) => {
    setTodoData(() => toggleProperty(todoData, id, 'done'));
  };

  const hideActive = () => {
    setTodoData(() => todoData.map((element) => ({ ...element, isHidden: !element.done })));
  };

  const hideCompleted = () => {
    setTodoData(() => todoData.map((element) => ({ ...element, isHidden: element.done })));
  };

  const showAll = () => {
    setTodoData(() => todoData.map((element) => ({ ...element, isHidden: false })));
  };

  const todoCount = todoData.length - todoData.filter((el) => el.done).length;

  return (
    <main className="todoapp">
      <NewTaskForm addItem={addItem} />
      <section className="main">
        <TaskList todos={todoData} onDeleted={deleteItem} onToggleDone={onToggleDone} />
        <Footer
          toDo={todoCount}
          onDeleteCompleted={deleteCompleted}
          hideActiveElements={hideActive}
          hideCompletedElements={hideCompleted}
          showAllElements={showAll}
        />
      </section>
    </main>
  );
}

export default TodoApp;
