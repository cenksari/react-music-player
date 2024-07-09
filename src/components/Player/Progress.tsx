import React from 'react';

interface IProps {
  current: number;
  duration: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Progress = ({ current, duration }: IProps): React.JSX.Element => (
  <div className='progress'>
    <div className='progress-bar' style={{ width: '20%' }} />
  </div>
);

export default Progress;
