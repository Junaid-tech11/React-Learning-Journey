import { useState } from 'react';

import './App.css'


  const ActionBtn = (props)=>{
    return (
        <button className='btn' onClick={props.clickHandler}>
          {props.btnName}
        </button>

    )
  }

function App() {

    //useState(true,'','junaid', {}) //anything can be pass here
    let [counter, setCounter] = useState(10) //counter is variable and setCounter is function

    //let counter = 35

    const addValue = () =>{
      // console.log('Clicked', counter);
    if (counter < 20) {
    setCounter(counter + 1)  
      
    }else {
      console.log("Limit Reached");
      
            //counter++

    }  

    }

      const removeValue = () =>{
        if (counter > 0) {
          return setCounter(counter -1)
        }else{
          console.log("you can't go into negative");
          
        }
      }

  return (
    
    <>
    <h1>React Learning</h1>
    <h3>Counter Value : {counter}</h3>

    <ActionBtn btnName="Add Value" clickHandler={addValue} />
    <br />
    <ActionBtn btnName = "Remove Value" clickHandler = {removeValue}/>
    <p>Footer {counter}</p>
    </>
  )
}

export default App
