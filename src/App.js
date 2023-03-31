import './index.css'
import { useState, useEffect } from "react";
// import Score from "./components/Score";
import Question from './components/Question'
import Answer from './components/Answer';
// import Category from './components/Category';
// import Form from './components/Form';
// import DecrementPoints from './components/DecrementPoints';
// import IncrementPoints from './components/IncrementPoints';
// import Reset from './components/Reset';




export default function App() {
  //set state for for questions and scoring
  const [jeopardyQuest, setJeopardyQuest] = useState(null);
  const [score, setScore] = useState(0);
  // const [category, setCategory] = useState(null);

  const getScore = () => {
    if (jeopardyQuest && jeopardyQuest.value) {
      setScore(score + jeopardyQuest.value);
    }
  }

  const getDecrementPoints = () => {
    if (jeopardyQuest && jeopardyQuest.value) {
      setScore(score - jeopardyQuest.value);
    }
  }
  // const Reset = () => {
  //   if (jeopardyQuest && jeopardyQuest.value) {
  //     setScore(Math.abs(score));
  //   }
  // }


  
 

  const getJeopardyQuest = async () => {
    try {
      const response = await fetch('https://jservice.io/api/categories?count=1&id=94');
      const data = await response.json();
      setJeopardyQuest(data);
      console.log(data)

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getJeopardyQuest()
    // getDecrementPoints()
    // getScore()
}, [])

  return (
    <div className='App'>
      <section>
        {/* <h1><Category jeopardyQuest={jeopardyQuest} /></h1> */}
      
      {/* <Question jeopardyQuest={jeopardyQuest} getJeopardyQuest={getJeopardyQuest} />
      {/* <Form jeopardyQuest={jeopardyQuest} /> */}
      {/* <Answer jeopardyQuest={jeopardyQuest} /> */}
      {/* <Score score={score} getScore={getScore} />
      <DecrementPoints score={score} getScore={getDecrementPoints} /> */}
      {/* <Reset score={score} getScore={Reset} /> */}
      </section>
    </div>
  )

}


