import { useState } from "react";
import { values } from "./Values";


function Question(){

    const questionBank = values[0].questions;
    const [answer, setAnswer] = useState({});
    const [qIndex, setQindex] = useState(0);

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
            <h2>Question Pallet
                <span style={{marginLeft: '300px'}}>TotalScore: {calculatedScore}/{questionBank.length}</span>
            </h2>
            {questionBank.map((_, index) => (
                <button
                key={index}
                onClick={() => (setQindex(index))}
                style={{ backgroundColor: 'grey', padding: '10px', cursor: 'pointer',  }}
                >{index+1}</button>
            )
            )}
                 <div key={qIndex}>
                    <h2>Question: {qIndex+1}</h2>
                    <p>{questionBank[qIndex].Q}</p>
                    <div className="options-group" style={{ margin: '20px 0' }}>
                        {questionBank[qIndex].O.map((option, index) => (
                            <label key={index} style={{ display: 'block', margin: '10px', cursor: 'pointer' }}>
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
        </div>
        </>
    );
}

export default Question;