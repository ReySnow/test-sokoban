import { defineStore } from 'pinia'

export enum MapTile {
  WALL = 1,
  FLOOR = 2
}

type Map = MapTile[][]

interface Positon {
  x: number
  y: number
}

export const useMapStore = defineStore('map', () => {
  let map = [
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1]
  ]
  function setupMap(newMap: Map) {
    map.splice(0, map.length, ...newMap)
  }

  function isWall(position: Positon) {
    return map[position.y][position.x] === MapTile.WALL
  }
  return {
    map,
    setupMap,
    isWall
  }
})
