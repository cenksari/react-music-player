import React from 'react';

// interfaces
interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  duration: number;
  currentProgress: number;
  onProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Progress = ({ duration, currentProgress, onProgressChange }: IProps): React.JSX.Element => (
  <div className='progress'>
    <input
      min={0}
      type='range'
      max={duration}
      name='progress'
      value={currentProgress}
      className='progress-bar red'
      onChange={onProgressChange}
    />
  </div>
);

export default Progress;
