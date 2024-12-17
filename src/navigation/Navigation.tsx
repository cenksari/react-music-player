import { Routes, Route } from 'react-router-dom';

// pages
import AlbumPage from '../pages/AlbumPage';
import ArtistPage from '../pages/ArtistPage';
import AlbumsPage from '../pages/AlbumsPage';

const Navigation: React.FC = () => (
  <Routes>
    <Route path='/' element={<ArtistPage />} />
    <Route path='/album/:id' element={<AlbumPage />} />
    <Route path='/artist/:id' element={<ArtistPage />} />
    <Route path='/albums/:id' element={<AlbumsPage />} />
  </Routes>
);

export default Navigation;
