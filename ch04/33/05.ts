type RecordingType_3305 = 'studio' | 'live';

interface Album_3305 {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: RecordingType_3305;
}
const kindOfBlue_3305: Album_3305 = {
  artist: 'Miles Davis',
  title: 'Kind of Blue',
  releaseDate: new Date('1959-08-17'),
  recordingType: 'Studio'
// ~~~~~~~~~~~~ Type '"Studio"' is not assignable to type 'RecordingType'
};
