// tsConfig: {"noImplicitAny":false}

//str은 string인 것 같아서 형식 지정 했는데 base은 잘 모르겠지만 number로 설정했습니다
//본문( str, base)
function parseNum5822(str: string, base: number) {
  base = base || 10;
  return parseInt(str, base);
}
