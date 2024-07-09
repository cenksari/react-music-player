export interface ITrack {
  id: string;
  no: number;
  name: string;
  duration: string;
  playcount: string;
}

export interface IAlbum {
  id: string;
  name: string;
  artist: string;
  songs: number;
  minutes: number;
  image: string;
  bandimage: string;
}

export interface ITrackContext {
  track?: ITrack | null;
  album?: IAlbum | null;
  addItem: (album: IAlbum, track: ITrack) => void;
  removeItem: () => void;
}
