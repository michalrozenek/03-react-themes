import React from 'react';
import logoViolet from '../../images/logo_violet.svg';

import './Footer.style.css';

export const Footer: React.FC = () => {
  return (
    <div className={'footer'}>
      <img
        className={'footer__logo'}
        src={logoViolet}
        alt={'logo'}
      />
    </div>
  )
}