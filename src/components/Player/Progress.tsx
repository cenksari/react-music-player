import React from 'react';

interface ProgressCSSProps extends React.CSSProperties {
  '--progress-width': number;
  '--buffered-width': number;
}
interface AudioProgressBarProps extends React.ComponentPropsWithoutRef<'input'> {
  duration: number;
  buffered: number;
  currentProgress: number;
}
const Progress = (props: AudioProgressBarProps): React.JSX.Element => {
  const { duration, currentProgress, buffered } = props;

  const progressBarWidth = Number.isNaN(currentProgress / duration)
    ? 0
    : currentProgress / duration;

  const bufferedWidth = Number.isNaN(buffered / duration) ? 0 : buffered / duration;

  const progressStyles: ProgressCSSProps = {
    '--progress-width': progressBarWidth,
    '--buffered-width': bufferedWidth,
  };
  return (
    <div className='progress'>
      <input
        min={0}
        max={duration}
        type='range'
        name='progress'
        className='progress-bar'
        style={progressStyles}
        value={currentProgress}
        onChange={() => {}}
      />
    </div>
  );
};

export default Progress;
