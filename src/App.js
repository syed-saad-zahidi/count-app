import React , {useState} from 'react';
import Message from './message'

import './App.css';

function App(){
  let [count, setCount]= useState(1);
  let [isMorning, setMorning]=useState(false);
  return( <div className={`box ${isMorning ? 'dayLight' : ''}`}>
    <Message counter={count}/>
    <h1> Good {isMorning ? 'Morning' : 'Night'} </h1>
  <br/>
  <button onClick={()=>setCount(++count)}>update counter</button>
  <button onClick={()=>setMorning(!isMorning)}>update day</button>
  </div>
  );
}
export default App;
