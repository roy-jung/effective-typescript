interface Album_3303 {
  artist: string;
  title: string;
  releaseDate: string;  // YYYY-MM-DD
  recordingType: string;  // E.g., "live" or "studio"
}
const kindOfBlue_3303: Album_3303 = {
  artist: 'Miles Davis',
  title: 'Kind of Blue',
  releaseDate: 'August 17th, 1959',  // Oops!
  recordingType: 'Studio',  // Oops!
};  // OK
function recordRelease_3303(title: string, date: string) { /* ... */ }
recordRelease_3303(kindOfBlue_3303.releaseDate, kindOfBlue_3303.title);  // OK, should be error
