import Button from 'react-bootstrap/Button';
export default function DecrementPoints({ getScore, score }) {
     return (
       <>
       <h4>{score}</h4>
       <Button onClick={getScore}>Decrease</Button>
       </>
     );
   }