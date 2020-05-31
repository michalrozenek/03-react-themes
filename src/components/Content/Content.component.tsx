import React from 'react';

import { Button } from '../Button/Button.component';

import './Content.style.css';

export const Content: React.FC = () => {
  return (
    <div
      className={'content'}
    >
      <h1 className={'content__title'}>
        <span className={'content__title--colored'}>Themes </span>
        in React
      </h1>
      <p className={'content__paragraph'}>
        This is an example how to make <b>themes</b> in React application
        Watch my new video to see how to do this in easy way
      </p>
      <p className={'content__paragraph'}>
        Example contains React with <b>Typescript</b>, <b>Context API</b> and <b>React Hooks</b>
      </p>
      <div className={'content__buttons'}>
        <Button
          type={'primary'}
          onClick={() => console.log('light')}
        >
            Light theme
        </Button>
        <Button
          type={'secondary'}
          onClick={() => console.log('dark')}
        >
          Dark theme
        </Button>
      </div>
    </div>
  )
};