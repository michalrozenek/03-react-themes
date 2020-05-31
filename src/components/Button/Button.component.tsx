import React from 'react';

import './Button.style.css';

type ButtonType = 'primary' | 'secondary';

interface ButtonProps {
  type: ButtonType;
  onClick: (...args: any[]) => void;
}

export const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => (
  <button
    className={`button button--${type}`}
    onClick={onClick}
  >
    {children}
  </button>
)