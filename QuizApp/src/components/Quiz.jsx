import { useContext } from "react";
import { QuestionContext } from "./Question"

function Quiz(){

    const { questionBank, qIndex, handleAnswers } = useContext(QuestionContext);

    return(
        <>
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
        </>
    );
}

export default Quiz;