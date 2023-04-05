import Button from 'react-bootstrap/Button';
export default function IncrementPoints({ getIncPoints, score }) {
     return (
       <>
       <h4>{score}</h4>
       <Button onClick={getIncPoints}>Add Points</Button>
       </>
     );
   }