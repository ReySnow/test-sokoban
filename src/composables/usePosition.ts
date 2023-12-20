import { computed } from 'vue'

export interface Positon {
  x: number
  y: number
}

export const STEP_GAME = 32
export const STEP_EDIT = 34

export function usePositon(pos: Positon, step: number = STEP_GAME) {
  const position = computed(() => {
    return {
      left: pos.x * step + 'px',
      top: pos.y * step + 'px'
    }
  })
  return { position }
}
