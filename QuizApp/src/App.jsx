import { useState } from 'react'
import './App.css'
import Question from './components/Question'
import { QuestionContext } from './components/Question'
import { values } from './components/Values'


function App() {

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

  return (
    <QuestionContext.Provider value={{
            questionBank,
            answer,
            qIndex,
            setQindex,
            handleAnswers,
            calculatedScore
        }}>
      <Question />
    </QuestionContext.Provider>
  )
}

export default App
