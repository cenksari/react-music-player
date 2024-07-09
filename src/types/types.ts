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
