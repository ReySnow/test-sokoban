import { defineStore } from 'pinia'

export const useMapStore = defineStore('map', () => {
  const map = [1, 3]
  return { map }
})
