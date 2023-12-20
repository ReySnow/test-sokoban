import floorImg from '@/assets/floor.png'
import playerImg from '@/assets/keeper.png'
import wallImg from '@/assets/wall.png'
import { Positon } from '@/composables/usePosition'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { MapTile } from '../map'
import { useEditPlayerStore } from './editPlayer'
import { useMapEditStore } from './mapEdit'

export interface EditElement {
  name: string
  img: string
  execute: (position: Positon) => void
}

export const wallEditElement: EditElement = {
  name: '墙',
  img: wallImg,
  execute: (position) => {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.WALL
  }
}

export const floorEditElement: EditElement = {
  name: '地板',
  img: floorImg,
  execute: (position) => {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.FLOOR
  }
}

export const playerEditElement: EditElement = {
  name: '玩家',
  img: playerImg,
  execute: (position) => {
    const { player } = useEditPlayerStore()
    player.x = position.x
    player.y = position.y
  }
}
export const useEditElementStore = defineStore('editElement', () => {
  const currentSelectEditElement = ref<EditElement>()
  function getCurrentSelectedEditElement() {
    return currentSelectEditElement.value
  }
  function setCurrentSelectedEditElement(editElement: EditElement) {
    currentSelectEditElement.value = editElement
  }
  return {
    getCurrentSelectedEditElement,
    setCurrentSelectedEditElement
  }
})
