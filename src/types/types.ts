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
  currentState?: string | null;
  currentTrack?: ITrack | null;
  currentAlbum?: IAlbum | null;
  addItem: (track: ITrack, album: IAlbum) => void;
  removeItem: () => void;
  changeState: (state: string) => void;
}
