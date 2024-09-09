import { useState } from "react";


function App() {
  let [counter , setCounter]=useState(10)
//  let counter=0;
 let addValue=function(){
  // counter= counter+1
  console.log(counter);
  
  console.log(setCounter(counter));
  
  // setCounter(preCouter => preCouter+1)
  // setCounter(preCouter => preCouter+1)
  // setCounter(preCouter => preCouter+1)
  // setCounter(preCouter => preCouter+1)

  

  
 }
 const RemoveValue= function(){
  counter=counter-1
  // console.log(counter);
  setCounter(counter)
  console.log(setCounter(counter)
);

 }
  return (
    <>
    <h1>Counter </h1>
    <p>Counter value :{counter}</p>
    <button onClick={addValue}>Add value {counter}</button>
    <br /><br />
    <button onClick={RemoveValue}>Remove value</button>

    </>
  );
}

export default App;
