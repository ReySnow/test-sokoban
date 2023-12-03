import { Positon } from '@/composables/usePosition'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useMapStore } from './map'
import { useTargetStore } from './target'

export interface Cargo {
  x: number
  y: number
  onTarget: boolean
}

export const useCargoStore = defineStore('cargo', () => {
  const cargos = reactive<Cargo[]>([])

  function createCargo({ x, y }: { x: number; y: number }): Cargo {
    return { x, y, onTarget: false }
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

    detectionTarget(cargo)

    return true
  }

  function detectionTarget(cargo: Cargo) {
    const { findTarget } = useTargetStore()
    cargo.onTarget = !!findTarget(cargo)
  }

  return {
    cargos,
    createCargo,
    addCarge,
    findCargo,
    moveCargo
  }
})
