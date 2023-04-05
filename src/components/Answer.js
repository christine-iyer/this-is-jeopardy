import { useState } from "react";
import { Button } from "react-bootstrap";
export default function Answer({ jeopardyQuest }) {

     const [answerQuestion, setAnswerQuestion] = useState(false)

     return (
          <>
               <Button
               onClick={() => {
                    setAnswerQuestion(!answerQuestion)
               }}
               >
               {answerQuestion ? "Hide Answer" : "Reveal Answer"}
               </Button>
               {jeopardyQuest && jeopardyQuest.question && answerQuestion ? (
                    <div> REVEAL ANSWER {jeopardyQuest.answer}</div>
                    
               ) : (
                    ""
               )}
                         </>
               )
          }





    