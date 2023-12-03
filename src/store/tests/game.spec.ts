import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useCargoStore } from '../cargo'
import { useGameStore } from '../game'
import { useMapStore } from '../map'
import { usePlayerStore } from '../player'
import { useTargetStore } from '../target'

describe('game', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    const { setupMap } = useMapStore()
    setupMap([
      [1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1]
    ])
  })
  it('should game completed', () => {
    const { detectionGameCompleted, game } = useGameStore()

    const { addCarge, createCargo, moveCargo } = useCargoStore()
    const cargo = createCargo({ x: 1, y: 1 })
    addCarge(cargo)

    const { addTarget, createTarget } = useTargetStore()
    addTarget(createTarget({ x: 2, y: 1 }))

    moveCargo(cargo, 1, 0)
    detectionGameCompleted()
    expect(game.isGameCompleted).toBe(true)
  })

  it('should game not completed', () => {
    const { detectionGameCompleted, game } = useGameStore()

    const { addCarge, createCargo, moveCargo } = useCargoStore()
    const cargo = createCargo({ x: 1, y: 1 })
    addCarge(cargo)

    const { addTarget, createTarget } = useTargetStore()
    addTarget(createTarget({ x: 2, y: 1 }))

    moveCargo(cargo, 1, 0)
    moveCargo(cargo, 1, 0)

    detectionGameCompleted()
    expect(game.isGameCompleted).toBe(false)
  })
  it('should setup game', () => {
    const { setupGame } = useGameStore()

    const levelGameData = {
      player: {
        x: 1,
        y: 1
      },
      map: [
        [1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1]
      ],
      targets: [
        {
          x: 3,
          y: 2
        }
      ],
      cargos: [
        {
          x: 2,
          y: 2
        }
      ]
    }

    setupGame(levelGameData)

    const { player } = usePlayerStore()
    const { map } = useMapStore()
    const { targets } = useTargetStore()
    const { cargos } = useCargoStore()

    expect(player.x).toBe(levelGameData.player.x)
    expect(player.y).toBe(levelGameData.player.y)
    expect(map).toEqual(levelGameData.map)
    expect(cargos.length).toBe(levelGameData.cargos.length)
    expect(targets.length).toBe(levelGameData.targets.length)
  })
})
