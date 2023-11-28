import { onMounted, onUnmounted } from 'vue'
import { usePlayerStore } from '../../store/player'

export function useMove() {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown
  } = usePlayerStore()
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
  }
  onMounted(() => {
    window.addEventListener('keyup', handleMove)
  })
  onUnmounted(() => {
    window.removeEventListener('keyup', handleMove)
  })
}
