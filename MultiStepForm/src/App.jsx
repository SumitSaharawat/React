import { useState } from 'react'
import './App.css'
import FirstName from './components/FirstName';
import LastName from './components/LastName';
import Email from './components/Email';
import Phone from './components/Phone';
import Address from './components/Address';
import FormSubmit from './components/FormSubmit';

function App() {
  const [step, setStep] = useState(1)
  const totalSteps = 6; // We have 6 cases in switch

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address:""
  })

  const nextStep = () => {
    if (step < totalSteps) setStep((prev) => prev + 1);
  }
  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  }

  const renderStep = () => {
    switch(step){
      case 1 : return <FirstName data={formData} setData={setFormData}/>
      case 2 : return <LastName data={formData} setData={setFormData}/>
      case 3 : return <Email data={formData} setData={setFormData}/>
      case 4 : return <Phone data={formData} setData={setFormData}/>
      case 5 : return <Address data={formData} setData={setFormData}/>
      case 6 : return <FormSubmit data={formData} />
      default: return null;
    }
  }

  return (
    <div className="app-container">
      <div className="form-card">
        {/* Progress Bar */}
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>

        <h1>Step {step}</h1>

        <div className="step-content">
          {renderStep()}
        </div>

        <div className="btn-group">
          {step > 1 && step <= 6 && (
            <button className="btn-prev" onClick={prevStep}>
              Back
            </button>
          )}
          
          {step < 6 && (
            <button className="btn-next" onClick={nextStep}>
              {step === 5 ? "Review" : "Next"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
