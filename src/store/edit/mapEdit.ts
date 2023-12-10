import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useMapEditStore = defineStore('mapEdit', () => {
  const map = reactive([
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2]
  ])
  return {
    map
  }
})
