const dates_1709: readonly Date[] = [new Date()]
dates_1709.push(new Date())
// ~~~~ Property 'push' does not exist on type 'readonly Date[]'
dates_1709[0].setFullYear(2037) // OK
