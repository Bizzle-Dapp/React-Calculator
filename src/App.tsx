import React , { useState } from 'react';
import  Logo from './widgets';
import styled from 'styled-components';

function App() {
  const Body = styled.div`
    margin: 15px !important;
    text-align: center !important;
    min-height: 50vh !important;
    display: block !important;
    align-items: center !important;
    justify-content: center !important;
    font-size: calc(10px + 2vmin) !important;
    color: white !important;
    margin: auto !important;
    width: 95% !important;

  @media (prefers-reduced-motion: no-preference) {
    .Logo {
      margin-top: 25px;
      animation: App-logo-spin infinite 20s linear;
    }
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  `;

 const CalculatorBody = styled.div`
    margin: auto !important;
    width: 100% !important;
    border-radius: 10px !important;
    border: 2px solid #a0a0a0 !important;
`;

 const ResultView = styled.div`
    height: 50px !important; 
    border-bottom: 2px white solid !important;
    border-top-left-radius: inherit !important; 
    border-top-right-radius: inherit !important;
    border-bottom-right-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    text-align: right !important; 
    padding: 5px 10px 5px 10px !important;
`;

 const Button = styled.button`
    color: white !important; 
    margin: 2px !important;
    padding: 5px 10px 5px 10px !important; 
    background: #8a2be2 !important; 
    border-radius: 5px !important; 
    box-shadow: -1px 1px 2px 1px rgb(115, 109, 109) !important;
    font-size: medium !important;
    font-family: sans-serif !important;
    font-weight: 600 !important;
`;

 const Input = styled.input`
    color: black !important;
    width: 25% !important; 
    margin: 2px !important;
    padding: 5px 10px 5px 10px !important; 
    background: rgb(197, 197, 197) !important;
    border-radius: 5px !important; 
    box-shadow: -1px 1px 2px 1px rgb(115, 109, 109) !important;
    font-size: medium !important;
    font-family: sans-serif !important;
    font-weight: 600 !important;
`;

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
    <Body>
      <Logo/>
      <p>Calculator</p>
      <CalculatorBody> {/* Calculator Body */}
        <ResultView > {/* Calculator Result Display */}
          <div style={{background: "white", padding: "2px 5px 2px 5px", borderTopLeftRadius:"5px", borderTopRightRadius:"5px", color:"black"}}>
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
    </Body>
  );
}

export default App;
