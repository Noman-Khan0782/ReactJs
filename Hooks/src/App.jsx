import { useEffect, useRef, useState } from "react";
import "./App.css";
import { useCallback } from "react";

function App() {
  // step #1
  let [Length, setLength] = useState(5);
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPassword] = useState("");

  // step # 2 generatepassword
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";

    if (charAllowed) str += "!@#$%^&*_+{}[]:;";

    // create password
    for (let i = 0; i < Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [Length, numberAllowed, charAllowed, setPassword]);
  // use setPassword jab hum page reload karty hai tho password set hota hai
  // step # 4 using useEffectHook
  useEffect(() => {
    generatePassword();
  }, [Length, numberAllowed, charAllowed, generatePassword]);

  // step # 5 useRef
  const passwordRef = useRef(null);
  const coPyClipboard = useCallback(() => {
   window.navigator.clipboard.writeText(password);
   passwordRef.current?.select()
   passwordRef.current?.setSelectionRange(0,5)
  }, [password]);
  // step#3
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-slate-600">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
            className="outline-none w-full px-1 py-3 rounded-lg"
          />
          <button
            className="text-white bg-blue-500 py-3 px-1 rounded-md"
            onClick={coPyClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex gap-x-1 py-2 my-1 font-bold">
          <div className="flex gap-x-1 items-center">
            <input
              type="range"
              min={5}
              max={100}
              value={Length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {Length}</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
