import { useState } from 'react'


function App() {
  let [color, setColor] = useState("gray")

  return (
    <>
     <div className='w-full h-screen ' style={{backgroundColor:color}}>
     <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0 bg-white gap-3'>
     <button className='text-white bg-red-700 p-3 rounded-xl gap-3' 
     onClick={()=> setColor("red")}>Red Color</button>
     <button className='text-white bg-yellow-700 p-3 rounded-xl gap-3' 
     onClick={()=> setColor("yellow")}>yellow Color</button>
     <button className='text-white bg-green-700 p-3 rounded-xl gap-3' 
    onClick={()=> setColor("green")}>green Color</button>
     </div>
     </div>
     
    </>
  )
}

export default App
