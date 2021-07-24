interface Person_3210 {
  name: string;
  birth?: {
    place: string;
    date: Date;
  }
}
function eulogize_3210(p: Person_3210) {
  console.log(p.name);
  const {birth} = p;
  if (birth) {
    console.log(`was born on ${birth.date} in ${birth.place}.`);
  }
}
