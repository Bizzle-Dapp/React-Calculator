import React , { useState } from 'react';
import './App.css';
import  Logo from './widgets';
import { CalculatorBody, ResultView, Button, Input } from './styled-constants';

function App() {
  const [calcResult, setCalcResult] = useState(0);
  const [selectedCalcFunction, setSelectedCalcFunction] = useState('None');
  const [numericInput1, setNumericInput1] = useState(0);
  const [numericInput2, setNumericInput2] = useState(0);
  const [continuedCalculation, setContinuedCalculation] = useState(false);

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
        setCalcResult( continuedCalculation ? (startingValue + numericInput2) : (numericInput1 + numericInput2));
        return;
      case "-":
        setCalcResult(continuedCalculation ? (startingValue - numericInput2) : (numericInput1 - numericInput2));
        return;
      case "÷":
        setCalcResult(continuedCalculation ? (startingValue / numericInput2) : (numericInput1 / numericInput2));
        return;
      case "x":
        setCalcResult(continuedCalculation ? (startingValue * numericInput2) : (numericInput1 * numericInput2));
        return;
    }
  }

  return (
    <div className="App">
      <Logo/>
      <p>Calculator</p>
      <CalculatorBody> {/* Calculator Body */}
        <ResultView > {/* Calculator Result Display */}
          <div style={{background: "white", padding: "2px 5px 2px 5px", borderRadius:"5px", color:"black"}}>
            {calcResult}
          </div>
        </ResultView>
        {!continuedCalculation && 
          <div> {/* Numeric Input1 */}
            <Input type="number" value={numericInput1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setNumericInput1(Number(e.target.value))}}></Input>
            <Button onClick={()=> {setNumericInput1(numericInput1 * -1)}}>+/-</Button>
          </div>
        }
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
          <Button onClick={() => {performCalculation(); setNumericInput1(0); setContinuedCalculation(true);}}>=</Button>
          <Button onClick={() => {setCalcResult(0); setNumericInput1(0); setNumericInput2(0); setContinuedCalculation(false);}}>Clear</Button>
        </div>
      </CalculatorBody>
    </div>
  );
}

export default App;
