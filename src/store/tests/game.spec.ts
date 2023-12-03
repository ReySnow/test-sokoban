import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useCargoStore } from '../cargo'
import { useGameStore } from '../game'
import { useTargetStore } from '../target'

describe('game', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
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
})
