import { useGameStore } from '@/store/game'
import { usePlayerStore } from '@/store/player'
import { onMounted, onUnmounted } from 'vue'

export function useMove() {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown
  } = usePlayerStore()
  const { detectionGameCompleted } = useGameStore()
  function handleMove(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowUp':
        movePlayerToUp()
        break
      case 'ArrowDown':
        movePlayerToDown()
        break
      case 'ArrowLeft':
        movePlayerToLeft()
        break
      case 'ArrowRight':
        movePlayerToRight()
        break
    }
    detectionGameCompleted()
  }
  onMounted(() => {
    window.addEventListener('keyup', handleMove)
  })
  onUnmounted(() => {
    window.removeEventListener('keyup', handleMove)
  })
}
