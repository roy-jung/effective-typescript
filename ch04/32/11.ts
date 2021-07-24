interface Name_3211 {
  name: string;
}

interface PersonWithBirth_3211 extends Name_3211 {
  placeOfBirth: string;
  dateOfBirth: Date;
}

type Person_3211 = Name_3211 | PersonWithBirth_3211;
