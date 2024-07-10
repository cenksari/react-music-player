import React from 'react';

// interfaces
interface IProps {
  image: string;
  children: React.ReactNode;
}

const Cover = ({ image, children }: IProps): React.JSX.Element => (
  <>
    <div
      className='cover'
      style={{
        backgroundImage: `url('${image}')`,
      }}
    />
    <div className='full-h flex flex-v-center flex-h-center'>{children}</div>
  </>
);

export default Cover;
