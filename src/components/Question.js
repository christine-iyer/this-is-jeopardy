import Button from 'react-bootstrap/Button';
export default function Question({ jeopardyQuest, getJeopardyQuest }) {
     return (
          <>
          <Button className ='Button' onClick={getJeopardyQuest}>Start</Button>
     
          {jeopardyQuest && jeopardyQuest.value ? (
<>{jeopardyQuest.question}? </>
          ) : (
               <>??????</>
          )}
          
          </>
     );
}