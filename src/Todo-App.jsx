import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./Todo-Form";
import TodoList from "./Todo-List";

function TodoApp() {
  // State to hold the list of todos and the input value
  // You can use useState to manage the todos and input value
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState("");

  // useEffect to load todos from localStorage when the component mounts
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /*  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos)); // Parse and set todos from localStorage
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); */

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, completed: false },
      ]); // Add new todo with a unique id
      setInputValue(""); // Clear the input field after adding
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-emerald-400">
        <div className="bg-white shadow-lg rounded-3xl p-16">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
            REACT TODO LIST ✅
          </h1>

          <TodoForm
            inputValue={inputValue}
            setInputValue={setInputValue}
            addTodo={addTodo}
          />

          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
}

export default TodoApp;
