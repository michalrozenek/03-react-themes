import React from 'react';

import { useTheme } from './contexts/Theme/Theme.context';
import { Content } from './components/Content/Content.component';
import { Footer } from './components/Footer/Footer.component';
import bg from './images/bg_shapes.svg';

import './App.css';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={'app'}
      style={{
        ...theme
      } as React.CSSProperties}
    >
      <div className={'app__main'}>
        <Content />
        <Footer />
      </div>
      <div className={'app__bg'}>
        <img src={bg} alt={'bg'} />
      </div>
    </div>
  );
};