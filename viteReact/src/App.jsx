import { useState } from 'react'

import './App.css'
import Component1 from './components/Component1'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Component1 username="masab umair"/>
     <br />
     <Component1 username='uzair'/>

    
    </>
  )
}

export default App
