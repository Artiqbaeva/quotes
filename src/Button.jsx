import React from 'react';
import './Calculator.css';

const Button = ({ id, label, className, onClick }) => {
  return (
    <button id={id} className={`button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
