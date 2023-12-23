import { defineStore } from 'pinia'
import { reactive } from 'vue'
let Id = 1
export interface EditTarget {
  x: number
  y: number
  id: number
}
export const useEditTargetStore = defineStore('editTarget', () => {
  const targets = reactive<EditTarget[]>([])

  function createTarget({ x, y }: { x: number; y: number }): EditTarget {
    return { x, y, id: Id++ }
  }

  function addTarget(Target: EditTarget) {
    targets.push(Target)
  }

  function removeTarget(Target: EditTarget) {
    targets.splice(targets.indexOf(Target), 1)
  }

  return {
    targets,
    createTarget,
    addTarget,
    removeTarget
  }
})
