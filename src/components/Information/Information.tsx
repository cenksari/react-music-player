// components
import Image from './Image';
import Details from './Details';
import Buttons from './Buttons';
import Playlist from './Playlist';

// types
import type { IAlbum } from '../../types/types';

// interfaces
interface IProps {
  album: IAlbum;
}

const Information: React.FC<IProps> = ({ album }) => (
  <div className='information flex flex-column flex-gap no-select'>
    <Image album={album} />
    <Details album={album} />
    <Buttons album={album} />
    <Playlist album={album} />
  </div>
);

export default Information;
