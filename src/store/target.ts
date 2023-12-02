import { Positon } from '@/composables/usePosition'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface Target {
  x: number
  y: number
}

export const useTargetStore = defineStore('target', () => {
  const targets = reactive<Target[]>([])

  function addTarget(target: Target) {
    targets.push(target)
  }

  function createTarget({ x, y }: { x: number; y: number }): Target {
    return { x, y }
  }

  function findTarget(position: Positon) {
    return targets.find((target) => {
      return target.x === position.x && target.y === position.y
    })
  }

  return {
    targets,
    addTarget,
    createTarget,
    findTarget
  }
})
