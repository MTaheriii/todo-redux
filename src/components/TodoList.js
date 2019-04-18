import React from "react";

import Todo from "./Todo";
const TodoList = ({ todos, onTodoClick }) => {
  return todos.map((todo, index) => {
    <Todo key={index} {...todo} onClick={onTodoClick(index)} />;
  });
};

export default TodoList;
