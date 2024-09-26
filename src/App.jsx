import "./App.css"
import React, {useState} from 'react';

function App() {

  const [firstInput, setFirstInput] = useState("");
  const [operation, setOperation] = useState(null);
  const [secondInput, setSecondInput] = useState("0");
  const [result, setResult] = useState("0");

  const handleNumberClick = (number, panel) =>{
    if(panel ==="first"){
      setFirstInput((prev)=> prev + number);
    }else if (panel ==="second"){
      setSecondInput((prev)=> prev + number)
    }

    
  }
  const handleClear = () =>{
      setFirstInput("");
      setSecondInput("")
      setOperation("+")
      setResult("0")
  }

  const handleEqualClick = () =>{
    if(firstInput !=="" && secondInput !== "" && operation){
      let calculation = 0;
      const first = parseFloat(firstInput)
      const second = parseFloat(secondInput)

      switch(operation){
        case "+":
          calculation = first + second
          break;
        case "-":
          calculation = first - second
          break;
        case "*":
          calculation = first * second
          break;
        case "÷":
          calculation = first / second;
          break;
        default:
          return
      }
      setResult(calculation)
    }
  }


  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstInput || "0"}</p>
        <div className="numbers">
          {[1,2,3,4,5,6,7,8,9,0].map((number) =>(
            <button key={number} onClick={() => handleNumberClick(number, "first")}>
              {number}
            </button>
          ))}
          <button onClick={() =>handleClear()}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation || "+"}</p>
        <div className="numbers">
          <button onClick={() => setOperation("+")}>+</button>
          <button onClick={() => setOperation("-")}>-</button>
          <button onClick ={() => setOperation("*")}>*</button>
          <button onClick ={() => setOperation("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondInput || "0"}</p>
        <div className="numbers">{[1,2,3,4,5,6,7,8,9,0].map((number) =>(
            <button key={number} onClick={() => handleNumberClick(number, "second")}>
              {number}
            </button>
          ))}
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleEqualClick}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
