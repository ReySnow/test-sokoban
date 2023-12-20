import floorImg from '@/assets/floor.png'
import playerImg from '@/assets/keeper.png'
import wallImg from '@/assets/wall.png'
import { Positon } from '@/composables/usePosition'
import { defineStore } from 'pinia'
import { MapTile } from '../map'
import { useEditPlayerStore } from './editPlayer'
import { useMapEditStore } from './mapEdit'

export interface EditElement {
  img: string
  execute: (position: Positon) => void
}

export const wallEditElement: EditElement = {
  img: wallImg,
  execute: (position) => {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.WALL
  }
}

export const floorEditElement: EditElement = {
  img: floorImg,
  execute: (position) => {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.FLOOR
  }
}

export const playerEditElement: EditElement = {
  img: playerImg,
  execute: (position) => {
    const { player } = useEditPlayerStore()
    player.x = position.x
    player.y = position.y
  }
}
export const useEditElementStore = defineStore('editElement', () => {
  let currentSelectEditElement: EditElement
  function getCurrentSelectedEditElement() {
    return currentSelectEditElement
  }
  function setCurrentSelectedEditElement(editElement: EditElement) {
    currentSelectEditElement = editElement
  }
  return {
    getCurrentSelectedEditElement,
    setCurrentSelectedEditElement
  }
})
