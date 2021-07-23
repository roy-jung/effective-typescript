interface PostgresDB_0413 {
  runQuery: (sql: string) => any[]
}
interface Author_0413 {
  first: string
  last: string
}
interface DB_0413 {
  runQuery: (sql: string) => any[]
}
function getAuthors_0413(database: DB_0413): Author_0413[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`)
  return authorRows.map(row => ({ first: row[0], last: row[1] }))
}
