import React, { useState } from "react";

import { Todo } from "./Interfaces";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import './App.css';

function App() {

  const [ todoList, setTodos ] = useState<Todo[]>([])

  return (
    <div
      className="App"
    >
      <Header>Todo List</Header>
      <TodoForm todoList={todoList} setTodos={setTodos} />
      <TodoList todoList={todoList} setTodos={setTodos} />
    </div>
  );
}

export default App;
