type AbsolutePath_3704 = string & {_brand: 'abs'};
function listAbsolutePath_3704(path: AbsolutePath_3704) {
  // ...
}
function isAbsolutePath_3704(path: string): path is AbsolutePath_3704 {
  return path.startsWith('/');
}
function f_3704(path: string) {
  if (isAbsolutePath_3704(path)) {
    listAbsolutePath_3704(path);
  }
  listAbsolutePath_3704(path);
                // ~~~~ Argument of type 'string' is not assignable
                //      to parameter of type 'AbsolutePath'
}
