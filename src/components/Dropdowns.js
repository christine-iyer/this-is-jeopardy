import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Question from './Question';

function HeaderAndFooterExample({ jeopardyQuest, getJeopardyQuest }) {
  return (
     
     
    <Card className="text-center">
      <Card.Header>jnlknm,</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
        {jeopardyQuest && jeopardyQuest.value ? (
<>{jeopardyQuest.question}? </>
          ) : (
               <>??????</>
          )}
        </Card.Text>
        <Question variant="primary" onClick={getJeopardyQuest}
        
        >Go somewhere</Question>
                  
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;