import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useCargoStore } from '../cargo'
import { useMapStore } from '../map'
import { useTargetStore } from '../target'

describe('cargo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should add a cargo', () => {
    const { cargos, addCarge, createCargo } = useCargoStore()
    addCarge(
      createCargo({
        x: 1,
        y: 1
      })
    )
    expect(cargos.length).toBe(1)
  })

  describe('on targe', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore()
      setupMap([
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1]
      ])
    })
    it('should shift in targe', () => {
      const { addCarge, createCargo, moveCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCarge(cargo)

      const { addTarget, createTarget } = useTargetStore()
      addTarget(createTarget({ x: 3, y: 1 }))

      moveCargo(cargo, 1, 0)

      expect(cargo.onTarget).toBe(true)
    })
    it('should shift out of targe', () => {
      const { addCarge, createCargo, moveCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 1 })
      addCarge(cargo)

      const { addTarget, createTarget } = useTargetStore()
      addTarget(createTarget({ x: 2, y: 1 }))

      moveCargo(cargo, 1, 0)
      moveCargo(cargo, 1, 0)

      expect(cargo.onTarget).toBe(false)
    })
  })
})
