import React , { useState } from 'react';
import './App.css';
import  Logo from './widgets';
import { CalculatorBody, Button, Input } from './styled-constants';

function App() {
  const [calcResult, setCalcResult] = useState(0);
  const [selectedCalcFunction, setSelectedCalcFunction] = useState('None');
  const [numericInput, setNumericInput] = useState(0);

  const updateSelectedCalcFunction = (val: string) => {
    if(val === selectedCalcFunction)
    {
      setSelectedCalcFunction("None");
      return;
    }
    switch(val)
    {
      case "+":
        setSelectedCalcFunction("+");
        return;
      case "-":
        setSelectedCalcFunction("-");
        return;
      case "÷":
        setSelectedCalcFunction("÷");
        return;
      case "x":
        setSelectedCalcFunction("x");
        return;
    }
  }

  const performCalculation = () => {
    let startingValue = calcResult;
    switch(selectedCalcFunction)
    {
      case "+":
        setCalcResult(startingValue + numericInput);
        return;
      case "-":
        setCalcResult(startingValue - numericInput);
        return;
      case "÷":
        setCalcResult(startingValue / numericInput);
        return;
      case "x":
        setCalcResult(startingValue * numericInput);
        return;
    }

  }

  return (
    <div className="App">
      <Logo/>
      <p>Calculator</p>
      <CalculatorBody> {/* Calculator Body */}
        <div style={{background: "#c5c5c5", height: "50px", borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit", textAlign:"right", padding:"5px 10px 0px 10px"}}> {/* Calculator Result Display */}
          {calcResult}
        </div>
        <div> {/* Calculator Function Buttons */}
          <Button style={{background: "rgb(197, 197, 197)", marginRight:"15px"}}>Selected: {selectedCalcFunction}</Button>
          <Button onClick={() => {updateSelectedCalcFunction("+")}}>+</Button>
          <Button onClick={() => {updateSelectedCalcFunction("-")}}>-</Button>
          <Button onClick={() => {updateSelectedCalcFunction("÷")}}>÷</Button>
          <Button onClick={() => {updateSelectedCalcFunction("x")}}>x</Button>
        </div>
        <div> {/* Numeric Input */}
          <Input type="number" value={numericInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setNumericInput(Number(e.target.value))}}></Input>
          <Button onClick={()=> {setNumericInput(numericInput * -1)}}>+/-</Button>
        </div>
        <div>{/* Go and Clear Buttons */}
          <Button onClick={() => {performCalculation()}}>=</Button>
          <Button onClick={() => {setCalcResult(0)}}>Clear</Button>
        </div>
      </CalculatorBody>
    </div>
  );
}

export default App;
