import React from 'react';
import logoWhite from '../../images/logo_white.svg';
import logoViolet from '../../images/logo_violet.svg';
import { useTheme } from '../../contexts/Theme/Theme.context';

import './Footer.style.css';

export const Footer: React.FC = () => {
  const { themeType } = useTheme();
  const logoSrc = themeType === 'dark' ? logoWhite : logoViolet;

  return (
    <div className={'footer'}>
      <img
        className={'footer__logo'}
        src={logoSrc}
        alt={'logo'}
      />
    </div>
  )
}