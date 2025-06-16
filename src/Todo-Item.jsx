import React from "react";

const TodoItem = ({todo, todos, setTodos}) => {
  return (
    <li
      key={todo.id}
      className="flex items-center p-3 rounded-lg bg-slate-100 border border-gray-200"
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          setTodos(
            todos.map((t) =>
              t.id === todo.id ? { ...t, completed: !t.completed } : t
            )
          )
        }
        className="mr-2 h-5 w-5 text-blue-600"
      />
      <span
        className={`flex-grow ${
          todo.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => {
          setTodos(todos.filter((t) => t.id !== todo.id));
        }}
        className="ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
