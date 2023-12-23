import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useEditCargoStore } from '../editCargo'

describe('editCargo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should remove cargo', () => {
    const { cargos, addCarge, createCargo, removeCargo } = useEditCargoStore()
    const cargo = createCargo({ x: 1, y: 1 })
    addCarge(cargo)
    removeCargo(cargo)
    expect(cargos.length).toBe(0)
  })
})
