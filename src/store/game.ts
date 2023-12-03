import type { GameData } from '@/game/gameData'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useCargoStore } from './cargo'
import { useMapStore } from './map'
import { usePlayerStore } from './player'
import { useTargetStore } from './target'

interface Game {
  isGameCompleted: boolean
  level: number
}

export const useGameStore = defineStore('game', () => {
  const game = reactive<Game>({
    isGameCompleted: false,
    level: 1
  })

  let _gameData: GameData

  function setupGame(gameData: GameData) {
    _gameData = gameData
    setupLevel()
  }
  function toNextLevel() {
    game.level += 1
    game.isGameCompleted = false
    setupLevel()
  }

  function setupLevel() {
    const levelGameData = _gameData[game.level - 1]

    const { player } = usePlayerStore()
    const { addCarge, createCargo, cleanAllCargos } = useCargoStore()
    const { addTarget, createTarget, cleanAllTargets } = useTargetStore()
    const { setupMap } = useMapStore()

    player.x = levelGameData.player.x
    player.y = levelGameData.player.y

    setupMap(levelGameData.map)

    cleanAllCargos()
    levelGameData.cargos.forEach((c) => {
      addCarge(createCargo({ x: c.x, y: c.y }))
    })

    cleanAllTargets()
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
    toNextLevel,
    detectionGameCompleted
  }
})
