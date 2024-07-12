import React from 'react';

import { Routes, Route } from 'react-router-dom';

import AlbumPage from '../pages/AlbumPage';
import ArtistPage from '../pages/ArtistPage';

const Navigation = (): React.JSX.Element => (
  <Routes>
    <Route path='/' element={<ArtistPage />} />
    <Route path='/album/:id' element={<AlbumPage />} />
    <Route path='/artist/:id' element={<ArtistPage />} />
  </Routes>
);

export default Navigation;
