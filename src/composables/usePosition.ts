import { computed } from 'vue'

export interface Positon {
  x: number
  y: number
}

export function usePositon(pos: Positon) {
  const STEP = 32
  const position = computed(() => {
    return {
      left: pos.x * STEP + 'px',
      top: pos.y * STEP + 'px'
    }
  })
  return { position }
}
