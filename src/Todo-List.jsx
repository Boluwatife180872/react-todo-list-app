import React from "react";
import TodoItem from "./Todo-Item";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
