type RecordingType_3312 = 'studio' | 'live';

interface Album_3312 {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: RecordingType_3312;
}
function pluck_3312<T>(record: T[], key: keyof T) {
  return record.map(r => r[key]);
}
declare let albums_3312: Album_3312[];
