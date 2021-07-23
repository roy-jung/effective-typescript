function parseCSV_1506(input: string): { [columnName: string]: string }[] {
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
interface ProductRow_1506 {
  productId: string
  name: string
  price: string
}

declare let csvData_1506: string
const products_1506 = parseCSV_1506(csvData) as unknown as ProductRow_1506[]
function safeParseCSV_1506(input: string): { [columnName: string]: string | undefined }[] {
  return parseCSV_1506(input)
}
