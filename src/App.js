import React, {useState} from 'react';
import Message from './Message';
import './App.css';
//import Dinner from './dinner.js';

function App() {
  let [count, setCount] = useState(0);
  let[isMorning, setMorning] =  useState(true);
  return (
    <div className = {`box ${isMorning ? 'dayLight' : 'box'}`}>
      <h1>Good {isMorning ? 'Morning' : 'Night'} </h1>
     <Message counter = {count}/>
     <button onClick= {()=> setCount(++ count)} > Update Counter
        </button>

        <button onClick= {()=> setCount(0)} > Reset Counter
        </button>

        <button onClick= {()=> setMorning(!isMorning)} > Reset Day
        </button>
    </div>
  );
}

export default App;
