function parseCSV_1508(input: string): { [columnName: string]: string }[] {
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
interface ProductRow_1508 {
  productId: string
  name: string
  price: string
}

declare let csvData_1508: string
const products_1508 = parseCSV_1508(csvData) as unknown as ProductRow_1508[]
function safeParseCSV_1508(input: string): { [columnName: string]: string | undefined }[] {
  return parseCSV_1508(input)
}
interface Row1_1508 {
  [column: string]: number
} // Too broad
interface Row2_1508 {
  a: number
  b?: number
  c?: number
  d?: number
} // Better
type Row3_1508 =
  | { a: number }
  | { a: number; b: number }
  | { a: number; b: number; c: number }
  | { a: number; b: number; c: number; d: number }
