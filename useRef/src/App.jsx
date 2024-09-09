import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const countRef = useRef(0);
  const [force, forceUpdate] = useState(0); // Dummy state to trigger re-renders
  

  useEffect(() => {
  

    if (inputValue.trim() !== "") {
      countRef.current += 1;
      forceUpdate((prev) => prev + 1); // Trigger re-render
      
      
      
    } else {
      console.log("Input is empty, not incrementing count");
    }
  }, [inputValue]);

  // let value2=()=>{
  //   <h1>Render Count: {forceUpdate((prev) => prev + 1)}</h1>
  // }

  return (
    <>
      <div className="flex justify-center bg-slate-600 py-10 px-2">
        <input
          className="bg-white"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter text here..."
        />
      </div>
      <div className="text-center mt-4">
        <h1>Render Count: {countRef.current}</h1>
        <h1>Render Count: {force}</h1>
      
      </div>
    </>
  );
}

export default App;
