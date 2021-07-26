declare let obj: { props: { a: string; b: number } }
const { a: a = 'default' } = obj.props

export default {}
