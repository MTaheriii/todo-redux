import React from "react";

const Todo = ({ onClick, text, completed }) => {
  return (
    <div
      onClick={onClick}
      style={{ textDecoration: completed ? "line-through" : "" }}
    >
      {text}
    </div>
  );
};

export default Todo;
