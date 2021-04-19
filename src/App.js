import React, { useState } from "react";
import Questions from "./data";

function App() {
  const [score, setScore] = useState(0);
  const [currentvalue, setCurrentvalue] = useState();
  const [currentquestion, setCurrentquestion] = useState(0);

  const currquestion = (e) => {
    // console.log(Questions[currentquestion].ans);
    // console.log(currentvalue);
    e.preventDefault();
    if(currentvalue===Questions[currentquestion].ans){
      setScore(score+10);
      
    }
    
    if(currentquestion+1<Questions.length){
      setCurrentquestion(currentquestion + 1);
      setCurrentvalue("");
    }
    else{
     alert("Congo!! You have solved all questions")
    }
    };

  return (
    <div className="App">
      <header>
        <div>MATHS QUIZ</div>
        <div>Total Score :{score}</div>
      </header>
      <main>
        <div className="card">
          <div className="qno"> Q{currentquestion+1} /<span>{Questions.length}</span> </div>
          <div> {Questions[currentquestion].ques}</div>
          <div>
            <input type="text" placeholder="Answer" value={currentvalue} 
            onChange={(e)=>setCurrentvalue(e.target.value)} ></input>
          </div>
          <button onClick={currquestion}>Enter</button>
        </div>
      </main>
    </div>
  );
}

export default App;
