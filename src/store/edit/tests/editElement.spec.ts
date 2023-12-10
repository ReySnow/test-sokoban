import { MapTile } from '@/store/map'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useEditElementStore, wallEditElement } from '../editElement'
import { useMapEditStore } from '../mapEdit'

describe('editElement', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    const { initMap } = useMapEditStore()
    initMap()
  })
  it('should change to wall when current selected elment is wall', () => {
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } =
      useEditElementStore()
    const { map } = useMapEditStore()

    setCurrentSelectedEditElement(wallEditElement)

    getCurrentSelectedEditElement().execute({ x: 1, y: 1 })

    expect(map[1][1]).toBe(MapTile.WALL)
  })
})
