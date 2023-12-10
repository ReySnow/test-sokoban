import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useMapEditStore } from '../mapEdit'

describe('mapEdit', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should init map', () => {
    const { map, initMap } = useMapEditStore()
    const row = 8
    const col = 8
    initMap()
    expect(map.length).toBe(row)
    expect(map[0].length).toBe(col)
  })
})
