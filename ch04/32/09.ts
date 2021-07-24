interface Person_3209 {
  name: string;
  birth?: {
    place: string;
    date: Date;
  }
}
const alanT_3209: Person_3209 = {
  name: 'Alan Turing',
  birth: {
// ~~~~ Property 'date' is missing in type
//      '{ place: string; }' but required in type
//      '{ place: string; date: Date; }'
    place: 'London'
  }
}
