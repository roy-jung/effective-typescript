// tsConfig: {"noImplicitAny":false,"strictNullChecks":false}

interface State {
  name: string;
  capital: string;
}
const state6105 = {} as State;
state6105.name = 'New York';  // OK
state6105.capital = 'Albany';  // OK
