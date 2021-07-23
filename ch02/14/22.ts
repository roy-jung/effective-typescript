const INIT_OPTIONS_1422 = {
  width: 640,
  height: 480,
  color: '#00FF00',
  label: 'VGA',
}
function getUserInfo_1422(userId: string) {
  // COMPRESS
  const name = 'Bob'
  const age = 12
  const height = 48
  const weight = 70
  const favoriteColor = 'blue'
  // END
  return {
    userId,
    name,
    age,
    height,
    weight,
    favoriteColor,
  }
}
// Return type inferred as { userId: string; name: string; age: number, ... }
