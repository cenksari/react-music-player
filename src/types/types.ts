export interface ITrack {
  id: string;
  no: number;
  name: string;
  duration: string;
  mediaurl: string;
  explicit: boolean;
  playcount: string;
}

export interface IAlbum {
  id: string;
  name: string;
  songs: number;
  image: string;
  artist: string;
  minutes: number;
  explicit: boolean;
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
