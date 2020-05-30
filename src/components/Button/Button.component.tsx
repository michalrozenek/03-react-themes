import React from 'react';

import { Theme } from '../../contexts/Theme/Theme.model';

import './Button.style.css';

type ButtonType = 'primary' | 'secondary';

interface ButtonProps {
  type: ButtonType;
  theme: Theme;
  onClick: (...args: any[]) => void;
}

export const Button: React.FC<ButtonProps> = ({ theme, type, onClick, children }) => (
  <button
    className={`button button--${type}`}
    onClick={onClick}
    style={{ ...theme as React.CSSProperties }}
  >
    {children}
  </button>
)