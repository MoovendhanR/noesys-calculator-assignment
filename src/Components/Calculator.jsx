import React, { useState } from 'react';
import "../App.css";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [history, setHistory] = useState([]);

  const handleNumberClick = (number) => {
    setDisplayValue(displayValue + number);
  };

  const handleOperatorClick = (operator) => {
    setDisplayValue(displayValue + operator);
  };

  const handleEqualClick = () => {
    try {
      const result = eval(displayValue);
      setHistory([...history, `${displayValue} = ${result}`]);
      setDisplayValue(String(result));
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  return (
    <div className="container">
      <div className="history">
        <h3>History</h3>
        <ul>
          {history.map((calculation, index) => (
            <li key={index}>{calculation}</li>
          ))}
        </ul>
      </div>
      <div className="input">
        <input type="text" value={displayValue} readOnly />
      </div>
      <div className='button'>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('+')}style={{"background-color":"orange","border":"none"}}>+</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}style={{"background-color":"orange","border":"none"}}>-</button>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('*')}style={{"background-color":"orange","border":"none"}}>*</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleOperatorClick('.')}>.</button>
        <button onClick={() => handleOperatorClick('/')}style={{"background-color":"orange","border":"none"}}>/</button>
        <button onClick={() => handleOperatorClick('%')} style={{"background-color":"orange","border":"none"}}>%</button>

        <button onClick={handleEqualClick}>=</button>
        <button style={{"background-color":"red","border":"none"}} onClick={clearDisplay}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
