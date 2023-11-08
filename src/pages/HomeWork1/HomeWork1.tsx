import React from 'react';
import { randomInt } from '@/utils';
import './style.scss';

export const HomeWork1 = () => {
  const [value, setValue] = React.useState<number>(1);

  const throwDiceHandler = () => {
    const newValue = randomInt(0, 7);
    setValue(newValue);
  };

  return (
    <div className="home-work_block">
      <span>Решение домашнего задания №1</span>
      <span>{value}</span>
      <button className='throw-dice-button' type="button" onClick={throwDiceHandler}>
        Бросить куб
      </button>
    </div>
  );
};
