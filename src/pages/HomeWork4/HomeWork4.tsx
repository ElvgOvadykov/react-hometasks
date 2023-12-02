import { useRef } from './useRef';
import { randomInt } from '@/utils';

import './style.scss';

export const HomeWork4 = () => {
  console.log('render');

  const buttonRef = useRef<HTMLButtonElement>(null);

  const onClickHandler = () => {
    const button = buttonRef.current;

    if (!button) return;

    const red = randomInt(0, 255);
    const green = randomInt(0, 255);
    const blue = randomInt(0, 255);

    button.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div className="home-work_block">
      <span>Решение домашнего задания №4</span>
      <div className="home-work-4">
        <button ref={buttonRef} onClick={onClickHandler}>
          Нажми
        </button>
      </div>
    </div>
  );
};
