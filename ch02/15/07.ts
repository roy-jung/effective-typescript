function parseCSV_1507(input: string): { [columnName: string]: string }[] {
  const lines = input.split('\n')
  const [header, ...rows] = lines
  return rows.map(rowStr => {
    const row: { [columnName: string]: string } = {}
    rowStr.split(',').forEach((cell, i) => {
      row[header[i]] = cell
    })
    return row
  })
}
interface ProductRow_1507 {
  productId: string
  name: string
  price: string
}

declare let csvData_1507: string
const products_1507 = parseCSV_1507(csvData) as unknown as ProductRow_1507[]
function safeParseCSV_1507(input: string): { [columnName: string]: string | undefined }[] {
  return parseCSV_1507(input)
}
const rows_1507 = parseCSV_1507(csvData)
const prices_1507: { [produt: string]: number } = {}
for (const row of rows_1507) {
  prices_1507[row.productId] = Number(row.price)
}

const safeRows_1507 = safeParseCSV_1507(csvData_1507)
for (const row of safeRows_1507) {
  prices_1507[row.productId] = Number(row.price)
  // ~~~~~~~~~~~~~ Type 'undefined' cannot be used as an index type
}
