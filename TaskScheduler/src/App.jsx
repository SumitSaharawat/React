import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");

  const handleTasks = () => {
    if (!name.trim()) return; 

    const newTask = {
      id: Date.now(),
      name: name,
      date: new Date().toLocaleString(),
      completed: false,
    }

    setTasks([...tasks, newTask])
    setName(""); // Clears the input field after adding
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
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
                <span className={`task-name ${task.completed ? 'completed' : ''}`}>{task.name}</span>
                <span className="task-date">{task.date}</span>
              </div>
            </div>
            <button className="btn-delete" onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
