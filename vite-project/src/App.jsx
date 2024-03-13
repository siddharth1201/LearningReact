import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  
  let [counter, setCounter] = useState(15)

  //counter = 5;

  const addValue = () => {
    if(counter<20){
      counter = counter+1;
    }else{
      console.log("Max value reached");
    }
    setCounter(counter);
  }

  const deleteValue = () => {
    counter>0?(counter--):console.log("min value reached");
    setCounter(counter);
  }

  return (
    <>
      <h1>Sid</h1>
      <h2>Counter Value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add Value {counter}</button>
      <br/>
      <button onClick={deleteValue}>Decrease Value {counter}</button>

    </>
  )
}

export default App
