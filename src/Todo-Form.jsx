import React from "react";

const TodoForm = ({ inputValue, setInputValue, addTodo }) => {
  return (
    <div className="mb-4 flex">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
            setInputValue(""); // Clear input after adding
          }
        }}
        type="text"
        placeholder="Add a new task"
        className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={addTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
