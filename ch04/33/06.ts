type RecordingType_3306 = 'studio' | 'live';

interface Album_3306 {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: RecordingType_3306;
}
function getAlbumsOfType_3306(recordingType: string): Album_3306[] {
  // COMPRESS
  return [];
  // END
}

