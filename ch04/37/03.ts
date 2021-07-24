type AbsolutePath_3703 = string & {_brand: 'abs'};
function listAbsolutePath_3703(path: AbsolutePath_3703) {
  // ...
}
function isAbsolutePath_3703(path: string): path is AbsolutePath_3703 {
  return path.startsWith('/');
}
