function pluck_3315<T, K extends keyof T>(record: T[], key: K): T[K][] {
  return record.map(r => r[key]);
}
type RecordingType_3315 = 'studio' | 'live';

interface Album_3315 {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: RecordingType_3315;
}
declare let albums_3315: Album_3315[];
pluck_3315(albums_3315, 'releaseDate'); // Type is Date[]
pluck_3315(albums_3315, 'artist');  // Type is string[]
pluck_3315(albums_3315, 'recordingType');  // Type is RecordingType[]
pluck_3315(albums_3315, 'recordingDate');
           // ~~~~~~~~~~~~~~~ Argument of type '"recordingDate"' is not
           //                 assignable to parameter of type ...
