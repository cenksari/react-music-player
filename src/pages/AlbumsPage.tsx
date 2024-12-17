// components
import Card from '../components/Album/Card';
import Search from '../components/Search/Search';

// types
import type { IAlbum } from '../types/types';

// data
import albumData from '../data/albumData.json';

const AlbumsPage: React.FC = () => (
  <div className='albums flex flex-column flex-gap no-select'>
    <div className='container flex flex-column'>
      <Search />
      <section className='flex flex-column flex-gap'>
        <div className='flex flex-space-between flex-v-center'>
          <h3>Albums</h3>
        </div>
        <div className='grid flex-gap'>
          {albumData.map((item: IAlbum) => (
            <Card key={item.id} album={item} />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default AlbumsPage;
