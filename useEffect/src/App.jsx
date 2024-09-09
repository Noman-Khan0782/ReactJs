import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [calculation,setCalculation]= useState(0)
let counter= ()=>{
  setCount(count+1)
}
useEffect(()=>{
setCalculation(()=>count*2)
},[count])

// useEffect(()=>{
//   setTimeout(()=>{
//     setCalculation((calculation)=> calculation+1)
//   },1000)
// },)
// useEffect(()=>{
//   setCalculation(calculation+1)
// },1000)

  return (
    <>
     <h1>counter</h1>
     <br />
     <p>counter value : {count}</p>
     <br />
    <button className='py-1 px-3 bg-slate-500 text-white rounded-lg' onClick={counter}>counter</button>
    <br />
    <h1>useEffect Value : {calculation}</h1>
     

    </>
  )
}

export default App
