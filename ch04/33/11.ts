type RecordingType_3311 = 'studio' | 'live';

interface Album_3311 {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: RecordingType_3311;
}
function pluck_3311<T>(record: T[], key: keyof T) {
  return record.map(r => r[key]);
}
