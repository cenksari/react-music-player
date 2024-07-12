import React from 'react';

import { Link } from 'react-router-dom';

// components
import Card from './Card';
import Slider from '../Common/Slider';

// types
import type { IAlbum } from '../../types/types';

// interfaces
interface IProps {
  title: string;
  albums: IAlbum[];
}

const Albums = ({ title, albums }: IProps): React.JSX.Element => {
  return (
    <div className='container flex flex-column flex-gap'>
      <Link to='/' className='active-opacity underline'>
        <h3>{title}</h3>
      </Link>

      <Slider>
        {albums.map((item: IAlbum) => (
          <Card key={item.id} album={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Albums;
