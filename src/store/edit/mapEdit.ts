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
  function setRow(value: number) {
    row.value = value
  }
  return {
    map,
    row,
    col,
    setRow,
    updateMapRow,
    initMap
  }
})
