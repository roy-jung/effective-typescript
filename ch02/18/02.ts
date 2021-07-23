interface ScatterProps_1802 {
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
function shouldUpdate_1802(oldProps: ScatterProps_1802, newProps: ScatterProps_1802) {
  let k: keyof ScatterProps_1802
  for (k in oldProps) {
    if (oldProps[k] !== newProps[k]) {
      if (k !== 'onClick') return true
    }
  }
  return false
}
