class Diary {
  private secret = 'cheated on my English test'
}

const diary = new Diary()
;(diary as any).secret // OK

export default {}
