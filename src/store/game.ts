import type { levelGameData } from '@/game/gameData'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useCargoStore } from './cargo'
import { useMapStore } from './map'
import { usePlayerStore } from './player'
import { useTargetStore } from './target'

interface Game {
  isGameCompleted: boolean
}

export const useGameStore = defineStore('game', () => {
  const game = reactive<Game>({
    isGameCompleted: false
  })

  function setupGame(levelGameData: levelGameData) {
    const { player } = usePlayerStore()
    const { addCarge, createCargo } = useCargoStore()
    const { addTarget, createTarget } = useTargetStore()
    const { setupMap } = useMapStore()

    player.x = levelGameData.player.x
    player.y = levelGameData.player.y
    setupMap(levelGameData.map)

    levelGameData.cargos.forEach((c) => {
      addCarge(createCargo({ x: c.x, y: c.y }))
    })
    levelGameData.targets.forEach((t) => {
      addTarget(createTarget({ x: t.x, y: t.y }))
    })
  }
  function detectionGameCompleted() {
    const { cargos } = useCargoStore()
    game.isGameCompleted = cargos.every((c) => c.onTarget)
  }
  return {
    game,
    setupGame,
    detectionGameCompleted
  }
})
