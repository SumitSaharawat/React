import { createContext } from "react";
import QuizPallet from "./QuizPallet";
import Quiz from "./Quiz";

export const QuestionContext = createContext();

function Question(){
    return(
        <>
            < QuizPallet />
            < Quiz />
        </>
    );
}

export default Question;