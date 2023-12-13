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
  describe('row', () => {
    it('should add line when increase', () => {
      const { map, updateMapRow, setRow, initMap } = useMapEditStore()

      initMap(2, 2)

      setRow(3)

      updateMapRow()

      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
        ]
      `)
    })
    it('should remove line when decrease', () => {
      const { map, updateMapRow, setRow, initMap } = useMapEditStore()

      initMap(3, 3)

      setRow(1)

      updateMapRow()

      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
            2,
          ],
        ]
      `)
    })
  })
})
