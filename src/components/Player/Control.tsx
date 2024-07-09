import React from 'react';

const Control = (): React.JSX.Element => (
  <>
    <button type='button' className='active-opacity'>
      <span className='material-symbols-outlined'>skip_previous</span>
    </button>
    <button type='button' className='big active-opacity'>
      <span className='material-symbols-outlined'>play_arrow</span>
    </button>
    <button type='button' className='active-opacity'>
      <span className='material-symbols-outlined'>skip_next</span>
    </button>
  </>
);

export default Control;
