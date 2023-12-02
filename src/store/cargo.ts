import { Positon } from '@/composables/usePosition'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface Cargo {
  x: number
  y: number
}

export const useCargoStore = defineStore('cargo', () => {
  const cargos: Cargo[] = reactive([])

  function createCargo({ x, y }: { x: number; y: number }) {
    return { x, y }
  }

  function addCarge(cargo: Cargo) {
    cargos.push(cargo)
  }

  function findCargo(position: Positon) {
    return cargos.find((cargo) => {
      return cargo.x === position.x && cargo.y === position.y
    })
  }

  return {
    cargos,
    createCargo,
    addCarge,
    findCargo
  }
})
