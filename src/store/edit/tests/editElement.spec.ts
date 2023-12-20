import { MapTile } from '@/store/map'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import {
  playerEditElement,
  useEditElementStore,
  wallEditElement
} from '../editElement'
import { useEditPlayerStore } from '../editPlayer'
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
  it('should update player position when current selected elment is player', () => {
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } =
      useEditElementStore()
    const { player } = useEditPlayerStore()

    setCurrentSelectedEditElement(playerEditElement)

    const position = { x: 1, y: 1 }

    getCurrentSelectedEditElement().execute(position)

    expect(player.x).toBe(position.x)
    expect(player.y).toBe(position.y)
  })
})
