import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState("- -")
  const [category, setCategory] = useState("- -")
  const [message, setMessage] = useState("")
  const [color, setColor] = useState("")

  const CalculateBmi = (e) => {
      e.preventDefault();
      if(!height || !weight || height < 0 || weight <0)
      {
        setMessage("Please Enter Valid Height and Weight")
      }else{
        setMessage("")

        let bmiValue = (weight / (height * height)) * 10000;
        setBmi(bmiValue.toFixed(2));

        if(bmiValue <= 18.5){
          setCategory("Under Weight")
          setColor("yellow")
        }else if(bmiValue > 18.5 && bmiValue <= 25){
          setCategory("Normal Weight")
          setColor("green")
        }else if(bmiValue > 25 && bmiValue <= 29.9){
          setCategory("Over Weight")
          setColor("orange")
        }else if(bmiValue > 29.9){
          setCategory("Obesse")
          setColor("red")
        }
      }
  }

  

  return (
    <div className="bmi-container">
      <div className="bmi-card">
        <h2>BMI Calculator</h2>

        {/* The Input Form */}
        <form className="bmi-form" onSubmit={CalculateBmi}>
          <div className="input-group">
            <label htmlFor="weight">Weight (kg)</label>
            <input 
              id="weight"
              type="number" 
              placeholder="e.g., 75" 
              onChange={(e) => {setWeight(e.target.value)}}
            />
          </div>

          <div className="input-group">
            <label htmlFor="height">Height (cm)</label>
            <input 
              id="height"
              type="number" 
              placeholder="e.g., 175" 
              onChange={(e) => {setHeight(e.target.value)}}
            />
          </div>

          <button type="submit" className="calculate-btn" >
            Calculate BMI
          </button>
        </form>

        {/* The Results Display (Hardcoded for now) */}
        <div className="results-section">
          <h3>Your BMI: <span>{bmi}</span></h3>
          <p className="category" style={{color: 'white' , backgroundColor: 'black'}}>
            Category: <span style={{color}}>{category}</span>
          </p>
          <p>{message}</p>
        </div>

      </div>
    </div>
  );
}

export default App
