import React from 'react';

// interfaces
interface IProps {
  children: React.ReactNode;
}

const Slider = ({ children }: IProps): React.JSX.Element => {
  const startX = React.useRef<number>(0);
  const isDown = React.useRef<boolean>(false);
  const scrollLeftX = React.useRef<number>(0);
  const preventClick = React.useRef<boolean>(false);
  const navReference = React.useRef<HTMLDivElement | any>(null);

  const [leftArrowDisable, setLeftArrowDisable] = React.useState<boolean>(true);
  const [rightArrowDisable, setRightArrowDisable] = React.useState<boolean>(false);

  /**
   * Handles the visibility of the left and right arrows based on the scroll position.
   *
   * @returns {void}
   */
  const buttons = (): void => {
    const { offsetWidth, scrollWidth, scrollLeft } = navReference.current;

    const hideLeftScroll = scrollLeft <= 0;

    const hideRightScroll = scrollWidth - Math.round(scrollLeft) <= offsetWidth + 1;

    if (hideLeftScroll) {
      setLeftArrowDisable(true);
    } else {
      setLeftArrowDisable(false);
    }

    if (hideRightScroll) {
      setRightArrowDisable(true);
    } else {
      setRightArrowDisable(false);
    }
  };

  /**
   * Handles click within the navigation reference element.
   *
   * @param {MouseEvent} e - The mouse event object.
   * @returns {void}
   */
  const click = (e: MouseEvent): void => {
    if (preventClick.current) {
      e.preventDefault();
    }
  };

  /**
   * Handles scrolling within the navigation reference element.
   *
   * @returns {void}
   */
  const scroll = React.useCallback(() => {
    buttons();
  }, []);

  /**
   * Handles mouse up within the navigation reference element.
   *
   * @returns {void}
   */
  const mouseUp = (): void => {
    isDown.current = false;
  };

  /**
   * Handles mouse down within the navigation reference element.
   *
   * @param {MouseEvent} e - The mouse event object.
   * @returns {void}
   */
  const mouseDown = React.useCallback((e: MouseEvent) => {
    e.preventDefault();

    const element: HTMLDivElement = navReference.current;

    isDown.current = true;

    startX.current = e.pageX - element.offsetLeft;

    scrollLeftX.current = element.scrollLeft;

    preventClick.current = false;

    buttons();
  }, []);

  /**
   * Handles mouse moving within the navigation reference element.
   *
   * @param {MouseEvent} e - The mouse event object.
   * @returns {void}
   */
  const mouseMove = React.useCallback((e: MouseEvent) => {
    if (!isDown.current) return;

    e.preventDefault();

    const element: HTMLDivElement = navReference.current;

    const x = e.pageX - element.offsetLeft;

    const walk = x - startX.current;

    element.scrollLeft = scrollLeftX.current - walk;

    preventClick.current = true;

    buttons();
  }, []);

  /**
   * Handles mouse leaving the navigation reference element.
   *
   * @returns {void}
   */
  const mouseLeave = (): void => {
    isDown.current = false;

    preventClick.current = false;
  };

  /**
   * Handles horizontal scrolling of the navigation reference element.
   *
   * @param {number} speed - The speed of the scrolling in milliseconds.
   * @param {number} step - The step size for each scroll interval.
   * @returns {void}
   */
  const handleHorizantalScroll = (speed: number, step: number): void => {
    let scrollAmount = 0;

    const slideTimer = setInterval(() => {
      navReference.current.scrollLeft += step;

      scrollAmount += Math.abs(step);

      if (scrollAmount >= 180) {
        clearInterval(slideTimer);
      }

      buttons();
    }, speed);
  };

  React.useEffect(() => {
    buttons();

    const element: HTMLDivElement = navReference.current;

    window.addEventListener('resize', scroll);

    element.addEventListener('click', click);
    element.addEventListener('scroll', scroll);
    element.addEventListener('mouseup', mouseUp);
    element.addEventListener('mousedown', mouseDown);
    element.addEventListener('mousemove', mouseMove);
    element.addEventListener('mouseleave', mouseLeave);

    return () => {
      window.removeEventListener('resize', scroll);

      element.removeEventListener('click', click);
      element.removeEventListener('scroll', scroll);
      element.removeEventListener('mouseup', mouseUp);
      element.removeEventListener('mousedown', mouseDown);
      element.removeEventListener('mousemove', mouseMove);
      element.removeEventListener('mouseleave', mouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='scroll-container'>
      {!leftArrowDisable && (
        <div className='left-arrow'>
          <button
            type='button'
            disabled={leftArrowDisable}
            className='button black circle active-opacity'
            onClick={() => {
              handleHorizantalScroll(15, -20);
            }}
          >
            <span className='material-symbols-outlined'>chevron_left</span>
          </button>
        </div>
      )}
      <div className='scrollable flex flex-gap' ref={navReference}>
        {children}
      </div>
      {!rightArrowDisable && (
        <div className='right-arrow'>
          <button
            type='button'
            disabled={rightArrowDisable}
            className='button black circle active-opacity'
            onClick={() => {
              handleHorizantalScroll(15, 20);
            }}
          >
            <span className='material-symbols-outlined'>chevron_right</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
