interface PostgresDB_0412 {
  runQuery: (sql: string) => any[]
}
interface Author_0412 {
  first: string
  last: string
}
function getAuthors_0412(database: PostgresDB_0412): Author_0412[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`)
  return authorRows.map(row => ({ first: row[0], last: row[1] }))
}
