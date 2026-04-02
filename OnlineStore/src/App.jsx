import { useState } from 'react'
import './App.css'
import CountryInformation from './Components/CountryInformation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
            <CountryInformation />
    </div>
  )
}

export default App
