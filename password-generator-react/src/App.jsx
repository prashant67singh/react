import { useState, useEffect, useRef, useCallback } from "react";

function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [characterAllowed, setCharacterAllowed] = useState(false);
  let [password, setPassword] = useState("");
  let passRef = useRef();

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "~!@#$%^&*()_";
    password = "";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }

    setPassword(password);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed]);

  return (
    <div className="w-full h-screen bg-black flex justify-center">
      <div className="my-12 bg-gray-700 w-3/6 h-2/6 rounded-xl">
        <h1 className="text-orange-500 text-4xl bg-slate-100 text-center rounded-xl py-2">
          Password Generator
        </h1>
        <div className="flex justify-center my-10">
          <input
            type="text"
            placeholder="Password"
            readOnly
            className="w-4/6 outline-none p-2 rounded-l-lg rounded-r-sm text-orange-500"
            value={password}
            ref={passRef}
          />
          <button
            type="button"
            className="h-10 w-16 bg-blue-700 rounded-r-lg hover:bg-blue-800 text-white hover:text-lg"
            onClick={() => {
              passRef.current.select();
              passRef.current.setSelectionRange(0,100);
              window.navigator.clipboard.writeText(password);
            }}
          >
            Copy
          </button>
        </div>
        <div className="flex justify-center my-6">
          <input
            type="range"
            min={8}
            max={99}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="mr-4"
          />
          <input
            type="checkbox"
            id="number"
            value={numberAllowed}
            onChange={() => {
              setNumberAllowed((value) => !value);
            }}
          />
          <label htmlFor="number" className="mr-4 ml-2 text-orange-500">
            Include Number
          </label>
          <input
            type="checkbox"
            id="character"
            value={characterAllowed}
            onChange={() => {
              setCharacterAllowed((value) => !value);
            }}
          />
          <label htmlFor="character" className="mr-4 ml-2 text-orange-500">
            Include Password
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
