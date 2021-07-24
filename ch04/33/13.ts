type RecordingType_3313 = 'studio' | 'live';

interface Album_3313 {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: RecordingType_3313;
}
function pluck_3313<T>(record: T[], key: keyof T) {
  return record.map(r => r[key]);
}
declare let albums_3313: Album_3313[];
const releaseDates_3313 = pluck_3313(albums_3313, 'releaseDate'); // Type is (string | Date)[]
