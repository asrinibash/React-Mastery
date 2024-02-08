import React from "react";
import { useCallback, useState,useEffect,useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //UseRef hook
  const passowordRef=useRef(null);

  const copyPasswordToClipboard=useCallback(()=>{
    passowordRef.current?.select();
    // passowordRef.current?.setSelectionRange(0,3);  copy in the range
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {   //UsecallBack back is run for optimisation,memoisation the array of is come under memoisation
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);

      setPassword(pass);
    }
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(()=>{   //useEffect is run for if array of data will change then it will run the inside code that we had given
    passwordGenerator()
  },[numAllowed,charAllowed,length,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passowordRef}
          />
          <button className="outline-none bg-blue-700 px-3 py-0.5 shrink-0 text-white hover:bg-blue-900" onClick={copyPasswordToClipboard}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{setlength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={numAllowed}
              className="cursor-pointer"
              onChange={()=>{setNumAllowed((prev)=>!prev)}}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={charAllowed}
              className="cursor-pointer"
              onChange={()=>{setCharAllowed((prev)=>!prev)}}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
