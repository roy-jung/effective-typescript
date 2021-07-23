interface ScatterProps_1807 {
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
interface ScatterProps_1807 {
  // ...
  onDoubleClick: () => void
}
const REQUIRES_UPDATE_1807: { [k in keyof ScatterProps_1807]: boolean } = {
  //  ~~~~~~~~~~~~~~~ Property 'onDoubleClick' is missing in type
  // COMPRESS
  xs: true,
  ys: true,
  xRange: true,
  yRange: true,
  color: true,
  onClick: false,
  // END
}
