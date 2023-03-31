
export default function Question({ jeopardyQuest, getJeopardyQuest }) {
     return (
          <>
          <button className ='button' onClick={getJeopardyQuest}>Start</button>
       <h1>
          {jeopardyQuest && jeopardyQuest.value ? (
<>{jeopardyQuest.question}? </>
          ) : (
               <>??????</>
          )}</h1>
          
          </>
     );
}