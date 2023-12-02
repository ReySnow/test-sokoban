import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useCargoStore } from '../cargo'

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
})
