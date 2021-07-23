function parseCSV_1509(input: string): { [columnName: string]: string }[] {
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
interface ProductRow_1509 {
  productId: string
  name: string
  price: string
}

declare let csvData_1509: string
const products_1509 = parseCSV_1509(csvData) as unknown as ProductRow_1509[]
function safeParseCSV_1509(input: string): { [columnName: string]: string | undefined }[] {
  return parseCSV_1509(input)
}
type Vec3D_1509 = Record<'x' | 'y' | 'z', number>
// Type Vec3D = {
//   x: number;
//   y: number;
//   z: number;
// }
