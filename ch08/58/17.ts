declare let obj: { props: { a: string; b: number } }
let { a: a } = obj.props
if (a === undefined) a = 'default'

export default {}
