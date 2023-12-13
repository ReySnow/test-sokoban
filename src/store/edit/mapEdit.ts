import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { MapTile } from '../map'

type MapEdit = MapTile[][]

export const useMapEditStore = defineStore('mapEdit', () => {
  const map = reactive<MapEdit>([])
  const row = ref(8)
  const col = ref(8)
  function initMap(_row?: number, _col?: number) {
    if (_row) {
      row.value = _row
    }
    if (_col) {
      col.value = _col
    }
    for (let i = 0; i < row.value; i++) {
      const cells = []
      for (let j = 0; j < col.value; j++) {
        cells.push(MapTile.FLOOR)
      }
      map.push(cells)
    }
  }
  function updateMapRow() {
    let oldRow = map.length
    let col = map[0].length
    if (row.value > oldRow) {
      for (let i = 0; i < row.value - oldRow; i++) {
        map.push(new Array(col).fill(MapTile.FLOOR))
      }
    } else if (row.value < oldRow) {
      let diff = oldRow - row.value
      map.splice(map.length - diff, map.length)
    }
  }
  function updateMapCol() {
    let oldCol = map[0].length
    if (col.value > oldCol) {
      let diff = col.value - oldCol
      map.forEach((row) => {
        row.push(...new Array(diff).fill(MapTile.FLOOR))
      })
    } else if (col.value < oldCol) {
      let diff = oldCol - col.value
      map.forEach((row) => {
        row.splice(row.length - diff, row.length)
      })
    }
  }
  function setRow(value: number) {
    row.value = value
  }
  function setCol(value: number) {
    col.value = value
  }
  return {
    map,
    row,
    col,
    setRow,
    setCol,
    updateMapRow,
    updateMapCol,
    initMap
  }
})
