interface Name_3212 {
  name: string;
}

interface PersonWithBirth_3212 extends Name_3212 {
  placeOfBirth: string;
  dateOfBirth: Date;
}

type Person_3212 = Name_3212 | PersonWithBirth_3212;
function eulogize(p: Person_3212) {
  if ('placeOfBirth' in p) {
    p // Type is PersonWithBirth
    const {dateOfBirth} = p  // OK, type is Date
  }
}
