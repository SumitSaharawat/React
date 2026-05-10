import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // --- 1. STATE ---
  const [todos, setTodos] = useState([]);
  
  const [inputText, setInputText] = useState("");

  // --- 1.5 FETCH DATA FROM NODE.JS ---
  useEffect(() => {
    fetch("http://localhost:5001/api/todos")
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error("Failed to fetch todos:", err));
  }, []);

  // --- 2. ACTIONS ---
  const handleAddTodo = async (e) => {
    e.preventDefault(); 
    
    if (inputText.trim() === "") return; 

    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false
    };

    try {
      const response = await fetch("http://localhost:5001/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo)
      });
      if (response.ok) {
        setTodos([...todos, newTodo]); 
        setInputText(""); 
      }
    } catch (err) {
      console.error("Failed to save todo:", err);
    }
  };

  const deleteTodo = async (idToDelete) => {
    try {
      const response = await fetch(`http://localhost:5001/api/todos/${idToDelete}`, {
        method: "DELETE"
      });
      if (response.ok) {
        const remainingTodos = todos.filter(todo => todo.id !== idToDelete);
        setTodos(remainingTodos);
      }
    } catch (err) {
      console.error("Failed to delete todo:", err);
    }
  };

  const toggleComplete = async (idToToggle) => {
    const todoToUpdate = todos.find(todo => todo.id === idToToggle);
    if (!todoToUpdate) return;

    try {
      const response = await fetch(`http://localhost:5001/api/todos/${idToToggle}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !todoToUpdate.completed })
      });
      
      if (response.ok) {
        const updatedTodos = todos.map(todo => {
          if (todo.id === idToToggle) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        });
        setTodos(updatedTodos);
      }
    } catch (err) {
      console.error("Failed to update todo:", err);
    }
  }

  // --- 3. UI RENDER ---
  return (
    <div className="app-container">
      <h2 className="app-title">My React Todo List</h2>

      {/* The Input Form */}
      <form onSubmit={handleAddTodo} className="todo-form">
        <input 
          type="text" 
          placeholder="Add a new task..." 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>

      {/* The Task List */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li 
            key={todo.id} 
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <div className="todo-item-content">
              <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="todo-checkbox"
              />
              <span className="todo-text">
                {todo.text}
              </span>
              <button 
              onClick={() => deleteTodo(todo.id)}
              className="delete-btn"
            >
              Delete
            </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;