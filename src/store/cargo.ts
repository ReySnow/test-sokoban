import { Positon } from '@/composables/usePosition'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useMapStore } from './map'

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

  function moveCargo(cargo: Cargo, dx: number, dy: number) {
    const { isWall } = useMapStore()
    const position = { x: cargo.x + dx, y: cargo.y + dy }

    if (isWall(position)) return false
    if (findCargo(position)) return false

    cargo.x += dx
    cargo.y += dy
    return true
  }

  return {
    cargos,
    createCargo,
    addCarge,
    findCargo,
    moveCargo
  }
})
