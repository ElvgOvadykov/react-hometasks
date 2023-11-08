import React from 'react';
import './style.scss';

const ValueToDotPositionsMap = new Map<number, [number, number][]>()
  .set(1, [[50, 50]])
  .set(2, [
    [20, 20],
    [80, 80],
  ])
  .set(3, [
    [20, 20],
    [50, 50],
    [80, 80],
  ])
  .set(4, [
    [20, 20],
    [20, 80],
    [80, 20],
    [80, 80],
  ])
  .set(5, [
    [20, 20],
    [20, 80],
    [80, 20],
    [80, 80],
    [50, 50],
  ])
  .set(6, [
    [20, 20],
    [20, 80],
    [50, 20],
    [50, 80],
    [80, 20],
    [80, 80],
  ]);

const Dice = ({ value }: { value: number }) => {
  if (!ValueToDotPositionsMap.has(value)) {
    return null;
  }

  const dotPositions = ValueToDotPositionsMap.get(value);

  return (
    <div className="dice">
      {dotPositions!.map(([top, left]) => {
        const styles = {
          '--top': `${top}%`,
          '--left': `${left}%`,
        };

        return <div className="dice-dot" style={styles as React.CSSProperties}></div>;
      })}
    </div>
  );
};

export default Dice;
