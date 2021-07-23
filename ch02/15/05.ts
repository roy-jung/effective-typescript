function parseCSV_1505(input: string): { [columnName: string]: string }[] {
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
interface ProductRow_1505 {
  productId: string
  name: string
  price: string
}

declare let csvData_1505: string
const products_1505 = parseCSV_1505(csvData_1505) as unknown as ProductRow_1505[]
