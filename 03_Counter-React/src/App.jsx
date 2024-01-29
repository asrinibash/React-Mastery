import { useState } from "react";
import "./App.css";

//Now we don't have to import react because react will automatically imported by bable (behind the scences)
function App() {
  let [counter, setCounter] = useState(15);

  const addValue = function () {
    if (counter < 20) {
      counter++;
      setCounter(counter);
    } else {
      console.log("Limit Exceeds");
    } //By using this type of function we can't update the UI component
    //We have to use useState()
  }; //* Because UI components are controlled by react

  const removeValue = function () {
    if (counter > 0) {
      counter--;
      setCounter(counter); //We have to use useState()
    } else {
      console.log("Limit Exceeds");
    }
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>The initial Counter is : {counter} </h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
