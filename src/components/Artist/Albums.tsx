import { Link } from 'react-router-dom';

// components
import Card from '../Album/Card';
import Slider from '../Common/Slider';

// types
import type { IAlbum } from '../../types/types';

// interfaces
interface IProps {
  url: string;
  title: string;
  albums: IAlbum[];
}

const Albums: React.FC<IProps> = ({ url, title, albums }) => (
  <section className='container flex flex-column flex-gap'>
    <div className='flex flex-space-between flex-v-center'>
      <Link to={url} className='active-opacity underline'>
        <h2>{title}</h2>
      </Link>
    </div>
    <Slider>
      {albums.map((item: IAlbum) => (
        <Card key={item.id} album={item} />
      ))}
    </Slider>
  </section>
);

export default Albums;
