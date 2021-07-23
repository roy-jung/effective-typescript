interface ScatterProps_1808 {
  // The data
  xs: number[]
  ys: number[]

  // Display
  xRange: [number, number]
  yRange: [number, number]
  color: string

  // Events
  onClick: (x: number, y: number, index: number) => void
}
interface ScatterProps_1808 {
  // ...
  onDoubleClick: () => void
}
const PROPS_REQUIRING_UPDATE_1808: (keyof ScatterProps_1808)[] = [
  'xs',
  'ys',
  // ...
]
