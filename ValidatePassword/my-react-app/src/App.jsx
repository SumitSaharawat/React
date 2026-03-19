import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")


  function validate(Password){

      const hasCaps = /[A-Z]/.test(Password);
      const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(Password);

      if(Password.length < 15 || (!hasCaps) || (!hasSpecial))
      {
          setError("Not a Strong Password")
      }else{
        setError("Strong Password")
      }
  }

 return (
        <div style={{
            marginLeft: '200px',
        }}>
            <pre>
                <h2>Checking Password Strength in ReactJS</h2>
                <span>Enter Password: </span><input type="text"
                onChange={(e) => {setPassword(e.target.value), validate(password)}}></input> <br />
                <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{error}</span>
            </pre>
        </div>
    );
}

export default App
