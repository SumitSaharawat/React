import { useState } from "react"
import './About.css'

export default function About() {
   const [fName, setfName] = useState("")
  const [lName, setlName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [gender, setGender] = useState("male")

  function handleSubmit(e){
    e.preventDefault();
    console.log({fName, lName, email, contact, gender})
  }
  
    return (
        <div className="App">
            <h1>Form in React</h1>
            <fieldset>
                <form action="#" method="get">
                    <label htmlFor="firstname">
                        First Name*
                    </label>
                    <input
                        value={fName}
                        placeholder="Enter First Name"
                        onChange={(e) => setfName(e.target.value)}
                        required
                    />
                    <label htmlFor="lastname">Last Name*</label>
                    <input
                        value={lName}
                        placeholder="Enter Last Name"
                        onChange={(e) => setlName(e.target.value)}
                        required
                    />
                    <label htmlFor="email">Enter Email* </label>
                    <input
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="tel">Contact*</label>
                    <input
                        value={contact}
                        placeholder="Enter Mobile number"
                        onChange={(e) => setContact(e.target.value)}
                        required
                    />
                    <label htmlFor="gender">Gender*</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        onClick={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        onClick={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Female
                    <br></br>
                    <button onClick={(e) => handleSubmit(e)}>
                      Submit
                    </button>
                    
                </form>
            </fieldset>
        </div>
    );
}
