import styled from 'styled-components';

export const CalculatorBody = styled.div`
    width: 50vw;
    border-radius: 10px;
    border: 2px solid #a0a0a0;
`;

export const ResultView = styled.div`
    height: 50px; 
    border-bottom: 2px white solid;
    border-top-left-radius: inherit; 
    border-top-right-radius: inherit;
    text-align: right; 
    padding: 5px 10px 0px 10px;
`;

export const Button = styled.button`
    color: white; 
    margin: 2px;
    padding: 5px 10px 5px 10px; 
    background: #8a2be2;
    border-radius: 5px; 
    box-shadow: -1px 1px 2px 1px rgb(115, 109, 109);
    font-size: medium;
    font-family: sans-serif;
    font-weight: 600;
`;

export const Input = styled.input`
    color: black;
    width: 50px; 
    margin: 2px;
    padding: 5px 10px 5px 10px; 
    background: rgb(197, 197, 197;
    border-radius: 5px; 
    box-shadow: -1px 1px 2px 1px rgb(115, 109, 109);
    font-size: medium;
    font-family: sans-serif;
    font-weight: 600;
`;