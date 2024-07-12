export interface IArtist {
  id: string;
  name: string;
  image: string;
  description: string;
  monthlyListeners: string;
}

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
  year: number;
  name: string;
  songs: number;
  image: string;
  minutes: number;
  artist: IArtist;
  tracks: ITrack[];
  explicit: boolean;
}

export interface ITrackContext {
  currentState?: string | null;
  currentTrack?: ITrack | null;
  currentAlbum?: IAlbum | null;
  addItem: (track: ITrack, album: IAlbum) => void;
  removeItem: () => void;
  changeState: (state: string) => void;
}
