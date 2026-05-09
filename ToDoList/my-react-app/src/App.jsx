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
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#2d3436' }}>My React Todo List</h2>

      {/* The Input Form */}
      <form onSubmit={handleAddTodo} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Add a new task..." 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)}
          style={{ padding: '10px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          type="submit" 
          style={{ padding: '10px 20px', backgroundColor: '#0984e3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Add
        </button>
      </form>

      {/* The Task List */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li 
            key={todo.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '10px',
              padding: '12px',
              backgroundColor: '#f8f9fa',
              borderRadius: '6px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              textDecoration: todo.completed ? 'line-through' : 'none',
              opacity: todo.completed ? 0.6 : 1
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                style={{ cursor: 'pointer', width: '16px', height: '16px' }}
              />
              <span style={{ fontSize: '16px', color: '#2d3436' }}>
                {todo.text}
              </span>
              <button 
              onClick={() => deleteTodo(todo.id)}
              style={{ 
                backgroundColor: '#ff7675', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                padding: '6px 12px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
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