function parseCSV_1510(input: string): { [columnName: string]: string }[] {
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
interface ProductRow_1510 {
  productId: string
  name: string
  price: string
}

declare let csvData_1510: string
const products_1510 = parseCSV_1510(csvData_1510) as unknown as ProductRow_1510[]
function safeParseCSV_1510(input: string): { [columnName: string]: string | undefined }[] {
  return parseCSV_1510(input)
}
type Vec3D_1510 = { [k in 'x' | 'y' | 'z']: number }
// Same as above
type ABC_1510 = { [k in 'a' | 'b' | 'c']: k extends 'b' ? string : number }
// Type ABC_1510 = {
//   a: number;
//   b: string;
//   c: number;
// }
