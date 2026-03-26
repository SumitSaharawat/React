import { useState } from "react";

export default function Contact() {
  // --- 1. STATE ---
  const [todos, setTodos] = useState([
    { id: 1, text: "Review LeetCode problem patterns", completed: false },
    { id: 2, text: "Submit QA Analyst applications", completed: false }
  ]);
  
  const [inputText, setInputText] = useState("");

  // --- 2. ACTIONS ---
  const handleAddTodo = (e) => {
    e.preventDefault(); 
    
    if (inputText.trim() === "") return; 

    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false
    };

    setTodos([...todos, newTodo]); 
    setInputText(""); 
  };

  const deleteTodo = (idToDelete) => {
    const remainingTodos = todos.filter(todo => todo.id !== idToDelete);
    setTodos(remainingTodos);
  };

  const toggleComplete = (idToToggle) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === idToToggle) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
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