import React from 'react';

import './style.scss';

const ScrollProgress = () => {
  const [value, setValue] = React.useState(0);
  const progressRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let scrollElement: HTMLElement | null = null;
    let currentElement = progressRef.current?.parentElement;

    while (currentElement && !scrollElement) {
      if (currentElement.clientHeight < currentElement.scrollHeight) {
        scrollElement = currentElement;
      } else {
        currentElement = currentElement.parentElement;
      }
    }

    if (scrollElement) {
      const fullValue = scrollElement.scrollHeight - scrollElement.clientHeight;

      const scrollHandler = () => {
        const progressValue = Math.ceil(scrollElement!.scrollTop) / fullValue;
        setValue(progressValue);
      };

      scrollElement.addEventListener('scroll', scrollHandler);

      return () => {
        scrollElement!.removeEventListener('scroll', scrollHandler);
      };
    }
  }, []);

  return (
    <div ref={progressRef} className="scroll-progress_block">
      <progress value={value}></progress>
    </div>
  );
};

export default ScrollProgress;
