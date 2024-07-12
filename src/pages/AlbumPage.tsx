import React from 'react';

import { useParams } from 'react-router-dom';

// components
import Cover from '../components/Cover/Cover';
import Information from '../components/Information/Information';

// types
import type { IAlbum } from '../types/types';

// data
import albumData from '../data/albumData.json';

const AlbumPage = (): React.JSX.Element => {
  const { id } = useParams();

  const [currentAlbumData, setCurrentAlbumData] = React.useState<IAlbum | null>(null);

  React.useEffect(() => {
    const currentAlbum = albumData.find((album) => album.id === id);

    if (currentAlbum) {
      setCurrentAlbumData(currentAlbum);
    }
  }, [id]);

  if (!currentAlbumData) {
    return <div>Album not found</div>;
  }

  return (
    <Cover image={currentAlbumData.image}>
      <Information album={currentAlbumData} />
    </Cover>
  );
};

export default AlbumPage;
