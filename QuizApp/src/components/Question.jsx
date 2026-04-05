import { useState } from "react";
import { values } from "./Values";

function Question(){

    const questionBank = values[0].questions;
    const [answer, setAnswer] = useState({});

    const handleAnswers = (index, value) =>{
        setAnswer((prev) => {
            return {...prev, [index]:value}
        });
    }

       let calculatedScore = 0;
        questionBank.forEach((question, index) => {
            if(answer[index] === question.A) {
                calculatedScore += 1;
            }
        });
    
    return(
        <>
        <div>
            <h1>Quiz-Application</h1>
            {questionBank.map((question, qIndex) => (
                <div key={qIndex}>
                    <h2>Question: {qIndex+1}</h2>
                    <p>{question.Q}</p>
                    <div className="options-group" style={{ margin: '20px 0' }}>
                        {question.O.map((option, index) => (
                            <label key={index} style={{ display: 'block', margin: '10px 0', cursor: 'pointer' }}>
                                <input 
                                    type="radio" 
                                    name={`quiz-option-${qIndex}`} 
                                    value={option.value} 
                                    onChange={() => handleAnswers(qIndex, option.value)}
                                />
                                <span style={{ marginLeft: '10px' }}>{option.value}</span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            <span>TotalScore: {calculatedScore}/{questionBank.length}</span>
        </div>
        </>
    );
}

export default Question;