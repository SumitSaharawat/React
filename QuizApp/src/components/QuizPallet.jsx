import { useContext } from "react";
import { QuestionContext } from "./Question"

function QuizPallet(){

   const { questionBank, setQindex, calculatedScore } = useContext(QuestionContext);

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
            </div>
        </>
    );
}

export default QuizPallet;