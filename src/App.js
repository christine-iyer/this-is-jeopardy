import './index.css'
import { useState, useEffect } from "react";
import Score from "./components/Score";
import Question from './components/Question'
import Answer from './components/Answer';
import Category from './components/Category';
import UserInput from './components/UserInput';
import DecrementPoints from './components/DecrementPoints';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdowns from './components/Dropdowns';
import IncrementPoints from './components/IncrementPoints';
// import Reset from './components/Reset';




export default function App() {
  //set state for for questions and scoring
  const [jeopardyQuest, setJeopardyQuest] = useState(null);
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState(null);

  const getIncPoints = () => {
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
      const response = await fetch('https://jservice.io/api/random');
      const data = await response.json();
      setJeopardyQuest(data[0]);
      console.log(data)

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getJeopardyQuest()
    getDecrementPoints()
    getIncPoints()
}, [])

  return (
    <div className='App'>
      <Dropdowns />
      <section>
        <h1><Category jeopardyQuest={jeopardyQuest} /></h1>
      
       <Question jeopardyQuest={jeopardyQuest} getJeopardyQuest={getJeopardyQuest} />
       <UserInput jeopardyQuest={jeopardyQuest} /> 
      <Answer jeopardyQuest={jeopardyQuest} />
      {/* <Score score={score} getScore={getScore} /> */}
      <DecrementPoints score={score} getScore={getDecrementPoints} />
      <IncrementPoints score={score} getIncPoints={getIncPoints} />  

      </section>
    </div>
  )

}


