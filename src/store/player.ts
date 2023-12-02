import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useCargoStore } from './cargo'
import { useMapStore } from './map'

export const usePlayerStore = defineStore('player', () => {
  const { isWall } = useMapStore()
  const { findCargo } = useCargoStore()
  const player = reactive({
    x: 1,
    y: 1
  })

  function _move(dx: number, dy: number) {
    const position = { x: player.x + dx, y: player.y + dy }
    if (isWall(position)) return

    const cargo = findCargo(position)
    if (cargo) {
      cargo.x += dx
      cargo.y += dy
    }
    player.x += dx
    player.y += dy
  }
  function movePlayerToLeft() {
    _move(-1, 0)
  }

  function movePlayerToRight() {
    _move(1, 0)
  }

  function movePlayerToUp() {
    _move(0, -1)
  }

  function movePlayerToDown() {
    _move(0, 1)
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown
  }
})
