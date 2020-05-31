import React from 'react';

import { Content } from './components/Content/Content.component';
import { Footer } from './components/Footer/Footer.component';
import bg from './images/bg_shapes.svg';

import './App.css';

export const App = () => {

  return (
    <div
      className={'app'}
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