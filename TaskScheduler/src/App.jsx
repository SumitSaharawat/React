import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5002/tasks")
    .then(res => setTasks(res.data))
    .catch(err => console.error("Failed to fetch tasks:", err));
  }, []);


  const handleTasks = () => {
    if (!name.trim()) return; 

    const newTask = {
      name: name,
      date: new Date().toLocaleString(),
      completed: false,
    }

    axios.post("http://localhost:5002/tasks", newTask)
    .then(res => setTasks([...tasks, res.data]))
    .catch(err => console.error("Failed to add task:", err));
    setName(""); // Clears the input field after adding
  }

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5002/tasks/${id}`)
    .then(() => {
      setTasks(tasks.filter((task) => task._id !== id));
    })
    .catch(err => console.error("Failed to delete task:", err));  
  }

  const toggleComplete = (id) => {
    const taskToUpdate = tasks.find(t => t._id === id);
    if (!taskToUpdate) return;

    axios.put(`http://localhost:5002/tasks/${id}`, { completed: !taskToUpdate.completed })
    .then(() => {
      setTasks(tasks.map((task) => 
        task._id === id ? { ...task, completed: !task.completed } : task
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
          <li key={task._id} className="task-item">
            <div className="task-content">
              <input 
                type="checkbox"
                className="task-checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task._id)}
              />
              <div className="task-info">
                <span className="task-name">{task.name}</span>
                <span className="task-date">{task.date}</span>
              </div>
            </div>
            <button className="btn-delete" onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
