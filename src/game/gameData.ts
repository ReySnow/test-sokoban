import type { Map } from '../store/map'
export interface levelGameData {
  player: {
    x: number
    y: number
  }
  cargos: {
    x: number
    y: number
  }[]
  targets: {
    x: number
    y: number
  }[]
  map: Map
}

export const levelGameData = {
  player: {
    x: 1,
    y: 1
  },
  map: [
    [1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1]
  ],
  cargos: [
    {
      x: 2,
      y: 2
    }
  ],
  targets: [
    {
      x: 4,
      y: 2
    }
  ]
}
