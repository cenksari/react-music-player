import React from 'react';

// interfaces
interface IProps {
  image: string;
  children: React.ReactNode;
}

const Cover = ({ image, children }: IProps): React.JSX.Element => (
  <>
    <div
      style={{
        backgroundImage: `url('${image}')`,
      }}
      className='cover'
    />
    {children}
  </>
);

export default Cover;
