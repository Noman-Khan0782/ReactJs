import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter=15
  let addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };
  let removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  };
  return (
    <>
      <h1>counter</h1>
      <h2>Counter Value {counter}</h2>

      <button onClick={addValue}>add Counter</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Counter</button>
    </>
  );
}

export default App;
