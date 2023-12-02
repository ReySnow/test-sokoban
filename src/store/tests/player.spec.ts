import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useCargoStore } from '../cargo'
import { useMapStore } from '../map'
import { usePlayerStore } from '../player'

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  describe('norma move', () => {
    beforeEach(() => {
      // 准备测试专用的数据
      const { setupMap } = useMapStore()
      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2]
      ])
    })
    it('should move to left', () => {
      // setup
      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToLeft()
      expect(player.x).toBe(0)
    })

    it('should move to right', () => {
      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToRight()
      expect(player.x).toBe(2)
    })

    it('should move to down', () => {
      const { player, movePlayerToDown } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToDown()
      expect(player.y).toBe(2)
    })

    it('should move to up', () => {
      const { player, movePlayerToUp } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToUp()
      expect(player.y).toBe(0)
    })
  })
  describe('collisoin wall', () => {
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
    it('should not move to left when collision a wall', () => {
      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToLeft()
      expect(player.x).toBe(1)
    })
    it('should not move to right when collision a wall', () => {
      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 3
      player.y = 1
      movePlayerToRight()
      expect(player.x).toBe(3)
    })
    it('should not move to down when collision a wall', () => {
      const { player, movePlayerToDown } = usePlayerStore()
      player.x = 1
      player.y = 3
      movePlayerToDown()
      expect(player.y).toBe(3)
    })
    it('should not move to up when collision a wall', () => {
      const { player, movePlayerToUp } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToUp()
      expect(player.y).toBe(1)
    })
  })
  describe('push a cargo', () => {
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
    it('should push a cargo to left', () => {
      const { addCarge, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCarge(cargo)
      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 3
      player.y = 1

      movePlayerToLeft()

      expect(player.x).toBe(2)
      expect(cargo.x).toBe(1)
    })
    it('should push a cargo to right', () => {
      const { addCarge, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCarge(cargo)
      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToRight()

      expect(player.x).toBe(2)
      expect(cargo.x).toBe(3)
    })
    it('should push a cargo to up', () => {
      const { addCarge, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 2 })
      addCarge(cargo)
      const { player, movePlayerToUp } = usePlayerStore()
      player.x = 1
      player.y = 3

      movePlayerToUp()

      expect(player.y).toBe(2)
      expect(cargo.y).toBe(1)
    })
    it('should push a cargo to down', () => {
      const { addCarge, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 2 })
      addCarge(cargo)
      const { player, movePlayerToDown } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToDown()

      expect(player.y).toBe(2)
      expect(cargo.y).toBe(3)
    })

    it('should not push a cargo when collision a wall', () => {
      const { addCarge, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 1 })
      addCarge(cargo)
      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 2
      player.y = 1

      movePlayerToLeft()

      expect(player.x).toBe(2)
      expect(cargo.x).toBe(1)
    })
    it('should not push a cargo when collision a cargo', () => {
      const { addCarge, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCarge(cargo)
      addCarge(createCargo({ x: 3, y: 1 }))
      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToRight()

      expect(player.x).toBe(1)
      expect(cargo.x).toBe(2)
    })
  })
})
