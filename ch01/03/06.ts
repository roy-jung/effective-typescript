function asNumber_0306(val: number | string): number {
  return typeof val === 'string' ? Number(val) : val
}
