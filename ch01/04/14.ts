interface PostgresDB_0414 {
  runQuery: (sql: string) => any[]
}
interface Author_0414 {
  first: string
  last: string
}
interface DB_0414 {
  runQuery: (sql: string) => any[]
}
function getAuthors_0414(database: DB_0414): Author_0414[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`)
  return authorRows.map(row => ({ first: row[0], last: row[1] }))
}
test('getAuthors', () => {
  const authors = getAuthors_0414({
    runQuery(sql: string) {
      return [
        ['Toni', 'Morrison'],
        ['Maya', 'Angelou'],
      ]
    },
  })
  expect(authors).toEqual([
    { first: 'Toni', last: 'Morrison' },
    { first: 'Maya', last: 'Angelou' },
  ])
})
