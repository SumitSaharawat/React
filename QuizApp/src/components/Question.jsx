import { useState, createContext } from "react";
import { values } from "./Values";
import QuizPallet from "./QuizPallet";
import Quiz from "./Quiz";

export const QuestionContext = createContext();

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
        <QuestionContext.Provider value={{
            questionBank,
            answer,
            qIndex,
            setQindex,
            handleAnswers,
            calculatedScore
        }}>
            < QuizPallet />
            < Quiz />
        </QuestionContext.Provider>
    );
}

export default Question;