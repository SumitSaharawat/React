import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5002/tasks")
    .then(res => res.json())
    .then(data => setTasks(data))
    .catch(err => console.error("Failed to fetch tasks:", err));
  }, []);


  const handleTasks = () => {
    if (!name.trim()) return; 

    const newTask = {
      id: Date.now(),
      name: name,
      date: new Date().toLocaleString(),
      completed: false,
    }

    fetch("http://localhost:5002/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
    .then(res => res.json())
    .then(data => setTasks([...tasks, data]))
    .catch(err => console.error("Failed to add task:", err));
    setName(""); // Clears the input field after adding
  }

  const deleteTask = (id) => {
    fetch(`http://localhost:5002/tasks/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    })
    .catch(err => console.error("Failed to delete task:", err));  
  }

  const toggleComplete = (id) => {
    const taskToUpdate = tasks.find(t => t.id === id);
    if (!taskToUpdate) return;

    fetch(`http://localhost:5002/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !taskToUpdate.completed })
    })
    .then(() => {
      setTasks(tasks.map((task) => 
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
    })
    .catch(err => console.error("Failed to update task:", err));
  }

  return (
    <div className="app-container">
      <h1 className="title">Task Scheduler</h1>
      <div className="input-group">
        <input 
          className="task-input"
          type="text" 
          placeholder="Enter Task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn-add" onClick={handleTasks}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div className="task-content">
              <input 
                type="checkbox"
                className="task-checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <div className="task-info">
                {!isEditing && <span className={`task-name ${task.completed ? 'completed' : ''}`}>{task.name}</span>}
                {isEditing && <input></input>}
                <span className="task-date">{task.date}</span>
              </div>
            </div>
            <button className="btn-delete" onClick={() => deleteTask(task.id)}>Delete</button>
            <button className="btn-edit" onClick={() => setIsEditing(true)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
