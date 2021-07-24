type RecordingType_3310 = 'studio' | 'live';

interface Album_3310 {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: RecordingType_3310;
}
type K = keyof Album_3310;
// Type is "artist" | "title" | "releaseDate" | "recordingType"
