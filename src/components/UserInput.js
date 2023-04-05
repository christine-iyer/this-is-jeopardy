// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function UserInput({jeopardyQuest}) {
  //The component must return some JSX
  const [userInput, setUserInput] = useState("");

  const handleChange = (evt) => {
    setUserInput(evt.target.value);
  };

  return (
    <div>
      <Form
      
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userInput)
          console.log(jeopardyQuest.answer)
        }}
      >
        <Form.Group className="mb-3">
        <Form.Label>What is </Form.Label>
        <Form.Control type="text" placeholder="..." />
      </Form.Group>

      <Button variant="primary" 
      type="submit"
      onChange={handleChange}
      value={userInput}>
        Submit
      </Button>




        <span><h1>What is </h1>
        <input type="text" onChange={handleChange} value={userInput} />
        <input type="submit" value="submit" /></span>
      </Form>
    </div>
  );
}