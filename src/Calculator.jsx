import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [display, setDisplay] = useState('0');

  const handleNumber = (num) => {
    if (display === '0' && num === '0') return;
    const newDisplay = display === '0' ? num : display + num;
    setDisplay(newDisplay);
    setExpression((prev) => prev + num);
  };

  const handleOperator = (op) => {
    if (/[+\-*/]$/.test(expression)) {
      setExpression((prev) => prev.slice(0, -1) + op);
    } else {
      setExpression((prev) => prev + op);
    }
    setDisplay(op);
  };

  const handleEquals = () => {
    try {
      const result = eval(expression.replace(/--/g, '+'));
      setDisplay(result.toString());
      setExpression(result.toString());
    } catch {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setExpression('');
    setDisplay('0');
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay((prev) => prev + '.');
      setExpression((prev) => prev + '.');
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div id="display" className="display">{display}</div>
        <div className="buttons-grid">
          {/* TOP ROW: AC, /, * */}
          <Button id="clear" label="AC" className="btn-clear" onClick={handleClear} />
          <Button id="divide" label="/" className="btn-operator" onClick={() => handleOperator('/')} />
          <Button id="multiply" label="*" className="btn-operator" onClick={() => handleOperator('*')} />
          <Button id="subtract" label="-" className="btn-operator" onClick={() => handleOperator('-')} />

          {/* ROW: 7 8 9 + */}
          <Button id="seven" label="7" onClick={() => handleNumber('7')} />
          <Button id="eight" label="8" onClick={() => handleNumber('8')} />
          <Button id="nine" label="9" onClick={() => handleNumber('9')} />
          <Button id="add" label="+" className="btn-operator" onClick={() => handleOperator('+')} />

          {/* ROW: 4 5 6 = */}
          <Button id="four" label="4" onClick={() => handleNumber('4')} />
          <Button id="five" label="5" onClick={() => handleNumber('5')} />
          <Button id="six" label="6" onClick={() => handleNumber('6')} />
          <Button id="equals" label="=" className="btn-equals" onClick={handleEquals} />

          {/* ROW: 1 2 3 */}
          <Button id="one" label="1" onClick={() => handleNumber('1')} />
          <Button id="two" label="2" onClick={() => handleNumber('2')} />
          <Button id="three" label="3" onClick={() => handleNumber('3')} />

          {/* ROW: 0 (span 2), . */}
          <Button id="zero" label="0" className="btn-zero" onClick={() => handleNumber('0')} />
          <Button id="decimal" label="." onClick={handleDecimal} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
