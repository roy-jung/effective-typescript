interface ScatterProps_1805 {
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
const REQUIRES_UPDATE_1805: { [k in keyof ScatterProps_1805]: boolean } = {
  xs: true,
  ys: true,
  xRange: true,
  yRange: true,
  color: true,
  onClick: false,
}

function shouldUpdate_1805(oldProps: ScatterProps_1805, newProps: ScatterProps_1805) {
  let k: keyof ScatterProps_1805
  for (k in oldProps) {
    if (oldProps[k] !== newProps[k] && REQUIRES_UPDATE_1805[k]) {
      return true
    }
  }
  return false
}
