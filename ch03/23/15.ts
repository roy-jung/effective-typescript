declare let hasDate: boolean
const nameTitle = { name: 'Khufu', title: 'Paraoh' }
const pharaoh = {
  ...nameTitle,
  ...(hasDate ? { start: -2589, end: -2566 } : {}),
}

pharaoh.start
