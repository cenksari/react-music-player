import React from 'react';

interface IProps {
  current?: string;
  duration?: string;
}

const Duration = ({ current, duration }: IProps): React.JSX.Element => (
  <div className='player-duration flex flex-gap-medium flex-v-center'>
    <span>{current}</span>
    <em>/</em>
    <span>{duration}</span>
  </div>
);

export default Duration;
