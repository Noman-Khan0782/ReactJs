import React from 'react'

 const Counter = () => {
    const counter=15
  return (
    <div>
        <h1>Counter </h1>
        <h2>Counter Value : {counter}</h2>
        <button>Add Value</button>
        <br /><br />
        <button>Remove Value</button>

    </div>
  )
}
export default Counter