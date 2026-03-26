import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <nav>
        <Link to="/">Recipie Explorer</Link> |{" "}
        <Link to="/about">SubmitForm</Link> |{" "}
        <Link to="/contact">ToDoList</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
