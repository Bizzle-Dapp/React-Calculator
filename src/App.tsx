import React , { useState } from 'react';
import './App.css';
import  Logo from './widgets';
import { CalculatorBody, Button, Input } from './styled-constants';

function App() {
  const [calcResult, setCalcResult] = useState(0);
  const [selectedCalcFunction, setSelectedCalcFunction] = useState('None');
  const [numericInput1, setNumericInput1] = useState(0);
  const [numericInput2, setNumericInput2] = useState(0);

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
        setCalcResult(numericInput1 + numericInput2);
        return;
      case "-":
        setCalcResult(numericInput1 - numericInput2);
        return;
      case "÷":
        setCalcResult(numericInput1 / numericInput2);
        return;
      case "x":
        setCalcResult(numericInput1 * numericInput2);
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
        <div> {/* Numeric Input1 */}
          <Input type="number" value={numericInput1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setNumericInput1(Number(e.target.value))}}></Input>
          <Button onClick={()=> {setNumericInput1(numericInput1 * -1)}}>+/-</Button>
        </div>
        <div> {/* Calculator Function Buttons */}
          <Button style={{background: "rgb(197, 197, 197)", marginRight:"15px"}}>Selected: {selectedCalcFunction}</Button>
          <Button onClick={() => {updateSelectedCalcFunction("+")}}>+</Button>
          <Button onClick={() => {updateSelectedCalcFunction("-")}}>-</Button>
          <Button onClick={() => {updateSelectedCalcFunction("÷")}}>÷</Button>
          <Button onClick={() => {updateSelectedCalcFunction("x")}}>x</Button>
        </div>
        <div> {/* Numeric Input2 */}
          <Input type="number" value={numericInput2} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setNumericInput2(Number(e.target.value))}}></Input>
          <Button onClick={()=> {setNumericInput2(numericInput2 * -1)}}>+/-</Button>
        </div>
        <div>{/* Go and Clear Buttons */}
          <Button onClick={() => {performCalculation(); setNumericInput1(0); setNumericInput2(0)}}>=</Button>
          <Button onClick={() => {setCalcResult(0); setNumericInput1(0); setNumericInput2(0)}}>Clear</Button>
        </div>
      </CalculatorBody>
    </div>
  );
}

export default App;
